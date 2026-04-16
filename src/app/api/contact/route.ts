import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const apiKey = process.env.VIZON_CRM_API_KEY;

    if (!apiKey) {
      console.error('VIZON_CRM_API_KEY is missing from environment variables');
      return NextResponse.json(
        { error: 'CRM integration is not configured correctly.' },
        { status: 500 }
      );
    }

    const response = await fetch('https://app.vizonos.com/api/crm/webhooks/receive', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Vizon OS Webhook Error:', errorText);
      return NextResponse.json(
        { error: `CRM integration failed: ${errorText}` },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
