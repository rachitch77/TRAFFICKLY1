import { Router } from "express";
import nodemailer from "nodemailer";
import { CreateLeadBody } from "@workspace/api-zod";

const router = Router();

router.post("/leads", async (req, res) => {
  const parsed = CreateLeadBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(422).json({
      error: "Validation failed",
      details: parsed.error.issues,
    });
    return;
  }

  const { name, email, phone, businessType, message } = parsed.data;

  const smtpUser = process.env["SMTP_USER"];
  const smtpPass = process.env["SMTP_PASS"];

  if (!smtpUser || !smtpPass) {
    req.log.warn("SMTP_USER or SMTP_PASS not set — skipping email delivery");
    res.status(201).json({ success: true, message: "Lead received." });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"GrowthAI Contact Form" <${smtpUser}>`,
    to: "hello@traffickly.com",
    subject: `New Lead: ${name} — ${businessType}`,
    text: [
      `Name:          ${name}`,
      `Email:         ${email}`,
      `Phone:         ${phone}`,
      `Business Type: ${businessType}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#7c3aed">New Lead from GrowthAI</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;font-weight:bold;color:#555;width:140px">Name</td><td>${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#555">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#555">Phone</td><td>${phone}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#555">Business Type</td><td>${businessType}</td></tr>
        </table>
        <h3 style="color:#555;margin-top:24px">Message</h3>
        <p style="background:#f4f4f5;padding:16px;border-radius:8px;white-space:pre-wrap">${message}</p>
      </div>
    `,
  });

  req.log.info({ name, email }, "Lead email sent");
  res.status(201).json({ success: true, message: "Lead received and forwarded." });
});

export default router;
