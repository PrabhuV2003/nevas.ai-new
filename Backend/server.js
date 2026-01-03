import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import nodemailer from "nodemailer"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

/* ================= SMTP CONFIG (OUTLOOK) ================= */
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.OUTLOOK_EMAIL,
    pass: process.env.OUTLOOK_PASSWORD,
  },
})

/* ================= EMAIL TEMPLATES ================= */

/* --- Client Auto Reply --- */
const clientTemplate = ({ firstName }) => `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f5f7fb;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 20px;">
<table width="600" style="background:#fff;border-radius:8px;overflow:hidden;">
<tr>
<td style="padding:30px;color:#fff;">
<h1 style="margin:0;">nevas.ai</h1>
<p style="margin:6px 0 0;">AI Automation & Digital Intelligence</p>
</td>
</tr>
<tr>
<td style="padding:30px;color:#222;">
<p>Hi <strong>${firstName}</strong>,</p>
<p>Thank you for contacting <strong>nevas.ai</strong>.</p>
<p>Your message has been received successfully. Our team will get back to you shortly.</p>
<a href="https://nevas.ai"
   style="display:inline-block;margin-top:20px;padding:12px 20px;
   background:#222;color:#fff;text-decoration:none;border-radius:4px;">
Visit nevas.ai
</a>
<p style="margin-top:30px;font-size:14px;color:#666;">
Regards,<br/><strong>nevas.ai Team</strong>
</p>
</td>
</tr>
<tr>
<td style="padding:16px;background:#f0f0f0;font-size:12px;text-align:center;color:#777;">
© 2026 nevas.ai · All rights reserved
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>
`

/* --- Admin Notification --- */
const adminTemplate = ({ firstName, lastName, email, phone, message }) => `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f5f7fb;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 20px;">
<table width="600" style="background:#fff;border-radius:8px;overflow:hidden;">
<tr>
<td style="padding:24px;background:#222;color:#fff;">
<h2 style="margin:0;">📩 New Contact Form Submission</h2>
</td>
</tr>
<tr>
<td style="padding:30px;color:#222;">
<p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || "N/A"}</p>
<hr style="margin:20px 0;">
<p><strong>Message:</strong></p>
<p style="background:#f8f8f8;padding:15px;border-radius:4px;">
${message}
</p>
</td>
</tr>
<tr>
<td style="padding:16px;background:#f0f0f0;font-size:12px;text-align:center;color:#777;">
nevas.ai · Internal Notification
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>
`

/* ================= API ROUTE ================= */
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body

  if (!firstName || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" })
  }

  try {
    /* Admin Mail */
    await transporter.sendMail({
      from: `"nevas.ai" <${process.env.OUTLOOK_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Lead – nevas.ai",
      html: adminTemplate({ firstName, lastName, email, phone, message }),
    })

    /* Client Auto Reply */
    await transporter.sendMail({
      from: `"nevas.ai Support" <${process.env.OUTLOOK_EMAIL}>`,
      to: email,
      subject: "We’ve received your message – nevas.ai",
      html: clientTemplate({ firstName }),
    })

    res.status(200).json({ message: "Message sent successfully" })
  } catch (err) {
    console.error("Email Error:", err)
    res.status(500).json({ message: "Failed to send message" })
  }
})

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
