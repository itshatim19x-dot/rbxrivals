'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, MessageCircle, Instagram, Twitter, Youtube, Clock, CheckCircle, AlertCircle, X } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };
    
    // Simulate API call (replace with your actual API endpoint)
    setTimeout(() => {
      // For demo purposes, always show success
      // Replace this with your actual fetch call
      setStatus('success');
      setShowPopup(true);
      (e.target as HTMLFormElement).reset();
      
      // Auto hide popup after 5 seconds
      setTimeout(() => {
        setShowPopup(false);
        setStatus('idle');
      }, 5000);
    }, 1000);

    // Uncomment this for actual API call
    /*
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setStatus('success');
        setShowPopup(true);
        (e.target as HTMLFormElement).reset();
        
        setTimeout(() => {
          setShowPopup(false);
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
    */
  }

  return (
    <>
      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          
          {/* Popup Content */}
          <div className="relative bg-gradient-to-br from-surface to-black border border-green-500/30 rounded-2xl p-6 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Message Sent!
              </h3>
              
              <p className="text-slate-300 mb-4">
                Thank you for reaching out to us. We have received your message and will get back to you within 24-48 hours.
              </p>
              
              <div className="w-full h-px bg-white/10 my-4" />
              
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4" />
                <span>support@rbxrivals.com</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute inset-0 pattern-squares opacity-5 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lightning-blue/20 text-lightning-blue text-xs font-bold uppercase tracking-wider rounded">
              Contact
            </span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Contact Us
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl">
            Have questions, feedback, or business inquiries? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-surface/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Send Us a Message</h2>
              
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <p className="text-red-400 text-sm">{errorMessage}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-lightning-blue transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-lightning-blue transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-lightning-blue transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-lightning-blue transition-colors resize-none"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-6 py-3 bg-lightning-blue text-black font-bold uppercase tracking-wider hover:bg-white transition-all rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                <p className="text-xs text-slate-500 mt-4">
                  By submitting this form, you agree to our <Link href="/legal/privacy-policy" className="text-lightning-blue hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-surface/80 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">Quick Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-lightning-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400">Email Us</p>
                    <a href="mailto:support@rbxrivals.com" className="text-white hover:text-lightning-blue transition-colors">
                      support@rbxrivals.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-lightning-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400">Discord</p>
                    <a href="#" className="text-white hover:text-lightning-blue transition-colors">
                      Join our Discord Server
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-lightning-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400">Response Time</p>
                    <p className="text-white">24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface/80 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">Follow Us</h3>
              
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-lightning-blue hover:bg-white/10 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-lightning-blue hover:bg-white/10 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-lightning-blue hover:bg-white/10 transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-surface/80 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">Business Inquiries</h3>
              <p className="text-sm text-slate-400 mb-3">
                For partnerships, sponsorships, or advertising opportunities:
              </p>
              <a href="mailto:business@rbxrivals.com" className="text-lightning-blue hover:underline text-sm">
                business@rbxrivals.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}