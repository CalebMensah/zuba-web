"use client";

import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Send, Clock, Info, HelpCircle, ChevronRight, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactEmail = 'zubamobileapp@gmail.com';
  const phoneNumber = '0598785053';
  const whatsappNumber = '233598785053';

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert('Please fill in all fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    setLoading(true);
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setLoading(false);
      alert('Your email client has been opened. Please send the email to complete your message.');
    }, 1000);
  };

  const faqs = [
    {
      question: 'How long does it take to get a response?',
      answer: 'We typically respond to all inquiries within 24 hours during business days.'
    },
    {
      question: 'Can I visit your office?',
      answer: 'We currently operate online only. Please contact us via email, phone, or WhatsApp for assistance.'
    },
    {
      question: 'What are your support hours?',
      answer: 'Our support team is available Monday to Friday, 8 AM - 6 PM, and Saturday 9 AM - 4 PM (GMT).'
    },
    {
      question: 'How can I report a problem?',
      answer: 'You can report any issues through this contact form, email us directly, or use the in-app report feature.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Zuba" width={48} height={48} className="object-contain" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-[#374151] hover:text-[#3B82F6] font-medium transition-colors">Home</a>
              <a href="/about" className="text-[#374151] hover:text-[#3B82F6] font-medium transition-colors">About</a>
              <a href="/faq" className="text-[#374151] hover:text-[#3B82F6] font-medium transition-colors">FAQ</a>
              <a href="/contact" className="text-[#3B82F6] font-medium">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#374151]">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-[#374151] hover:bg-[#DBEAFE] rounded">Home</a>
              <a href="/about" className="block px-3 py-2 text-[#374151] hover:bg-[#DBEAFE] rounded">About</a>
              <a href="/faq" className="block px-3 py-2 text-[#374151] hover:bg-[#DBEAFE] rounded">FAQ</a>
              <a href="/contact" className="block px-3 py-2 text-[#374151] hover:bg-[#DBEAFE] rounded">Contact</a>
              <button className="w-full bg-[#3B82F6] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB] mt-2 transition-colors">
                Download App
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#DBEAFE] rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="text-[#3B82F6]" size={40} />
          </div>
          <h1 className="text-4xl font-bold text-[#111827] mb-4">Get in Touch</h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Quick Contact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href={`mailto:${contactEmail}`} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#111827] mb-1">Email</h3>
            </a>
            <a href={`tel:${phoneNumber}`} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#111827] mb-1">Call</h3>
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#25D366' }}>
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#111827] mb-1">WhatsApp</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Contact Methods</h2>
          <div className="space-y-4">
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-[#DBEAFE] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-[#3B82F6]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#111827] mb-1">Email</h3>
                <p className="text-[#3B82F6] font-semibold">{contactEmail}</p>
                <p className="text-sm text-[#9CA3AF]">Send us an email anytime</p>
              </div>
              <ChevronRight className="text-[#9CA3AF] group-hover:text-[#3B82F6] transition" />
            </a>

            <a href={`tel:${phoneNumber}`} className="flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-[#D1FAE5] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-[#10B981]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#111827] mb-1">Phone</h3>
                <p className="text-[#10B981] font-semibold">{phoneNumber}</p>
                <p className="text-sm text-[#9CA3AF]">Call us during business hours</p>
              </div>
              <ChevronRight className="text-[#9CA3AF] group-hover:text-[#10B981] transition" />
            </a>

            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#25D36620' }}>
                <MessageCircle className="text-[#10B981]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#111827] mb-1">WhatsApp</h3>
                <p className="font-semibold" style={{ color: '#25D366' }}>{phoneNumber}</p>
                <p className="text-sm text-[#9CA3AF]">Chat with us instantly</p>
              </div>
              <ChevronRight className="text-[#9CA3AF] group-hover:text-[#10B981] transition" />
            </a>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E5E7EB]">
              <Clock className="text-[#3B82F6]" size={28} />
              <h2 className="text-2xl font-bold text-[#111827]">Business Hours</h2>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#111827]">Monday - Friday</span>
                <span className="text-[#6B7280]">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#111827]">Saturday</span>
                <span className="text-[#6B7280]">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#111827]">Sunday</span>
                <span className="text-[#6B7280]">Closed</span>
              </div>
            </div>
            <div className="bg-[#DBEAFE] rounded-xl p-4 flex items-start gap-3">
              <Info className="text-[#3B82F6] flex-shrink-0" size={20} />
              <p className="text-[#2563EB] font-medium text-sm">
                We respond to all inquiries within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Send us a Message</h2>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-md">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#111827] mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#111827] mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#111827] mb-2">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What is this about?"
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#111827] mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us more about your inquiry..."
                rows={6}
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-[#3B82F6] text-white px-6 py-4 rounded-xl hover:bg-[#2563EB] transition-colors font-semibold flex items-center justify-center gap-2 disabled:bg-[#D1D5DB]"
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-[#3B82F6]" size={28} />
            <h2 className="text-2xl font-bold text-[#111827]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="text-[#3B82F6] flex-shrink-0 mt-1" size={20} />
                  <h3 className="font-bold text-[#111827]">{faq.question}</h3>
                </div>
                <p className="text-[#6B7280] pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Support */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#DBEAFE] rounded-2xl p-6 flex items-start gap-4">
            <Info className="text-[#3B82F6] flex-shrink-0" size={28} />
            <div>
              <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">Looking for Help?</h3>
              <p className="text-[#2563EB]">
                Check out our Help Center for instant answers to common questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image src="/logo.png" alt="Zuba" width={48} height={48} className="object-contain mb-4" />
              <p className="text-[#9CA3AF]">Buy and sell with trust</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="https://facebook.com/zubaapp" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="https://twitter.com/zubaapp" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="https://instagram.com/zubaapp" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#374151] pt-8 text-center">
            <p className="text-[#9CA3AF]">&copy; 2024 Zuba. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
