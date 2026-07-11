import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ContactFormData } from '../../types';
import { isValidEmail, isValidPhone } from '../../utils/validateForm';
import { TIMING } from '../../utils/constants';

/**
 * Contact form styled for white background — matches the live site.
 * Gold labels, bordered inputs, gold submit button.
 */
export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    mode: 'onTouched',
  });

  const onSubmit = async (_data: ContactFormData) => {
    setSubmitStatus('loading');
    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.1) resolve();
          else reject(new Error('Network error'));
        }, TIMING.form_submit_delay);
      });
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  const labelClass = 'block text-sm font-body text-brand-gold font-semibold mb-1';
  const inputClass = 'w-full px-4 py-3 border border-gray-300 rounded text-brand-dark font-body placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors';

  return (
    <div>
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-300 text-green-700 font-body" role="alert" aria-live="polite">
          Thank you! We'll be in touch soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-300 text-red-700 font-body" role="alert" aria-live="polite">
          Unable to send your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div>
          <label htmlFor="fullName" className={labelClass}>First Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="First Name"
            maxLength={100}
            aria-required="true"
            aria-invalid={errors.fullName ? 'true' : 'false'}
            className={inputClass}
            {...register('fullName', {
              required: 'First Name is required',
              validate: (v) => v.trim().length > 0 || 'First Name is required',
            })}
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-500 font-body" role="alert">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            maxLength={254}
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            className={inputClass}
            {...register('email', {
              required: 'Email is required',
              validate: (v) => {
                if (!v.trim()) return 'Email is required';
                if (!isValidEmail(v.trim())) return 'Please enter a valid email address';
                return true;
              },
            })}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500 font-body" role="alert">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            maxLength={15}
            aria-required="false"
            className={inputClass}
            {...register('phone', {
              validate: (v) => {
                if (!v || v.trim().length === 0) return true;
                if (!isValidPhone(v)) return 'Please enter a valid 10-digit phone number';
                return true;
              },
            })}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500 font-body" role="alert">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>Your Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows={5}
            maxLength={1000}
            aria-required="true"
            aria-invalid={errors.message ? 'true' : 'false'}
            className={`${inputClass} resize-vertical`}
            {...register('message', {
              required: 'Message is required',
              validate: (v) => v.trim().length > 0 || 'Message is required',
            })}
          />
          {errors.message && <p className="mt-1 text-sm text-red-500 font-body" role="alert">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-brand-gold text-brand-dark font-body font-bold text-base uppercase tracking-wider hover:bg-brand-gold-light transition-colors duration-300 min-h-[44px]"
          disabled={submitStatus === 'loading'}
        >
          {submitStatus === 'loading' ? 'Sending...' : 'Booking Now'}
        </button>
      </form>
    </div>
  );
}
