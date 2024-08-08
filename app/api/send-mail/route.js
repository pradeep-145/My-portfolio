
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email, name, description } = await req.json();

    const Transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: name,
      text: description
    };

    const info = await Transport.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (err) {
    console.error(err.message);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
