import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, company, email, phone, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Website Contact <noreply@amasiscindo.com>',
    to: 'crewingamas@amasiscindo.com',
    replyTo: email,
    subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
    text: [
      `Name:    ${name}`,
      `Company: ${company || '—'}`,
      `Email:   ${email}`,
      `Phone:   ${phone || '—'}`,
      '',
      message,
    ].join('\n'),
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
