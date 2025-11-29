import React from 'react';
import { ShoppingCart, Shield, Lock, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">ZU</span>
                <span className="text-red-500">BA</span>
                <ShoppingCart className="inline-block ml-1 text-green-500" size={24} />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="/faq" className="text-gray-700 hover:text-blue-600 font-medium">FAQ</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-sm text-gray-500 italic mt-1">Last Updated: November 16, 2025</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At ZUBA, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information when you use our social commerce platform.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-3">When you create an account, we collect:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Name, email address, and phone number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Password (encrypted and never stored in plain text)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Delivery addresses for order fulfillment</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Seller Verification Documents</h3>
                <p className="text-gray-700 mb-3">For store verification, sellers must provide:</p>
                <ul className="space-y-2 ml-4 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Ghana Card (front and back images)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Business registration documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Selfie photo for identity verification</span>
                  </li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
                  <p className="text-gray-800 flex items-start gap-2">
                    <Lock className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span>These documents are encrypted, stored securely, and only used for verification purposes. They are never shared with third parties.</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Information</h3>
                <p className="text-gray-700 mb-3">We collect payment details to process transactions. All payment information is:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Encrypted using industry-standard security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Processed through secure payment gateways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Never stored in plain text or shared publicly</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
                <p className="text-gray-700 mb-3">We automatically collect information about how you use ZUBA, including:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Products you view and purchase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Stores you follow and interact with</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Device information and IP address</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Process orders and manage deliveries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Operate our escrow system to protect buyers and sellers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Verify seller identities and approve stores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Send order updates and important notifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Improve our platform and personalize your experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Prevent fraud and maintain platform security</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Escrow System & Payment Security</h2>
            <p className="text-gray-700 mb-4">Our escrow system protects both buyers and sellers:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">When you make a purchase, payment is held securely for 4 days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Funds are released to the seller once you confirm receipt, or automatically after 4 days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">All payment details are encrypted and handled by certified payment processors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">We never see or store your full card details</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 mb-4">We do not sell your personal information. We only share data when:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Necessary for order fulfillment (e.g., sharing delivery address with sellers)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Required by law or to prevent fraud</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">With your explicit consent</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">We protect your information with:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">End-to-end encryption for sensitive data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Secure servers with regular security audits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Limited employee access to personal information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Regular backups to prevent data loss</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Access your personal information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Update or correct your information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Delete your account and associated data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Opt-out of marketing communications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Request a copy of your data</span>
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 mb-4">We keep your information only as long as necessary:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Active account data is retained while your account is active</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Transaction records are kept for 7 years for legal compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Verification documents are deleted 90 days after store verification</span>
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies & Tracking</h2>
            <p className="text-gray-700">
              We use cookies and similar technologies to improve your experience, remember your preferences, and analyze platform usage. You can control cookies through your device settings.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700">
              ZUBA is not intended for users under 18 years old. We do not knowingly collect information from children.
            </p>
          </div>

          {/* Section 10 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={20} />
                <span className="text-gray-800">Email: privacy@zuba.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={20} />
                <span className="text-gray-800">Phone: +233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-800">Address: Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Footer Notice */}
          <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              By using ZUBA, you agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-blue-400">ZU</span>
                <span className="text-red-400">BA</span>
              </div>
              <p className="text-gray-400">Buy and sell with trust</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://facebook.com/zubaapp" className="hover:text-white">Facebook</a></li>
                <li><a href="https://twitter.com/zubaapp" className="hover:text-white">Twitter</a></li>
                <li><a href="https://instagram.com/zubaapp" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-2">&copy; 2024 Zuba. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Made with ❤️ in Ghana</p>
          </div>
        </div>
      </footer>
    </div>
  );
}