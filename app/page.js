"use client";

import React, { useState } from 'react';
import { ShoppingCart, Store, Shield, Star, TrendingUp, Package, CreditCard, Users, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image'

export default function ZubaHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="shrink-0">
                <Image src="/logo.png" alt="Zuba" width={48} height={48} className="object-contain" />
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#3B82F6] font-medium transition-colors">Home</a>
              <a href="/about" className="text-gray-700 hover:text-[#3B82F6] font-medium transition-colors">About</a>
              <a href="#features" className="text-gray-700 hover:text-[#3B82F6] font-medium transition-colors">Features</a>
              <a href="/faq" className="text-gray-700 hover:text-[#3B82F6] font-medium transition-colors">FAQ</a>
              <a href="/contact" className="text-gray-700 hover:text-[#3B82F6] font-medium transition-colors">Contact</a>
              <a href="/download" className="bg-[#3B82F6] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB] transition-colors">
                Download App
              </a>
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
              <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-[#DBEAFE] rounded">Home</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:bg-[#DBEAFE] rounded">About</a>
              <a href="/features" className="block px-3 py-2 text-gray-700 hover:bg-[#DBEAFE] rounded">Features</a>
              <a href="/faq" className="block px-3 py-2 text-gray-700 hover:bg-[#DBEAFE] rounded">FAQ</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-[#DBEAFE] rounded">Contact</a>
              <button className="w-full bg-[#3B82F6] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB] mt-2">
                Download App
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#DBEAFE] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#111827] mb-6">
                Buy. Sell. <span className="text-[#3B82F6]">Trust</span>
              </h1>
              <p className="text-xl text-[#6B7280] mb-8">
                Ghana's trusted social commerce platform. Shop safely with escrow protection, 
                earn rewards, and discover amazing products from verified sellers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/download">
                  <button className="bg-[#3B82F6] text-white px-8 py-4 rounded-lg hover:bg-[#2563EB] transition-colors flex items-center justify-center text-lg font-semibold">
                    Get Started <ChevronRight className="ml-2" />
                  </button>
                </Link>
                <button className="bg-white text-[#3B82F6] border-2 border-[#3B82F6] px-8 py-4 rounded-lg hover:bg-[#DBEAFE] transition-colors text-lg font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                        <Store className="text-[#3B82F6]" />
                      </div>
                      <div>
                        <div className="font-semibold">My Store</div>
                        <div className="text-sm text-[#6B7280]">Manage your shop</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-[#DBEAFE] p-4 rounded-lg">
                      <Package className="text-[#3B82F6] mb-2" />
                      <div className="text-2xl font-bold">24</div>
                      <div className="text-sm text-[#6B7280]">Orders</div>
                    </div>
                    <div className="bg-[#D1FAE5] p-4 rounded-lg">
                      <CreditCard className="text-[#059669] mb-2" />
                      <div className="text-2xl font-bold">₵850</div>
                      <div className="text-sm text-[#6B7280]">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111827] mb-4">Why Choose Zuba?</h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              Experience seamless buying and selling with features designed for trust and convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#DBEAFE] p-8 rounded-2xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-[#3B82F6] rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">Secure Escrow</h3>
              <p className="text-[#6B7280] mb-4">
                Your money is held safely for 4 days until you confirm receipt. Shop with complete peace of mind.
              </p>
              <ul className="space-y-2 text-[#6B7280]">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                  Auto-release after 4 days
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                  Buyer protection guaranteed
                </li>
              </ul>
            </div>

            <div className="bg-[#FEE2E2] p-8 rounded-2xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-[#EF4444] rounded-xl flex items-center justify-center mb-6">
                <Star className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">Earn Rewards</h3>
              <p className="text-[#6B7280] mb-4">
                Get points for every signup, review, and purchase. Redeem for products or cash!
              </p>
              <ul className="space-y-2 text-[#6B7280]">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#EF4444] rounded-full"></div>
                  1 point = ₵0.10
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#EF4444] rounded-full"></div>
                  Bonus for reviews
                </li>
              </ul>
            </div>

            <div className="bg-[#D1FAE5] p-8 rounded-2xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-[#10B981] rounded-xl flex items-center justify-center mb-6">
                <Store className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">Easy Store Setup</h3>
              <p className="text-[#6B7280] mb-4">
                Launch your online store in minutes. Manage products, orders, and payments effortlessly.
              </p>
              <ul className="space-y-2 text-[#6B7280]">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full"></div>
                  Instant store creation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full"></div>
                  Real-time analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111827] mb-4">How It Works</h2>
            <p className="text-xl text-[#6B7280]">Simple steps to start buying or selling</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Buyers */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingCart className="text-[#3B82F6]" size={32} />
                <h3 className="text-2xl font-bold text-[#111827]">For Buyers</h3>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Browse & Shop</h4>
                    <p className="text-[#6B7280]">Explore products from multiple verified sellers</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Secure Payment</h4>
                    <p className="text-[#6B7280]">Your payment is held in escrow for protection</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Track & Receive</h4>
                    <p className="text-[#6B7280]">Monitor delivery and confirm receipt</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Earn Rewards</h4>
                    <p className="text-[#6B7280]">Get points for reviews and purchases</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Sellers */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Store className="text-[#EF4444]" size={32} />
                <h3 className="text-2xl font-bold text-[#111827]">For Sellers</h3>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-[#EF4444] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Create Your Store</h4>
                    <p className="text-[#6B7280]">Set up your shop in minutes, no technical skills needed</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-[#EF4444] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Upload Products</h4>
                    <p className="text-[#6B7280]">Add your products with photos and descriptions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-[#EF4444] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Manage Orders</h4>
                    <p className="text-[#6B7280]">Process orders and handle deliveries easily</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-[#EF4444] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Get Paid</h4>
                    <p className="text-[#6B7280]">Receive payments directly after delivery confirmation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#3B82F6] to-[#2563EB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-[#DBEAFE] mb-8">
            Join thousands of buyers and sellers on Ghana's most trusted marketplace
          </p>
          <button className="bg-white text-[#3B82F6] px-10 py-4 rounded-lg hover:bg-[#F3F4F6] transition-colors text-lg font-semibold shadow-lg">
            Download Zuba App
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.png" alt="Zuba" width={48} height={48} className="object-contain mb-4" />
              <p className="text-[#9CA3AF]">Buy. Sell. Trust.</p>
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
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#374151] mt-8 pt-8 text-center text-[#9CA3AF]">
            <p>&copy; 2024 Zuba. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}