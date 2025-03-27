const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const MAILERSEND_API_KEY = 'mlsn.18d9535f54f02c7451c14b927013abb4e8130f2f23a684a2f9380771561c6346'; // Replace with your key
const ADMIN_EMAIL = 'digitalaraa@gmail.com';
const SENDER_EMAIL = 'digitalaraa@gmail.com';

app.post('/api/enroll', async (req, res) => {
  const { name, email, course } = req.body;

  try {
    // 1. Send email to USER
    await sendEmail(
      email,
      'Course Enrollment Confirmation',
      `Hi ${name}, you've enrolled in ${course}!`
    );

    // 2. Send email to ADMIN
    await sendEmail(
      ADMIN_EMAIL,
      'New Course Enrollment',
      `User ${name} (${email}) enrolled in ${course}.`
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

async function sendEmail(to, subject, text) {
  const response = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${MAILERSEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: { email: SENDER_EMAIL },
      to: [{ email: to }],
      subject: subject,
      text: text,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to send email');
  }
}

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));