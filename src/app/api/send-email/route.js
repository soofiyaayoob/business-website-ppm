// app/api/send-email/route.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { name, email, message, phone, address } = await req.json();

  const msg = {
    to: 'info@ppmuae.com', 
    from: 'info-ppm@ppmgeneraltrading.com', 
    replyTo: email,
    subject: 'New Contact Request from Website',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone || 'N/A'}</p>
        <p><strong>Address:</strong> ${address || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `,
  };

  try {
    await sgMail.send(msg);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || 'Internal Error' }), {
      status: 500,
    });
  }
}
