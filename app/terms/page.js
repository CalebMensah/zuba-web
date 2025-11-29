"use client";

import React, {useState} from 'react';
import { ShoppingCart, FileText, AlertTriangle, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

export default function TermsConditionsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
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

                                              {/* Mobile menu button */}
                      <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
                          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                      </div>
          </div>
        </div>

                        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Home</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">About</a>
              <a href="/faq" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">FAQ</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Contact</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-2">
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
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <FileText className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
              <p className="text-sm text-gray-500 italic mt-1">Last Updated: November 16, 2025</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to ZUBA! By creating an account and using our platform, you agree to these Terms and Conditions. Please read them carefully.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. About ZUBA</h2>
            <p className="text-gray-700 mb-4">ZUBA is a social commerce platform connecting buyers and sellers in Ghana. We provide:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">A marketplace for sellers to create stores and list products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">A platform for buyers to discover and purchase products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">An escrow system to protect both parties during transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Tools for order management, payments, and delivery tracking</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Account Requirements</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">General Requirements</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">You must be at least 18 years old to use ZUBA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">You must provide accurate and complete information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">You are responsible for maintaining your account security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">One person cannot create multiple accounts</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Seller Verification</h3>
                <p className="text-gray-700 mb-3">To create and operate a store, sellers must:</p>
                <ul className="space-y-2 ml-4 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Submit a Ghana Card (front and back) for identity verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Provide business registration documents (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Upload a clear selfie for identity confirmation</span>
                  </li>
                </ul>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
                  <p className="text-gray-800 flex items-start gap-2">
                    <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <span>Submitting false or fraudulent documents will result in immediate account suspension and may lead to legal action.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Buyer Responsibilities</h2>
            <p className="text-gray-700 mb-4">As a buyer, you agree to:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Provide accurate delivery information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Pay for orders in full at the time of purchase</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Confirm receipt of items within 4 days of delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Report any issues with orders immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Not misuse the dispute or refund system</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Seller Responsibilities</h2>
            <p className="text-gray-700 mb-4">As a seller, you agree to:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">List only products you legally own or have rights to sell</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Provide accurate product descriptions and images</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Honor the prices and terms listed for your products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Ship orders within the stated timeframe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Respond to buyer inquiries within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Not sell counterfeit, illegal, or prohibited items</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Escrow System</h2>
            <p className="text-gray-700 mb-4">Our escrow system protects both buyers and sellers:</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">1.</span>
                    <span className="text-gray-700">When a buyer places an order, payment is held in escrow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">2.</span>
                    <span className="text-gray-700">The seller ships the order and updates the tracking information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">3.</span>
                    <span className="text-gray-700">The buyer receives the order and has 4 days to confirm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">4.</span>
                    <span className="text-gray-700">Funds are released to the seller after confirmation or automatically after 4 days</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">If there's an issue, buyers can open a dispute within the 4-day window</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">ZUBA will review the case and make a fair decision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Funds will be released to the appropriate party based on the resolution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Payments & Fees</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Processing</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">All payments are processed through secure, certified payment gateways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">ZUBA does not store your complete payment card details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">All transactions are encrypted and secure</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Seller Fees</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">ZUBA charges a commission on each successful sale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Payment processing fees apply to all transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Fees are automatically deducted before funds are released</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prohibited Activities</h2>
            <p className="text-gray-700 mb-4">You may not:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Sell counterfeit, illegal, or stolen items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Manipulate prices or engage in price fixing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Create fake reviews or ratings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Attempt to bypass ZUBA's payment system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Harass, threaten, or abuse other users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Use bots or automated systems to manipulate the platform</span>
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Account Suspension & Termination</h2>
            <p className="text-gray-700 mb-4">ZUBA reserves the right to suspend or terminate accounts that:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Violate these Terms and Conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Engage in fraudulent activities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Repeatedly receive complaints from other users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Fail to meet seller performance standards</span>
              </li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">ZUBA and its logo are trademarks owned by ZUBA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">You retain ownership of content you upload (product images, descriptions)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">By uploading content, you grant ZUBA a license to display it on the platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">You must not infringe on others' intellectual property rights</span>
              </li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">ZUBA is a platform connecting buyers and sellers; we are not party to transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Sellers are responsible for product quality and fulfillment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">ZUBA is not liable for disputes between buyers and sellers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">We do not guarantee uninterrupted or error-free service</span>
              </li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700">
              We may update these Terms and Conditions from time to time. Significant changes will be communicated via email or in-app notification. Continued use of ZUBA after changes constitutes acceptance of the new terms.
            </p>
          </div>

          {/* Section 12 */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700">
              These Terms and Conditions are governed by the laws of Ghana. Any disputes will be resolved in the courts of Ghana.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={20} />
                <span className="text-gray-800">Email: support@zuba.com</span>
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
              By using ZUBA, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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