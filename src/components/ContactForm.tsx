/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Inbox, Star, CheckCircle, RotateCcw, Shield } from 'lucide-react';
import { ContactSubmission } from '../types';

export default function ContactForm() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showInbox, setShowInbox] = useState(false);

  // Initialize and seed subissions in local storage
  useEffect(() => {
    const saved = localStorage.getItem('diya_submissions');
    if (saved) {
      setSubmissions(JSON.parse(saved));
    } else {
      const initialSeed: ContactSubmission[] = [
        {
          id: 'seed-1',
          name: 'Sarah Jenkins',
          email: 'sjenkins@growmediagroup.co',
          subject: 'Social Media Intern Opening (Indore)',
          message: 'Hi Diya, I reviewed your @hairtalesofficial campaign mockups. We have an upcoming client and your aesthetic layout matching looks perfect. Are you interested in a part-time internship?',
          date: '2026-06-12, 10:24 AM',
          status: 'read'
        },
        {
          id: 'seed-2',
          name: 'Rajesh Mishra',
          email: 'rajesh@brandnexus.in',
          subject: 'Brand Bazar Contest Review',
          message: 'Excellent presentation at the Brand Bazar event. Your reels strategy was well thought out. Let\'s schedule a call next week to talk about junior coordinator roles.',
          date: '2026-06-13, 04:15 PM',
          status: 'starred'
        }
      ];
      setSubmissions(initialSeed);
      localStorage.setItem('diya_submissions', JSON.stringify(initialSeed));
    }
  }, []);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'FullName is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newSub: ContactSubmission = {
      id: `sub-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      date: new Date().toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
      status: 'new'
    };

    const updated = [newSub, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('diya_submissions', JSON.stringify(updated));

    // Clear and feedback
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const toggleStar = (id: string) => {
    const updated = submissions.map(sub => {
      if (sub.id === id) {
        return {
          ...sub,
          status: sub.status === 'starred' ? 'read' : 'starred' as any
        };
      }
      return sub;
    });
    setSubmissions(updated);
    localStorage.setItem('diya_submissions', JSON.stringify(updated));
  };

  const deleteSubmission = (id: string) => {
    const updated = submissions.filter(sub => sub.id !== id);
    setSubmissions(updated);
    localStorage.setItem('diya_submissions', JSON.stringify(updated));
  };

  const resetInbox = () => {
    localStorage.removeItem('diya_submissions');
    // Reload simple seed
    window.location.reload();
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900 border border-zinc-900 rounded p-6 md:p-8 text-zinc-100 flex flex-col justify-between h-full shadow-sm">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-400 bg-zinc-950 border border-zinc-800 px-3 py-1 rounded">
                  Keep in Touch
                </span>
                <h4 className="text-2xl font-serif italic text-white mt-4">Contact Channels</h4>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed font-light">
                  Feel free to reach out for internship inquiries, project collaborations, or to discuss SEO/Social Media campaign setups!
                </p>
              </div>

              {/* Grid lists */}
              <div className="space-y-4 pt-4">
                <a 
                  href="tel:+916262938054" 
                  className="flex items-center gap-4 p-4 rounded bg-zinc-950 border border-zinc-900 hover:bg-zinc-900 hover:border-zinc-800 transition group cursor-pointer"
                  id="link-phone"
                >
                  <div className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded group-hover:bg-[#18181b] group-hover:text-white transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono font-semibold">Call directly</p>
                    <p className="text-sm font-semibold mt-0.5 text-zinc-200">+91 6262938054</p>
                  </div>
                </a>

                <a 
                  href="mailto:diyadubey1977@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded bg-zinc-950 border border-zinc-900 hover:bg-zinc-900 hover:border-zinc-800 transition group cursor-pointer"
                  id="link-email"
                >
                  <div className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded group-hover:bg-[#18181b] group-hover:text-white transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono font-semibold">Send an email</p>
                    <p className="text-sm font-semibold break-all mt-0.5 text-zinc-200">diyadubey1977@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded bg-zinc-950 border border-zinc-900 transition">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono font-semibold">Based in</p>
                    <p className="text-sm font-semibold mt-0.5 text-zinc-200">IMS College, Indore, M.P. (India)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn footer banner */}
            <div className="mt-8 pt-6 border-t border-zinc-950">
              <a 
                href="https://www.linkedin.com/in/d1yadubey" 
                target="_blank" 
                rel="noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 bg-transparent hover:bg-white hover:text-black border border-zinc-800 text-white font-bold py-3 px-6 rounded text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer"
                id="link-linkedin-button"
              >
                LinkedIn Professional Network
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form panel */}
        <div className="lg:col-span-7 bg-zinc-900 border border-zinc-900 rounded p-6 md:p-8 flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h4 className="text-xl font-serif italic text-white flex items-center justify-between pb-3 border-b border-zinc-950">
              <span>Send a Message</span>
              <span className="text-[9px] font-mono font-bold text-zinc-500 bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1">
                SECURE FORM
              </span>
            </h4>

            {isSubmitted && (
              <div className="bg-zinc-950 border border-zinc-850 text-zinc-300 text-xs rounded p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <CheckCircle className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                <div>
                  <strong className="font-serif italic text-sm text-white block">Submission Successful!</strong>
                  <span className="font-light">Your message has been captured in the local portfolio state. You can check it in the inbox below!</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name field */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] font-mono font-semibold text-zinc-400" htmlFor="cf-name">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="cf-name"
                  placeholder="E.g., Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-zinc-950 border rounded px-3 py-2.5 text-xs focus:solid duration-150 focus:outline-none ${formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-950 focus:border-zinc-800 focus:bg-zinc-950'} text-white font-light`}
                />
                {formErrors.name && (
                  <p className="text-[10px] text-red-500 font-medium">{formErrors.name}</p>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] font-mono font-semibold text-zinc-400" htmlFor="cf-email">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="cf-email"
                  placeholder="E.g., sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-zinc-950 border rounded px-3 py-2.5 text-xs focus:solid duration-150 focus:outline-none ${formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-950 focus:border-zinc-800 focus:bg-zinc-950'} text-white font-light`}
                />
                {formErrors.email && (
                  <p className="text-[10px] text-red-500 font-medium">{formErrors.email}</p>
                )}
              </div>
            </div>

            {/* Subject field */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.2em] font-mono font-semibold text-zinc-400" htmlFor="cf-subject">
                Subject
              </label>
              <input 
                type="text" 
                id="cf-subject"
                placeholder="E.g., Interview Request / Project inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`w-full bg-zinc-950 border rounded px-3 py-2.5 text-xs focus:solid duration-150 focus:outline-none ${formErrors.subject ? 'border-red-500 focus:border-red-500' : 'border-zinc-950 focus:border-zinc-800 focus:bg-zinc-950'} text-white font-light`}
              />
              {formErrors.subject && (
                <p className="text-[10px] text-red-500 font-medium">{formErrors.subject}</p>
              )}
            </div>

            {/* Message field */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.2em] font-mono font-semibold text-zinc-400" htmlFor="cf-message">
                Message Content
              </label>
              <textarea 
                id="cf-message"
                rows={4}
                placeholder="Write your email proposal here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full bg-zinc-950 border rounded px-3.5 py-2.5 text-xs focus:solid duration-150 focus:outline-none ${formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-zinc-950 focus:border-zinc-800 focus:bg-zinc-950'} text-white font-light`}
              ></textarea>
              {formErrors.message && (
                <p className="text-[10px] text-red-500 font-medium">{formErrors.message}</p>
              )}
            </div>

            {/* Submit button */}
            <button 
              type="submit"
              className="py-3 px-6 bg-white hover:bg-zinc-200 active:scale-98 font-bold rounded text-[10px] text-black tracking-widest uppercase transition flex items-center justify-center gap-1.5 w-full cursor-pointer mt-4"
              id="btn-submit-contact"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>

          {/* Form helper info */}
          <p className="text-[10px] text-zinc-500 mt-4 italic text-center font-light">
            Form is fully interactive! Submitting records submissions directly into memory.
          </p>
        </div>
      </div>

      {/* Admin Submissions Inbox Trigger - To display how we collect data */}
      <div className="pt-4 border-t border-zinc-900">
        <div className="flex items-center justify-between">
          <button 
            type="button"
            onClick={() => setShowInbox(!showInbox)}
            className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 hover:text-white transition cursor-pointer"
            id="btn-toggle-inbox"
          >
            <Shield className="w-4 h-4 text-zinc-500" />
            <span>{showInbox ? 'Hide Local Submissions Box' : 'View Local Submissions Box (Check form results)'}</span>
            <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] py-0.5 px-2 rounded-full font-semibold">
              {submissions.length} Total
            </span>
          </button>

          {showInbox && (
            <button 
              onClick={resetInbox}
              className="flex items-center gap-1.5 text-[10px] font-mono text-red-400 hover:text-red-300 transition cursor-pointer"
              id="btn-reset-inbox"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset database</span>
            </button>
          )}
        </div>

        {/* Dynamic Inbox visualizer */}
        {showInbox && (
          <div className="mt-4 bg-zinc-950 rounded p-5 border border-zinc-900 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 pb-3.5 border-b border-zinc-902">
              <Inbox className="w-4.5 h-4.5 text-zinc-400" />
              <div>
                <h5 className="font-serif italic text-sm text-zinc-200">Portfolio Contact Inbox Simulator</h5>
                <p className="text-[11px] text-zinc-500">Live tracker capturing client lead details in real-time localStorage</p>
              </div>
            </div>

            {submissions.length === 0 ? (
              <div className="text-center py-8 text-zinc-650 text-xs font-light">
                Your sandbox database is empty. Send a message using the form above to watch it appear here instantly!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-zinc-305 mt-3 min-w-[500px]">
                  <thead>
                    <tr className="border-b border-zinc-900 text-zinc-500 text-[9px] uppercase font-mono font-bold tracking-[0.2em]">
                      <th className="pb-2.5 font-semibold">Client & Email</th>
                      <th className="pb-2.5 font-semibold">Subject & Message excerpt</th>
                      <th className="pb-2.5 font-semibold">Date Submitted</th>
                      <th className="pb-2.5 text-right font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900">
                    {submissions.map((sub) => (
                      <tr key={sub.id} className="hover:bg-zinc-900/20 transition">
                        <td className="py-3 pr-4 vertical-align-top">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => toggleStar(sub.id)}
                              className="text-zinc-600 hover:text-yellow-400 transition cursor-pointer"
                              aria-label="Star submitter"
                              id={`btn-star-${sub.id}`}
                            >
                              <Star className={`w-3.5 h-3.5 ${sub.status === 'starred' ? 'fill-yellow-500/80 text-yellow-500' : ''}`} />
                            </button>
                            <div>
                              <p className="font-serif italic text-white text-sm">{sub.name}</p>
                              <p className="text-[10px] text-zinc-500 break-all font-mono mt-0.5">{sub.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-4 vertical-align-top max-w-sm">
                          <p className="font-semibold text-zinc-300 text-[11px]">{sub.subject}</p>
                          <p className="text-zinc-400 line-clamp-2 mt-0.5 text-[11px] whitespace-normal leading-relaxed font-light">{sub.message}</p>
                        </td>
                        <td className="py-3 pr-4 vertical-align-top font-mono text-zinc-500 text-[10px]">
                          {sub.date}
                        </td>
                        <td className="py-3 text-right vertical-align-top">
                          <button 
                            onClick={() => deleteSubmission(sub.id)}
                            className="bg-zinc-900 hover:bg-red-950/30 text-red-400 hover:text-red-300 border border-zinc-850 transition text-[9px] uppercase tracking-wider px-2.5 py-1 rounded cursor-pointer"
                            id={`btn-delete-${sub.id}`}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
