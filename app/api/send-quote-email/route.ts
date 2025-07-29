import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Use environment variables for security
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const TO_EMAIL = process.env.QUOTE_RECEIVER_EMAIL || GMAIL_USER;

if (!GMAIL_USER || !GMAIL_PASS) {
  console.error('Missing Gmail credentials');
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Accept both quote and contact forms
    // If firstName/lastName missing, use name
    const name = data.firstName && data.lastName
      ? `${data.firstName} ${data.lastName}`
      : data.name || 'N/A';
    const email = data.email || 'N/A';
    const phone = data.phone || 'N/A';
    const company = data.company || 'N/A';
    const subject = data.subject || '';
    const message = data.message || '';
    const timeline = data.timeline || '';
    // Quote-specific fields
    const serviceType = data.serviceType || '';
    const projectType = data.projectType || '';
    const description = data.description || '';
    const budget = data.budget || '';
    const hasPlans = data.hasPlans !== undefined ? (data.hasPlans ? 'Yes' : 'No') : '';
    const needsDesign = data.needsDesign !== undefined ? (data.needsDesign ? 'Yes' : 'No') : '';
    const installationRequired = data.installationRequired !== undefined ? (data.installationRequired ? 'Yes' : 'No') : '';
    const consultationDate = data.consultationDate ? new Date(data.consultationDate).toLocaleDateString() : '';
    const additionalNotes = data.additionalNotes || '';

    // Compose email body
    let emailBody = `<h2>New Website Submission</h2>`;
    emailBody += `<p><strong>Name:</strong> ${name}</p>`;
    emailBody += `<p><strong>Email:</strong> ${email}</p>`;
    emailBody += `<p><strong>Phone:</strong> ${phone}</p>`;
    emailBody += `<p><strong>Company:</strong> ${company}</p>`;
    if (subject) emailBody += `<p><strong>Subject:</strong> ${subject}</p>`;
    if (message) emailBody += `<p><strong>Message:</strong> ${message}</p>`;
    if (timeline) emailBody += `<p><strong>Timeline:</strong> ${timeline}</p>`;
    if (serviceType) emailBody += `<p><strong>Service Type:</strong> ${serviceType}</p>`;
    if (projectType) emailBody += `<p><strong>Project Type:</strong> ${projectType}</p>`;
    if (description) emailBody += `<p><strong>Description:</strong> ${description}</p>`;
    if (budget) emailBody += `<p><strong>Budget:</strong> ${budget}</p>`;
    if (hasPlans) emailBody += `<p><strong>Has Plans:</strong> ${hasPlans}</p>`;
    if (needsDesign) emailBody += `<p><strong>Needs Design:</strong> ${needsDesign}</p>`;
    if (installationRequired) emailBody += `<p><strong>Installation Required:</strong> ${installationRequired}</p>`;
    if (consultationDate) emailBody += `<p><strong>Consultation Date:</strong> ${consultationDate}</p>`;
    if (additionalNotes) emailBody += `<p><strong>Additional Notes:</strong> ${additionalNotes}</p>`;

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `Website Form <${GMAIL_USER}>`,
      to: TO_EMAIL,
      subject: subject ? `Contact Form: ${subject}` : 'New Website Submission',
      html: emailBody,
    });

    return NextResponse.json({ success: true, message: 'Submission sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send submission', error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
} 