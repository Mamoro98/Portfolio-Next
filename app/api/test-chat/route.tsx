import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Testing Gemini API...');
    
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({
        status: 'error',
        message: 'GEMINI_API_KEY not found'
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Try the most basic model name
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const result = await model.generateContent('Say hello');
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      status: 'success',
      message: 'Gemini is working!',
      response: text,
      modelUsed: 'gemini-1.5-flash'
    });

  } catch (error) {
    console.error('Test error:', error);
    
    return NextResponse.json({
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error',
      errorType: error?.constructor?.name,
      apiKeyPresent: !!process.env.GEMINI_API_KEY,
      apiKeyLength: process.env.GEMINI_API_KEY?.length || 0
    });
  }
}
