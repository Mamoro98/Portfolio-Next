import { useState, useCallback, useEffect } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface UseChatReturn {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  clearError: () => void;
}

const STORAGE_KEY = 'omer-portfolio-chat-history';
const MAX_MESSAGES = 50; // Limit chat history to prevent memory issues
const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: "Hi! I'm Omer's AI assistant. I can help you learn about his background, research in Multi-Agent Reinforcement Learning, projects, and experience. What would you like to know?",
  timestamp: new Date().toISOString()
};

export const useChat = (): UseChatReturn => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [WELCOME_MESSAGE],
    isLoading: false,
    error: null
  });

  // Load messages from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedMessages = JSON.parse(stored) as Message[];
        // Validate stored messages
        if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
          setChatState(prev => ({
            ...prev,
            messages: [WELCOME_MESSAGE, ...parsedMessages.slice(-MAX_MESSAGES)]
          }));
        }
      }
    } catch (error) {
      console.warn('Failed to load chat history from localStorage:', error);
      // If loading fails, keep the welcome message
    }
  }, []);

  // Save messages to localStorage whenever messages change
  const saveMessages = useCallback((messages: Message[]) => {
    try {
      // Don't store the welcome message
      const messagesToStore = messages.filter(msg => msg.id !== 'welcome');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messagesToStore));
    } catch (error) {
      console.warn('Failed to save chat history to localStorage:', error);
    }
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: content.trim(),
      timestamp: new Date().toISOString()
    };

    // Add user message and set loading state
    setChatState(prev => {
      const newMessages = [...prev.messages, userMessage];
      saveMessages(newMessages);
      return {
        ...prev,
        messages: newMessages,
        isLoading: true,
        error: null
      };
    });

    try {
      // Prepare conversation history (exclude welcome message for API)
      const historyForAPI = chatState.messages
        .filter(msg => msg.id !== 'welcome')
        .map(msg => ({
          role: msg.role,
          content: msg.content
        }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content.trim(),
          history: historyForAPI
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.message,
        timestamp: data.timestamp || new Date().toISOString()
      };

      // Add assistant response and clear loading state
      setChatState(prev => {
        const newMessages = [...prev.messages, assistantMessage];
        saveMessages(newMessages);
        return {
          ...prev,
          messages: newMessages,
          isLoading: false,
          error: null
        };
      });

    } catch (error) {
      console.error('Failed to send message:', error);
      
      let errorMessage = 'Sorry, I encountered an error. Please try again.';
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        } else if (error.message.includes('429')) {
          errorMessage = 'AI service is busy. Please wait a moment and try again.';
        } else if (error.message.includes('503')) {
          errorMessage = 'AI service is temporarily unavailable. Please try again later.';
        }
      }

      setChatState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage
      }));
    }
  }, [chatState.messages, saveMessages]);

  const clearMessages = useCallback(() => {
    setChatState({
      messages: [WELCOME_MESSAGE],
      isLoading: false,
      error: null
    });
    
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear chat history from localStorage:', error);
    }
  }, []);

  const clearError = useCallback(() => {
    setChatState(prev => ({
      ...prev,
      error: null
    }));
  }, []);

  return {
    messages: chatState.messages,
    isLoading: chatState.isLoading,
    error: chatState.error,
    sendMessage,
    clearMessages,
    clearError
  };
};
