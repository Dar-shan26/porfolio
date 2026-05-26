import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validateContactPayload({ name, email, subject, message }) {
  if (!name || !email || !subject || !message) {
    return "Name, email, subject, and message are required.";
  }

  if (!emailPattern.test(email)) {
    return "Please provide a valid email address.";
  }

  if (message.length < 10) {
    return "Message must be at least 10 characters long.";
  }

  return null;
}

function createTransporter() {
  const { EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
    throw new Error("Email environment variables are not configured.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
}

export async function sendContactMessage(req, res) {
  const { name, email, subject, message, company } = req.body;

  if (company) {
    return res.status(200).json({ success: true, message: "Message received." });
  }

  const validationError = validateContactPayload({ name, email, subject, message });

  if (validationError) {
    return res.status(400).json({ success: false, message: validationError });
  }

  try {
    const transporter = createTransporter();
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>New portfolio contact message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Your message has been sent successfully." });
  } catch (error) {
    console.error("Contact email error:", error);
    return res.status(500).json({
      success: false,
      message: "Email could not be sent. Please check backend email configuration.",
    });
  }
}
