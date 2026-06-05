"use client";

import React, { useState } from 'react';
import { ShoppingCart, Store, Shield, Star, Users, Package, MessageCircle, Heart, Rocket, Info, Mail, Globe, Facebook, Twitter, Instagram, Linkedin, CheckCircle, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Store,
      title: 'Create Your Store',
      description: 'Set up your own store in minutes and start selling'
    },
    {
      icon: Package,
      title: 'Browse Products',
      description: 'Discover products across multiple sellers with ease'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Protected transactions with escrow system for peace of mind'
    },
    {
      icon: CheckCircle,
      title: 'Verified Sellers',
      description: 'Buy with confidence from verified and trusted sellers'
    },
    {
      icon: Star,
      title: 'Real-time Updates',
      description: 'Stay informed with instant order and delivery updates'
    },
    {
      icon: MessageCircle,
      title: 'Direct Messaging',
      description: 'Chat directly with sellers and buyers for smooth communication'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Users', icon: Users },
    { value: '5K+', label: 'Products', icon: Package },
    { value: '2K+', label: 'Sellers', icon: Store }
  ];

  const values = [
    { text: 'Trust & Transparency', color: 'bg-[#3B82F6]' },
    { text: 'Customer Satisfaction', color: 'bg-[#10B981]' },
    { text: 'Innovation & Excellence', color: 'bg-[#60A5FA]' },
    { text: 'Community Empowerment', color: 'bg-[#EF4444]' }
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
              <a href="/about" className="text-[#3B82F6] font-medium">About</a>
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

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Zuba" width={120} height={120} className="object-contain" />
          </div>
          <h1 className="text-5xl font-bold text-[#111827] mb-4">Zuba</h1>
          <p className="text-xl text-[#6B7280] mb-6">Buy and sell with trust, all in one app</p>
          <div className="inline-block bg-[#F3F4F6] px-4 py-2 rounded-full">
            <span className="text-sm font-semibold text-[#6B7280]">Version 1.0.0</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Info className="text-[#3B82F6]" size={28} />
            <h2 className="text-3xl font-bold text-[#111827]">About Zuba</h2>
          </div>
          <div className="space-y-4 text-[#6B7280] text-lg leading-relaxed">
            <p>
              Zuba is a trusted online marketplace that connects buyers and sellers across Ghana.
              Whether you want to sell your items or find something new, Zuba makes it easy, fast, and safe.
            </p>
            <p>
              We leverage cutting-edge technology to provide a seamless buying and selling experience,
              with features like secure payments, escrow protection, and real-time order tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="text-[#3B82F6]" size={28} />
            <h2 className="text-3xl font-bold text-[#111827]">Our Mission</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border-l-4 border-[#3B82F6] shadow-md">
            <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
              At Zuba, our mission is to simplify buying and selling, build trust between users,
              and empower everyday sellers to reach more buyers without the hassle.
            </p>
            <div className="bg-[#F9FAFB] rounded-xl p-4 flex items-center gap-3">
              <Shield className="text-[#10B981] shrink-0" size={24} />
              <p className="text-[#111827] font-semibold">
                Building trust through transparency and security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Star className="text-[#3B82F6]" size={28} />
            <h2 className="text-3xl font-bold text-[#111827]">Key Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition flex gap-4">
                  <div className="w-12 h-12 bg-[#DBEAFE] rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="text-[#3B82F6]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2">{feature.title}</h3>
                    <p className="text-[#6B7280]">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Heart className="text-[#3B82F6]" size={28} />
            <h2 className="text-3xl font-bold text-[#111827]">Our Values</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md space-y-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${value.color}`}></div>
                <p className="text-[#111827] font-semibold text-lg">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Mail className="text-[#3B82F6]" size={28} />
            <h2 className="text-3xl font-bold text-[#111827]">Contact Us</h2>
          </div>
          <div className="space-y-4">
            <a href="mailto:support@zubaapp.com" className="flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                <Mail className="text-[#3B82F6]" size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-[#9CA3AF]">Email Support</div>
                <div className="text-lg font-semibold text-[#111827]">support@zubaapp.com</div>
              </div>
              <span className="text-[#9CA3AF] group-hover:text-[#3B82F6] transition">→</span>
            </a>
            <a href="https://www.zubaapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                <Globe className="text-[#3B82F6]" size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-[#9CA3AF]">Website</div>
                <div className="text-lg font-semibold text-[#111827]">www.zubaapp.com</div>
              </div>
              <span className="text-[#9CA3AF] group-hover:text-[#3B82F6] transition">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111827] mb-8 text-center">Follow Us</h2>
          <div className="flex justify-center gap-4">
            <a href="https://facebook.com/zubaapp" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition">
              <Facebook className="text-[#3B82F6]" size={24} />
            </a>
            <a href="https://twitter.com/zubaapp" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition">
              <Twitter className="text-[#60A5FA]" size={24} />
            </a>
            <a href="https://instagram.com/zubaapp" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition">
              <Instagram className="text-[#EF4444]" size={24} />
            </a>
            <a href="https://linkedin.com/company/zubaapp" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition">
              <Linkedin className="text-[#2563EB]" size={24} />
            </a>
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