import emailjs from '@emailjs/browser';
import type { ContactForm } from '../types';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export const emailService = {
  sendEmail: async (form: ContactForm & { subject?: string }): Promise<void> => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error('EmailJS is not configured. Please add credentials to .env');
    }

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || `[Inquiry] ${form.projectType} (${form.budget})`,
          message: form.message,
          project_type: form.projectType,
          budget: form.budget,
          to_name: 'Vishwaram J',
        },
        PUBLIC_KEY
      );

      if (response.status !== 200) {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw new Error('Failed to send inquiry. Please try again or contact directly.');
    }
  },
};