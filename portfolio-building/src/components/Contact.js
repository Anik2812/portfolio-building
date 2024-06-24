import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h2 className="section-title">Let's Connect</h2>
            <div className="contact-content">
                <form id="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="cta-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
