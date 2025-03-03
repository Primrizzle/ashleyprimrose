// api/sendEmail.js
const sgMail = require('@sendgrid/mail');

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Load your SendGrid API key from environment variables
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // Extract fields from the request body
  const { name, email, message } = req.body;

  // Build the email payload
  const msg = {
    to: 'ashprimrose94@gmail.com',        // <-- Where YOU want to receive messages
    from: 'ashley.m.primrose@gmail.com', // <-- Must be verified in SendGrid
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    // replyTo: email, // Optional: let you directly reply to the user's address
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('SendGrid Error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
