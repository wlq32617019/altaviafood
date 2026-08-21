'use client';

import { useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const WEB3FORMS_ACCESS_KEY = 'f1dce5cc-4629-4378-8180-377e89d057ad';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inflightRef = useRef<AbortController | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inflightRef.current) {
      return;
    }

    const controller = new AbortController();
    inflightRef.current = controller;
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('subject', 'New Inquiry from Altavia Website');
      formData.append('from_name', 'Altavia Website Contact Form');

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          variant: 'success',
          title: 'Inquiry Sent Successfully',
          description:
            'Thank you for reaching out. We will get back to you shortly via email.',
          duration: 6000,
        });
        event.currentTarget.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Submission Failed',
          description:
            data?.message ||
            'Something went wrong. Please try again or email us directly at Sales@altaviafood.com.',
          duration: 7000,
        });
      }
    } catch (err) {
      if ((err as { name?: string })?.name === 'AbortError') {
        return;
      }
      toast({
        variant: 'destructive',
        title: 'Network Error',
        description:
          'Please check your connection and try again, or email Sales@altaviafood.com directly.',
        duration: 7000,
      });
    } finally {
      if (inflightRef.current === controller) {
        inflightRef.current = null;
      }
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="fade-in-up">
            <div className="gold-line mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Let&apos;s Build a Partnership
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Whether you&apos;re looking for reliable supply of premium poultry, beef, or lamb
              products, or you want to explore collaboration opportunities, we&apos;d love to
              hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Headquarters</h4>
                  <p className="text-gray-600 text-sm">Hong Kong SAR, China</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Processing Facility</h4>
                  <p className="text-gray-600 text-sm">Vietnam</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Email</h4>
                  <a
                    href="mailto:Sales@altaviafood.com"
                    className="text-gray-600 text-sm hover:text-amber transition-colors"
                  >
                    Sales@altaviafood.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="fade-in-up">
            <form
              onSubmit={onSubmit}
              className="p-8 rounded-2xl bg-cream border border-gray-100"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-navy mb-2">
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <option value="">Select your interest</option>
                    <option value="Poultry Products">Poultry Products</option>
                    <option value="Beef Products">Beef Products</option>
                    <option value="Lamb Products">Lamb Products</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
