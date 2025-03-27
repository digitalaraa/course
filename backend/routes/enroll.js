const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// File path for storing enrollments
const enrollmentsFilePath = path.join(__dirname, '../enrollments.json');

// POST /api/enroll
router.post('/enroll', async (req, res) => {
    const { name, email, courseId } = req.body;

    // Read existing enrollments
    let enrollments = [];
    if (fs.existsSync(enrollmentsFilePath)) {
        enrollments = JSON.parse(fs.readFileSync(enrollmentsFilePath));
    }

    // Add new enrollment
    const newEnrollment = { name, email, courseId, date: new Date() };
    enrollments.push(newEnrollment);

    // Save updated enrollments
    fs.writeFileSync(enrollmentsFilePath, JSON.stringify(enrollments, null, 2));

    // Send email to user
    const userMailOptions = {
        to: email,
        from: process.env.EMAIL_USER,
        subject: 'Course Enrollment Confirmation',
        html: `
            <h2>Hi ${name},</h2>
            <p>Thank you for enrolling in the course! We will contact you shortly with further details.</p>
            <p><strong>Course ID:</strong> ${courseId}</p>
            <p>Best regards,<br>Your Course Team</p>
        `,
    };

    // Send email to admin
    const adminMailOptions = {
        to: process.env.ADMIN_EMAIL,
        from: process.env.EMAIL_USER,
        subject: 'New Course Enrollment',
        html: `
            <h2>New Enrollment</h2>
            <p>A new user has enrolled in a course:</p>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Course ID:</strong> ${courseId}</li>
                <li><strong>Date:</strong> ${new Date().toLocaleString()}</li>
            </ul>
        `,
    };

    try {
        // Send emails using SendGrid
        await sgMail.send(userMailOptions);
        await sgMail.send(adminMailOptions);

        res.status(200).json({ message: 'Enrollment successful! Emails sent.' });
    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ 
            message: 'Enrollment successful, but emails could not be sent.',
            error: error.message,
        });
    }
});

module.exports = router;