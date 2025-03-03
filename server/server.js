const express = require("express");
const cors = require("cors");
const sendgrid = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
app.use(cors()); 
app.use(express.json()); 

// Set up SendGrid API key from environment variables
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/api/sendEmail", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check if required fields are provided
    if (!name || !email || !message) {
      console.error("Validation Error: Missing required fields");
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Email configuration
    const emailContent = {
      to: "ashprimrose94@gmail.com",
      from: "ashley.m.primrose@gmail.com", 
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong></p><p>${message}</p>`,
    };

    // Send email using SendGrid
    await sendgrid.send(emailContent);

    console.log(`✅ Email sent successfully from ${name} (${email})`);

    return res.status(200).json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("🚨 SendGrid Error:", error.response?.body || error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
