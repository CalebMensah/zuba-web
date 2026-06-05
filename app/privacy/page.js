"use client";

import React, { useState } from 'react';
import { Shield, Lock, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <a href="/contact" className="text-[#374151] hover:text-[#3B82F6] font-medium transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#374151]">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#DBEAFE] rounded-full flex items-center justify-center">
              <Shield className="text-[#3B82F6]" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#111827]">Privacy Policy</h1>
              <p className="text-sm text-[#9CA3AF] italic mt-1">Last Updated: November 16, 2025</p>
            </div>
          </div>
          <p className="text-lg text-[#374151] leading-relaxed">
            At ZUBA, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information when you use our social commerce platform.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Section 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-6">1. Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">Personal Information</h3>
                <p className="text-[#374151] mb-3">When you create an account, we collect:</p>
                <ul className="space-y-2 ml-4">
                  {[
                    'Name, email address, and phone number',
                    'Password (encrypted and never stored in plain text)',
                    'Delivery addresses for order fulfillment',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3B82F6] font-bold mt-1">•</span>
                      <span className="text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">Seller Verification Documents</h3>
                <p className="text-[#374151] mb-3">For store verification, sellers must provide:</p>
                <ul className="space-y-2 ml-4 mb-4">
                  {[
                    'Ghana Card (front and back images)',
                    'Business registration documents',
                    'Selfie photo for identity verification',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3B82F6] font-bold mt-1">•</span>
                      <span className="text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] rounded-lg p-4">
                  <p className="text-[#111827] flex items-start gap-2">
                    <Lock className="text-[#3B82F6] flex-shrink-0 mt-1" size={20} />
                    <span>These documents are encrypted, stored securely, and only used for verification purposes. They are never shared with third parties.</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">Payment Information</h3>
                <p className="text-[#374151] mb-3">We collect payment details to process transactions. All payment information is:</p>
                <ul className="space-y-2 ml-4">
                  {[
                    'Encrypted using industry-standard security',
                    'Processed through secure payment gateways',
                    'Never stored in plain text or shared publicly',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3B82F6] font-bold mt-1">•</span>
                      <span className="text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">Usage Information</h3>
                <p className="text-[#374151] mb-3">We automatically collect information about how you use ZUBA, including:</p>
                <ul className="space-y-2 ml-4">
                  {[
                    'Products you view and purchase',
                    'Stores you follow and interact with',
                    'Device information and IP address',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3B82F6] font-bold mt-1">•</span>
                      <span className="text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">2. How We Use Your Information</h2>
            <p className="text-[#374151] mb-4">We use your information to:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Process orders and manage deliveries',
                'Operate our escrow system to protect buyers and sellers',
                'Verify seller identities and approve stores',
                'Send order updates and important notifications',
                'Improve our platform and personalize your experience',
                'Prevent fraud and maintain platform security',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#3B82F6] font-bold mt-1">•</span>
                  <span className="text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">3. Escrow System & Payment Security</h2>
            <p className="text-[#374151] mb-4">Our escrow system protects both buyers and sellers:</p>
            <ul className="space-y-2 ml-4">
              {[
                'When you make a purchase, payment is held securely for 4 days',
                'Funds are released to the seller once you confirm receipt, or automatically after 4 days',
                'All payment details are encrypted and handled by certified payment processors',
                'We never see or store your full card details',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#3B82F6] font-bold mt-1">•</span>
                  <span className="text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">4. Information Sharing</h2>
            <p className="text-[#374151] mb-4">We do not sell your personal information. We only share data when:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Necessary for order fulfillment (e.g., sharing delivery address with sellers)',
                'Required by law or to prevent fraud',
                'With your explicit consent',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#3B82F6] font-bold mt-1">•</span>
                  <span className="text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">5. Data Security</h2>
            <p className="text-[#374151] mb-4">We protect your information with:</p>
            <ul className="space-y-2 ml-4">
              {[
                'End-to-end encryption for sensitive data',
                'Secure servers with regular security audits',
                'Limited employee access to personal information',
                'Regular backups to prevent data loss',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold mt-1">•</span>
                  <span className="text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">6. Your Rights</h2>
            <p className="text-[#374151] mb-4">You have the right to:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Access your personal information',
                'Update or correct your information',
                'Delete your account and associated data',
                'Opt-out of marketing communications',
                'Request a copy of your data',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#3B82F6] font-bold mt-1">•</span>
                  <span className="text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">7. Data Retention</h2>
            <p className="text-[#374151] mb-4">We keep your information only as long as necessary:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Active account data is retained while your account is active',
                'Transaction records are kept for 7 years for legal compliance',
                'Verification documents are deleted 90 days after store verification',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#3B82F6] font-bold mt-1">•</span>
                  <span className="text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">8. Cookies & Tracking</h2>
            <p className="text-[#374151]">
              We use cookies and similar technologies to improve your experience, remember your preferences, and analyze platform usage. You can control cookies through your device settings.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">9. Children's Privacy</h2>
            <p className="text-[#374151]">
              ZUBA is not intended for users under 18 years old. We do not knowingly collect information from children.
            </p>
          </div>

          {/* Section 10 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">10. Changes to This Policy</h2>
            <p className="text-[#374151]">
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Contact Us</h2>
            <p className="text-[#374151] mb-6">
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-[#3B82F6]" size={20} />
                <span className="text-[#111827]">Email: privacy@zuba.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#3B82F6]" size={20} />
                <span className="text-[#111827]">Phone: +233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#3B82F6]" size={20} />
                <span className="text-[#111827]">Address: Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Footer Notice */}
          <div className="bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl p-6 text-center">
            <p className="text-[#374151]">
              By using ZUBA, you agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12 px-4 sm:px-6 lg:px-8 mt-12">
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
