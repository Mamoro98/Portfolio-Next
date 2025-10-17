import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if API key exists
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({
        status: 'error',
        message: 'GEMINI_API_KEY not found in environment variables'
      });
    }

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Simple test prompt
    const result = await model.generateContent('Say "Hello! Gemini API is working correctly."');
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      status: 'success',
      message: 'Gemini API is working',
      apiKeyLength: process.env.GEMINI_API_KEY.length,
      response: text
    });

  } catch (error) {
    console.error('Gemini test error:', error);
    
    return NextResponse.json({
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error',
      apiKeyPresent: !!process.env.GEMINI_API_KEY,
      apiKeyLength: process.env.GEMINI_API_KEY?.length || 0
    });
  }
}
