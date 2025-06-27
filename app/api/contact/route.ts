import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    // For now, log the form data (replace with actual email service later)
    console.log('Form submission:', { name, email, message });

    // Simulate success (replace with real email service like Resend or SendGrid)
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}