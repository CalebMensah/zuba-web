"use client";

import React, { useState } from 'react';
import { FileText, AlertTriangle, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function TermsConditionsPage() {
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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#DBEAFE] rounded-full flex items-center justify-center">
              <FileText className="text-[#3B82F6]" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#111827]">Terms & Conditions</h1>
              <p className="text-sm text-[#9CA3AF] italic mt-1">Last Updated: November 16, 2025</p>
            </div>
          </div>
          <p className="text-lg text-[#374151] leading-relaxed">
            Welcome to ZUBA! By creating an account and using our platform, you agree to these Terms and Conditions. Please read them carefully.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Section 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">1. About ZUBA</h2>
            <p className="text-[#374151] mb-4">ZUBA is a social commerce platform connecting buyers and sellers in Ghana. We provide:</p>
            <ul className="space-y-2 ml-4">
              {[
                'A marketplace for sellers to create stores and list products',
                'A platform for buyers to discover and purchase products',
                'An escrow system to protect both parties during transactions',
                'Tools for order management, payments, and delivery tracking',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#3B82F6] font-bold mt-1">•</span>
                  <span className="text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-6">2. Account Requirements</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">General Requirements</h3>
                <ul className="space-y-2 ml-4">
                  {[
                    'You must be at least 18 years old to use ZUBA',
                    'You must provide accurate and complete information',
                    'You are responsible for maintaining your account security',
                    'One person cannot create multiple accounts',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3B82F6] font-bold mt-1">•</span>
                      <span className="text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">Seller Verification</h3>
                <p className="text-[#374151] mb-3">To create and operate a store, sellers must:</p>
                <ul className="space-y-2 ml-4 mb-4">
                  {[
                    'Submit a Ghana Card (front and back) for identity verification',
                    'Provide business registration documents (if applicable)',
                    'Upload a clear selfie for identity confirmation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3B82F6] font-bold mt-1">•</span>
                      <span className="text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] rounded-lg p-4">
                  <p className="text-[#111827] flex items-start gap-2">
                    <AlertTriangle className="text-[#F59E0B] flex-shrink-0 mt-1" size={20} />
                    <span>Submitting false or fraudulent documents will result in immediate account suspension and may lead to legal action.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">3. Buyer Responsibilities</h2>
            <p className="text-[#374151] mb-4">As a buyer, you agree to:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Provide accurate delivery information',
                'Pay for orders in full at the time of purchase',
                'Confirm receipt of items within 4 days of delivery',
                'Report any issues with orders immediately',
                'Not misuse the dispute or refund system',
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
            <h2 className="text-2xl font-bold text-[#111827] mb-4">4. Seller Responsibilities</h2>
            <p className="text-[#374151] mb-4">As a seller, you agree to:</p>
            <ul className="space-y-2 ml-4">
              {[
                'List only products you legally own or have rights to sell',
                'Provide accurate product descriptions and images',
                'Honor the prices and terms listed for your products',
                'Ship orders within the stated timeframe',
                'Respond to buyer inquiries within 24 hours',
                'Not sell counterfeit, illegal, or prohibited items',
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
            <h2 className="text-2xl font-bold text-[#111827] mb-6">5. Escrow System</h2>
            <p className="text-[#374151] mb-4">Our escrow system protects both buyers and sellers:</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">How It Works</h3>
                <ul className="space-y-2 ml-4">
                  {[
                    'When a buyer places an order, payment is held in escrow',
                    'The seller ships the order and updates the tracking information',
                    'The buyer receives the order and has 4 days to confirm',
                    'Funds are released to the seller after confirmation or automatically after 4 days',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3B82F6] font-bold mt-1">{i + 1}.</span>
                      <span className="text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">Dispute Resolution</h3>
                <ul className="space-y-2 ml-4">
                  {[
                    'If there\'s an issue, buyers can open a dispute within the 4-day window',
                    'ZUBA will review the case and make a fair decision',
                    'Funds will be released to the appropriate party based on the resolution',
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

          {/* Section 6 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-6">6. Payments & Fees</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">Payment Processing</h3>
                <ul className="space-y-2 ml-4">
                  {[
                    'All payments are processed through secure, certified payment gateways',
                    'ZUBA does not store your complete payment card details',
                    'All transactions are encrypted and secure',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3B82F6] font-bold mt-1">•</span>
                      <span className="text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">Seller Fees</h3>
                <ul className="space-y-2 ml-4">
                  {[
                    'ZUBA charges a commission on each successful sale',
                    'Payment processing fees apply to all transactions',
                    'Fees are automatically deducted before funds are released',
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

          {/* Section 7 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">7. Prohibited Activities</h2>
            <p className="text-[#374151] mb-4">You may not:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Sell counterfeit, illegal, or stolen items',
                'Manipulate prices or engage in price fixing',
                'Create fake reviews or ratings',
                'Attempt to bypass ZUBA\'s payment system',
                'Harass, threaten, or abuse other users',
                'Use bots or automated systems to manipulate the platform',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#EF4444] font-bold mt-1">•</span>
                  <span className="text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">8. Account Suspension & Termination</h2>
            <p className="text-[#374151] mb-4">ZUBA reserves the right to suspend or terminate accounts that:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Violate these Terms and Conditions',
                'Engage in fraudulent activities',
                'Repeatedly receive complaints from other users',
                'Fail to meet seller performance standards',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#EF4444] font-bold mt-1">•</span>
                  <span className="text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 9 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">9. Intellectual Property</h2>
            <ul className="space-y-2 ml-4">
              {[
                'ZUBA and its logo are trademarks owned by ZUBA',
                'You retain ownership of content you upload (product images, descriptions)',
                'By uploading content, you grant ZUBA a license to display it on the platform',
                'You must not infringe on others\' intellectual property rights',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#3B82F6] font-bold mt-1">•</span>
                  <span className="text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 10 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">10. Limitation of Liability</h2>
            <ul className="space-y-2 ml-4">
              {[
                'ZUBA is a platform connecting buyers and sellers; we are not party to transactions',
                'Sellers are responsible for product quality and fulfillment',
                'ZUBA is not liable for disputes between buyers and sellers',
                'We do not guarantee uninterrupted or error-free service',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#3B82F6] font-bold mt-1">•</span>
                  <span className="text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 11 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">11. Changes to Terms</h2>
            <p className="text-[#374151]">
              We may update these Terms and Conditions from time to time. Significant changes will be communicated via email or in-app notification. Continued use of ZUBA after changes constitutes acceptance of the new terms.
            </p>
          </div>

          {/* Section 12 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">12. Governing Law</h2>
            <p className="text-[#374151]">
              These Terms and Conditions are governed by the laws of Ghana. Any disputes will be resolved in the courts of Ghana.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Contact Us</h2>
            <p className="text-[#374151] mb-6">
              If you have questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-[#3B82F6]" size={20} />
                <span className="text-[#111827]">Email: support@zuba.com</span>
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
              By using ZUBA, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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
