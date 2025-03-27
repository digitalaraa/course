const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const enrollmentsFilePath = path.join(__dirname, '../enrollments.json');

// GET /api/enrollments
router.get('/enrollments', (req, res) => {
    if (fs.existsSync(enrollmentsFilePath)) {
        const enrollments = JSON.parse(fs.readFileSync(enrollmentsFilePath));
        res.status(200).json(enrollments);
    } else {
        res.status(404).json({ message: 'No enrollments found.' });
    }
});

module.exports = router;