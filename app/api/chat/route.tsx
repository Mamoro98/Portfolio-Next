import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { portfolioContext } from '@/app/lib/portfolioContext';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `You are Omer Ebead's AI assistant on his professional portfolio website. You help visitors learn about Omer's background, experience, research, and projects in a professional yet approachable manner.

ABOUT OMER:
${JSON.stringify(portfolioContext, null, 2)}

PERSONALITY & TONE:
- Professional but friendly and approachable
- Knowledgeable about AI, MARL, and software development
- Enthusiastic about Omer's research and achievements
- Helpful in guiding visitors through the portfolio
- Technical when needed, but accessible to non-technical visitors

CAPABILITIES:
- Answer questions about Omer's background, education, and experience
- Explain his research in Multi-Agent Reinforcement Learning
- Describe his projects and technical expertise
- Help visitors navigate the portfolio
- Provide insights into his skills and achievements
- Discuss his current work at InstaDeep and AIMS South Africa

GUIDELINES:
- Always stay in character as Omer's AI assistant
- Be accurate and only use information from the provided context
- If you don't know something specific, be honest about it
- Keep responses concise but informative
- Encourage visitors to contact Omer directly for opportunities
- Highlight his expertise in MARL, AI research, and full-stack development
- Mention his Google DeepMind Scholarship and academic excellence when relevant

Remember: You represent Omer professionally, so maintain high standards while being personable and helpful.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history = [] } = body;

    // Validate input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Check message length
    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message too long. Please keep it under 1000 characters.' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'AI service temporarily unavailable' },
        { status: 503 }
      );
    }

    // Get the generative model - try AI Studio compatible models
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',  // Most common AI Studio model
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 1024,
      }
    });

    // Build conversation history
    const conversationHistory = history
      .map((msg: { role: string; content: string }) => 
        `${msg.role === 'user' ? 'Human' : 'Assistant'}: ${msg.content}`
      )
      .join('\n');

    // Create the full prompt
    const fullPrompt = `${SYSTEM_PROMPT}

CONVERSATION HISTORY:
${conversationHistory}

CURRENT QUESTION: ${message}

Please respond as Omer's AI assistant:`;

    // Generate response
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    // Basic response validation
    if (!text || text.trim().length === 0) {
      throw new Error('Empty response from AI');
    }

    return NextResponse.json({
      message: text.trim(),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat API error:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      apiKeyPresent: !!process.env.GEMINI_API_KEY,
      apiKeyLength: process.env.GEMINI_API_KEY?.length || 0
    });
    
    // Handle specific API errors
    if (error instanceof Error) {
      if (error.message.includes('API_KEY') || error.message.includes('Invalid API key')) {
        return NextResponse.json(
          { error: 'AI service configuration error', details: 'Invalid or missing API key' },
          { status: 503 }
        );
      }
      
      if (error.message.includes('quota') || error.message.includes('limit')) {
        return NextResponse.json(
          { error: 'AI service temporarily unavailable due to high demand' },
          { status: 429 }
        );
      }

      if (error.message.includes('PERMISSION_DENIED')) {
        return NextResponse.json(
          { error: 'API key does not have permission to use Gemini' },
          { status: 403 }
        );
      }

      if (error.message.includes('404') || error.message.includes('not found')) {
        return NextResponse.json(
          { error: 'AI model temporarily unavailable' },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { 
        error: 'Sorry, I encountered an error. Please try again.',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
      },
      { status: 500 }
    );
  }
}