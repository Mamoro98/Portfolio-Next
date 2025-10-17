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
    
    // Try common model names directly
    {
      const modelsToTry = [
        'gemini-1.5-pro',
        'gemini-1.0-pro', 
        'models/gemini-1.5-pro',
        'models/gemini-pro',
        'models/gemini-1.0-pro'
      ];
      
      const results = [];
      
      for (const modelName of modelsToTry) {
        try {
          const model = genAI.getGenerativeModel({ model: modelName });
          const result = await model.generateContent('Test');
          results.push({ model: modelName, status: 'success' });
          break; // If one works, we're good
        } catch (e) {
          results.push({ 
            model: modelName, 
            status: 'failed', 
            error: e instanceof Error ? e.message : 'Unknown error' 
          });
        }
      }
      
      return NextResponse.json({
        status: 'testing_models', 
        message: 'Tested common model names',
        apiKeyLength: process.env.GEMINI_API_KEY.length,
        testResults: results
      });
    }

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
