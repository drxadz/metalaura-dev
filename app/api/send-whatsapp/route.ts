import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Initialize Twilio client
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_WHATSAPP_NUMBER;

if (!accountSid || !authToken || !twilioPhoneNumber) {
  console.error('Missing Twilio credentials');
}

const twilioClient = twilio(accountSid, authToken);

export async function POST(request: Request) {
  try {
    const { phoneNumber, message } = await request.json();

    // Validate phone number format
    const formattedPhoneNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;

    // Send WhatsApp message using Twilio
    const response = await twilioClient.messages.create({
      from: `whatsapp:${twilioPhoneNumber}`,
      to: `whatsapp:${formattedPhoneNumber}`,
      body: message
    });

    console.log('WhatsApp message sent:', {
      to: formattedPhoneNumber,
      messageSid: response.sid,
      status: response.status
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      messageSid: response.sid
    });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 