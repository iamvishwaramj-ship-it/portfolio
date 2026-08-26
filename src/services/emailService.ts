import emailjs from '@emailjs/browser';
import type { ContactForm } from '../types';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export const emailService = {
  sendEmail: async (form: ContactForm): Promise<void> => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error('EmailJS is not configured. Please add credentials to .env');
    }

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || `[Inquiry] ${form.projectType} (${form.budget})`,
        message: form.message,
        to_name: 'Vishwaram J',
      },
      PUBLIC_KEY
    );
  },
};
