import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { z } from 'zod';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, Mail, Send, Phone, MapPin, CheckCircle2, AlertCircle, ArrowUpRight, Github, Linkedin, Instagram, Building2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid work email address'),
  company: z.string().optional(),
  engagementType: z.string().min(1, 'Please select an engagement type'),
  projectType: z.string().min(1, 'Please select an area of interest'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

type FormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    engagementType: 'Full-Time Position',
    projectType: 'Senior Product Designer & Frontend Lead',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Listen for custom service selection from Services component
  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          projectType: customEvent.detail,
        }));
      }
    };

    window.addEventListener('select-service', handleSelectService);
    return () => window.removeEventListener('select-service', handleSelectService);
  }, []);

  const engagementOptions = [
    'Full-Time Job Role',
    'Senior Permanent Position',
    'Direct Contract',
    'Remote / Hybrid Role',
  ];

  const projectTypeOptions = [
    'Senior Product Designer & Frontend Lead',
    'Atomic Design System Engineering',
    'Next.js & React 19 Web Architecture',
    'Core Web Vitals & SLA Performance Tuning',
    'Enterprise Digital Product Overhaul',
    'Executive / Team Leadership Opportunity',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);
    setServerError(null);

    // Validate with Zod
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      validation.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof FormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(data.message || 'Inquiry sent successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
          engagementType: 'Full-Time Position',
          projectType: 'Senior Product Designer & Frontend Lead',
          message: '',
        });

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D68379', '#C8746B', '#B85C52'],
        });
      } else {
        setServerError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setServerError('An unexpected network error occurred. Please try contacting directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#572A26] pb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-display text-[#D68379] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 // RECRUITMENT &amp; JOB INQUIRIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fff8f0]">
            Contact Mesrour Directly.
          </h2>
          <p className="text-rose-200/80 max-w-xl text-base sm:text-lg font-sans font-light">
            Actively seeking full-time Graphic Designer x Developer job roles. <strong className="text-[#D68379]">Notice: Solo specialist seeking employment — NOT a team or agency.</strong>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl bg-[#251110] text-[#fff8f0] border border-[#572A26] space-y-6 shadow-xl">
            <span className="text-xs font-display text-[#D68379] font-bold uppercase tracking-widest block">
              DIRECT CHANNELS &amp; CONTACT
            </span>

            <div className="space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#150B0A] border border-[#381B19] hover:border-[#D68379] transition-colors"
                data-cursor="EMAIL"
              >
                <div className="p-3 rounded-xl bg-[#381B19] text-[#D68379] group-hover:bg-[#D68379] group-hover:text-[#fff8f0] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-display text-rose-300/60 block uppercase">CORPORATE EMAIL</span>
                  <span className="text-sm font-display font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#150B0A] border border-[#381B19] hover:border-[#D68379] transition-colors"
                data-cursor="WHATSAPP"
              >
                <div className="p-3 rounded-xl bg-[#381B19] text-[#D68379] group-hover:bg-[#D68379] group-hover:text-[#fff8f0] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-display text-rose-300/60 block uppercase">DIRECT PHONE / WHATSAPP</span>
                  <span className="text-sm font-display font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#150B0A] border border-[#381B19]">
                <div className="p-3 rounded-xl bg-[#381B19] text-[#D68379]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-display text-rose-300/60 block uppercase">LOCATION &amp; TIMEZONE</span>
                  <span className="text-sm font-display font-bold text-[#fff8f0]">
                    {PERSONAL_INFO.location} (UTC+1)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="space-y-3">
            <span className="text-xs font-display text-rose-300/70 uppercase tracking-widest block font-semibold">
              PROFESSIONAL NETWORKS &amp; REPOSITORIES
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-2xl bg-[#251110] border border-[#572A26] text-xs font-display font-bold text-rose-200 hover:border-[#D68379] hover:text-[#fff8f0] flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-2xl bg-[#251110] border border-[#572A26] text-xs font-display font-bold text-rose-200 hover:border-[#D68379] hover:text-[#fff8f0] flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-2xl bg-[#251110] border border-[#572A26] text-xs font-display font-bold text-rose-200 hover:border-[#D68379] hover:text-[#fff8f0] flex items-center gap-1.5 transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-2xl bg-[#251110] border border-[#572A26] text-xs font-display font-bold text-rose-200 hover:border-[#D68379] hover:text-[#fff8f0] flex items-center gap-1.5 transition-colors"
              >
                <span>Dribbble</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-[#251110] border border-[#572A26] shadow-xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-[#381B19] pb-4">
              <h3 className="text-xl font-serif font-bold text-[#fff8f0]">
                RECRUITMENT &amp; CORPORATE INQUIRY FORM
              </h3>
              <span className="text-xs font-display text-[#D68379] font-bold uppercase tracking-wider">CONFIDENTIAL</span>
            </div>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm font-medium flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                <span>{submitSuccess}</span>
              </motion.div>
            )}

            {serverError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-red-500/15 border border-red-500/40 text-red-300 text-sm font-medium flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                <span>{serverError}</span>
              </motion.div>
            )}

            {/* Name & Email Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-display uppercase font-semibold text-rose-200">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jean-Luc Picard"
                  className={`w-full px-4 py-3 rounded-xl bg-[#150B0A] border ${
                    errors.name ? 'border-red-500' : 'border-[#381B19]'
                  } focus:outline-none focus:border-[#D68379] text-sm text-[#fff8f0] font-sans`}
                />
                {errors.name && <span className="text-xs text-red-400 font-display">{errors.name}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display uppercase font-semibold text-rose-200">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. j.picard@company.com"
                  className={`w-full px-4 py-3 rounded-xl bg-[#150B0A] border ${
                    errors.email ? 'border-red-500' : 'border-[#381B19]'
                  } focus:outline-none focus:border-[#D68379] text-sm text-[#fff8f0] font-sans`}
                />
                {errors.email && <span className="text-xs text-red-400 font-display">{errors.email}</span>}
              </div>
            </div>

            {/* Company / Organization Name */}
            <div className="space-y-2">
              <label className="text-xs font-display uppercase font-semibold text-rose-200 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#D68379]" />
                <span>Company / Organization Name</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Enterprise Software Corp / Agency Name"
                className="w-full px-4 py-3 rounded-xl bg-[#150B0A] border border-[#381B19] focus:outline-none focus:border-[#D68379] text-sm text-[#fff8f0] font-sans"
              />
            </div>

            {/* Engagement Model */}
            <div className="space-y-2">
              <label className="text-xs font-display uppercase font-semibold text-rose-200">
                Opportunity / Engagement Type *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {engagementOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, engagementType: opt }))}
                    className={`py-2.5 px-3 rounded-xl text-xs font-display font-bold border transition-all ${
                      formData.engagementType === opt
                        ? 'bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#fff8f0] border-[#D68379]'
                        : 'bg-[#150B0A] border-[#381B19] text-rose-200 hover:border-[#D68379]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Capability / Scope */}
            <div className="space-y-2">
              <label className="text-xs font-display uppercase font-semibold text-rose-200">
                Primary Area of Focus / Role *
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#150B0A] border border-[#381B19] focus:outline-none focus:border-[#D68379] text-sm text-[#fff8f0] font-sans"
              >
                {projectTypeOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#150B0A] text-[#fff8f0]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label className="text-xs font-display uppercase font-semibold text-rose-200">
                Message &amp; Role Details *
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share details regarding your full-time job opening, Graphic Design & Development scope, remote/hybrid policy, or timeline..."
                className={`w-full px-4 py-3 rounded-xl bg-[#150B0A] border ${
                  errors.message ? 'border-red-500' : 'border-[#381B19]'
                } focus:outline-none focus:border-[#D68379] text-sm text-[#fff8f0] font-sans`}
              />
              {errors.message && <span className="text-xs text-red-400 font-display">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#B85C52] via-[#C8746B] to-[#D68379] text-[#fff8f0] font-display font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl shadow-rose-950/60 disabled:opacity-50"
              data-cursor="SUBMIT"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Job Opportunity Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
