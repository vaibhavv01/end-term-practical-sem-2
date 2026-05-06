import { useState } from 'react';
import './Contact.css';

const contactItems = [
  { icon: '📧', label: 'Email', value: 'hello@myapp.dev' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/myapp' },
  { icon: '🌍', label: 'Location', value: 'Remote, Worldwide' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | null

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate async submission
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="contact page-enter">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-inner">
          <span className="page-tag">Contact</span>
          <h1 className="page-title">Let's talk</h1>
          <p className="page-subtitle">
            Have a project in mind, a question, or just want to say hi?
            Drop us a message — we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Body */}
      <section className="contact-body">
        <div className="contact-inner">
          {/* Form */}
          <div className="contact-form-wrap">
            <h2 className="contact-section-heading">Send a Message</h2>

            {status === 'sent' ? (
              <div className="success-box">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you shortly.</p>
                <button className="btn-reset" onClick={() => setStatus(null)}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <span className="btn-loading">Sending…</span>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="contact-section-heading">Get in Touch</h2>
            <p className="contact-info-desc">
              Prefer a direct channel? Find us through any of the options below.
            </p>

            <div className="contact-items">
              {contactItems.map((item) => (
                <div key={item.label} className="contact-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-note">
              <p>Response time: usually within a business day.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
