import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your message, ${formData.name}! I will get back to you soon.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact">
            <h2 className="section-title">Initiate Communication</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" id="name" required value={formData.name} onChange={handleChange} />
                    <label htmlFor="name">Your name</label>
                </div>
                <div className="form-group">
                    <input type="email" id="email" required value={formData.email} onChange={handleChange} />
                    <label htmlFor="email">Your Email</label>
                </div>
                <div className="form-group">
                    <textarea id="message" required value={formData.message} onChange={handleChange}></textarea>
                    <label htmlFor="message">Your Message</label>
                </div>
                <button type="submit" className="btn-send">Transmit</button>
            </form>
        </section>
    );
}

export default Contact;