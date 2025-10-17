"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      
      if (result.error) {
        throw new Error('Email service error');
      }
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  }, [formData]);

  const inputClasses = "w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300";
  const labelClasses = "block text-white font-medium mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={inputClasses}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClasses}>
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project, timeline, and budget..."
          rows={6}
          className={`${inputClasses} resize-none`}
          required
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform ${
          isSubmitting 
            ? 'bg-gray-600 cursor-not-allowed' 
            : submitStatus === 'success'
            ? 'bg-green-600 hover:bg-green-700'
            : submitStatus === 'error'
            ? 'bg-red-600 hover:bg-red-700'
            : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:-translate-y-1'
        }`}
        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : submitStatus === 'success' ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Message Sent!
          </>
        ) : submitStatus === 'error' ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Try Again
          </>
        ) : (
          <>
            <PaperAirplaneIcon className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>

      {submitStatus === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 text-center text-sm"
        >
          Thanks for your message! I'll get back to you within 24 hours.
        </motion.p>
      )}

      {submitStatus === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-center text-sm"
        >
          Oops! Something went wrong. Please try again or contact me directly.
        </motion.p>
      )}

      <p className="text-gray-400 text-xs text-center">
        All fields marked with * are required. Your information is kept confidential.
      </p>
    </form>
  );
};

export default Form;
