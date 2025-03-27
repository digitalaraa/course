import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { allCourses } from '../data/courses';

const EnrollForm = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const courseId = queryParams.get('courseId');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        courseId: courseId || '', // Pre-fill courseId if available
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/enroll', {
                method: 'POST', // Ensure this is a POST request
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send form data as JSON
            });
            if (response.ok) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="enroll-form">
            <h2>Enroll in a Course</h2>
            {submitted ? (
                <p className="success-message">Thank you for enrolling! We'll contact you shortly.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="courseId">Select Course:</label>
                        <select
                            id="courseId"
                            name="courseId"
                            value={formData.courseId}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose a course</option>
                            {allCourses.map((course) => (
                                <option key={course.id} value={course.id}>
                                    {course.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="submit-button">
                        Enroll Now
                    </button>
                </form>
            )}
        </div>
    );
};

export default EnrollForm;