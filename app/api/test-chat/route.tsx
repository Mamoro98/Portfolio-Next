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
    
    // Try correct Gemini 2.5 model names
    const modelsToTry = [
      'gemini-2.5-flash',     // Latest Gemini 2.5 Flash model  
      'gemini-2.5-pro',       // Latest Gemini 2.5 Pro model
      'gemini-1.5-flash',     // Previous version Flash
      'gemini-1.5-pro',       // Previous version Pro
      'gemini-pro',           // Legacy stable model
      'models/gemini-2.5-flash',
      'models/gemini-2.5-pro',
      'models/gemini-1.5-flash'
    ];
    
    let workingModel = null;
    let workingResponse = null;
    const results = [];
    
    for (const modelName of modelsToTry) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent('Say hello');
        const response = await result.response;
        const text = response.text();
        
        // If we get here, this model works!
        workingModel = modelName;
        workingResponse = text;
        results.push({ model: modelName, status: 'SUCCESS', response: text });
        break;
        
      } catch (error) {
        results.push({ 
          model: modelName, 
          status: 'FAILED', 
          error: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
    }

    if (workingModel) {
      return NextResponse.json({
        status: 'success',
        message: 'Found working model!',
        workingModel: workingModel,
        response: workingResponse,
        allResults: results
      });
    } else {
      return NextResponse.json({
        status: 'all_failed',
        message: 'No models worked',
        allResults: results
      });
    }

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
