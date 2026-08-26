import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { emailService } from '../services/emailService';
import { PERSONAL_INFO } from '../constants/data';
import ScrollReveal from '../components/shared/ScrollReveal';
import type { ContactForm, FormStatus } from '../types';
import { staggerContainer, staggerItem } from '../utils/animations';

const CONTACT_INFO = [
  {
    icon: <FaEnvelope className="w-5 h-5" />,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    color: '#6366f1',
  },
  {
    icon: <FaWhatsapp className="w-5 h-5" />,
    label: 'WhatsApp',
    value: PERSONAL_INFO.phone,
    href: PERSONAL_INFO.whatsapp || `https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`,
    color: '#25D366',
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    label: 'GitHub',
    value: `@${PERSONAL_INFO.github}`,
    href: PERSONAL_INFO.githubUrl,
    color: '#6366f1',
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'Vishwaram J',
    href: PERSONAL_INFO.linkedin,
    color: '#0A66C2',
  },
];

const PROJECT_TYPE_OPTIONS = [
  'Business Website',
  'Portfolio Website',
  'Landing Page',
  'Website Fix',
  'React / Frontend Development',
  'Other',
];

const BUDGET_OPTIONS = [
  'Under ₹2,000',
  '₹2,000 – ₹5,000',
  '₹5,000 – ₹10,000',
  '₹10,000+',
  'Not sure yet',
];

const INITIAL_FORM: ContactForm = {
  name: '',
  email: '',
  projectType: 'Business Website',
  budget: '₹2,000 – ₹5,000',
  message: '',
};

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const validate = (): boolean => {
    const newErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.message.trim()) newErrors.message = 'Project details are required';
    else if (form.message.trim().length < 15) newErrors.message = 'Please provide a bit more detail (at least 15 characters)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ type: 'loading', message: '' });
    try {
      await emailService.sendEmail({
        ...form,
        subject: `[Freelance Inquiry] ${form.projectType} (${form.budget})`,
        message: `Project Type: ${form.projectType}\nBudget Range: ${form.budget}\n\nMessage:\n${form.message}`,
      });
      setStatus({ type: 'success', message: "Inquiry sent! I'll review your requirements and respond promptly." });
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus({
        type: 'error',
        message: err instanceof Error ? err.message : 'Failed to send inquiry. Please try again.',
      });
    }

    setTimeout(() => setStatus({ type: 'idle', message: '' }), 6000);
  };

  const inputClass = (field: keyof ContactForm) =>
    `w-full px-4 py-3 rounded-xl text-sm transition-all outline-none ${
      errors[field] ? 'border-red-500' : 'border-transparent focus:border-indigo-500'
    }`;

  const inputStyle = {
    background: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-color)',
  };

  return (
    <section id="contact" className="section-padding" aria-label="Contact section">
      <div className="section-container">
        {/* Heading */}
        <ScrollReveal className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--color-primary)' }}
          >
            Let's Work Together
          </span>
          <h2 className="text-section-title font-poppins font-bold">
            Have a project <span className="gradient-text">in mind?</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            Tell me what you need, and I'll get back to you with the next steps.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Direct Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-poppins" style={{ color: 'var(--text-primary)' }}>
                Direct Contact
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {CONTACT_INFO.map(info => (
                  <motion.div key={info.label} variants={staggerItem}>
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 glass-card hover-lift group no-underline"
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                        style={{ background: `linear-gradient(135deg, ${info.color}, ${info.color}88)` }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-muted)' }}>
                          {info.label}
                        </p>
                        <p
                          className="text-sm font-medium group-hover:underline"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              {/* Location card */}
              <div className="flex items-center gap-4 p-4 glass-card">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                  style={{ background: 'linear-gradient(135deg, #06b6d4, #06b6d488)' }}
                >
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    Location
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Availability badge */}
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                  <span className="font-semibold">Available for part-time freelance projects</span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Inquiry Form */}
          <ScrollReveal direction="right">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold font-poppins mb-6" style={{ color: 'var(--text-primary)' }}>
                Send Project Inquiry
              </h3>

              {/* Status notification */}
              <AnimatePresence>
                {status.type !== 'idle' && status.type !== 'loading' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-3 p-4 rounded-xl mb-6 text-sm ${
                      status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
                    }`}
                  >
                    {status.type === 'success' && <FaCheckCircle className="w-4 h-4 flex-shrink-0" />}
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={inputClass('name')}
                      style={inputStyle}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs mt-1 text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass('email')}
                      style={inputStyle}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs mt-1 text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      id="contact-project-type"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none cursor-pointer"
                      style={inputStyle}
                    >
                      {PROJECT_TYPE_OPTIONS.map((option) => (
                        <option key={option} value={option} style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      id="contact-budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none cursor-pointer"
                      style={inputStyle}
                    >
                      {BUDGET_OPTIONS.map((option) => (
                        <option key={option} value={option} style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project details / message */}
                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    Project Details / Message *
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your goals, requirements, or key features..."
                    className={`${inputClass('message')} resize-none`}
                    style={inputStyle}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs mt-1 text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status.type === 'loading'}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                  aria-busy={status.type === 'loading'}
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" /> Send Inquiry
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
