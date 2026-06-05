"use client";

import React, { useState } from 'react';
import { Menu, X, Download, Smartphone, CheckCircle, Shield, Star, Package, Clock, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function DownloadPage() {
  const [downloading, setDownloading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      window.location.href = 'https://drive.google.com/uc?export=download&id=YOUR_DUMMY_ID';
      setDownloading(false);
    }, 500);
  };

  const features = [
    { icon: Shield, title: 'Secure Escrow', description: 'Your money protected for 4 days' },
    { icon: Star, title: 'Earn Rewards', description: 'Get points worth ₵0.10 each' },
    { icon: Package, title: 'Track Orders', description: 'Real-time delivery updates' },
    { icon: CheckCircle, title: 'Verified Sellers', description: 'Buy with confidence' }
  ];

  const steps = [
    { number: '1', title: 'Download the APK', description: 'Click the download button above to get the Zuba app file' },
    { number: '2', title: 'Enable Installation', description: 'Go to Settings > Security > Enable "Install from Unknown Sources"' },
    { number: '3', title: 'Install the App', description: 'Open the downloaded file and tap "Install"' },
    { number: '4', title: 'Start Shopping', description: 'Open Zuba, create your account, and start buying or selling' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DBEAFE] via-white to-[#EDE9FE]">
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
              <a href="/download" className="text-[#3B82F6] font-medium">Download</a>
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
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#DBEAFE] text-[#2563EB] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Latest Version 1.0.0
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#111827] mb-6">
                Download Zuba Today
              </h1>
              <p className="text-xl text-[#6B7280] mb-8">
                Get Ghana's most trusted social commerce app. Buy and sell with confidence using our secure escrow system.
              </p>

              {/* Download Button */}
              <div className="space-y-4 mb-8">
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="w-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-8 py-5 rounded-2xl hover:from-[#2563EB] hover:to-[#1D4ED8] transition font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  {downloading ? (
                    <>
                      <Clock className="animate-spin" size={24} />
                      <span>Preparing Download...</span>
                    </>
                  ) : (
                    <>
                      <Download size={24} />
                      <span>Download APK (Android)</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-[3rem] p-8 shadow-2xl transform hover:scale-105 transition duration-300">
                <div className="bg-white rounded-[2.5rem] p-6 shadow-inner">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-[#DBEAFE] p-4 rounded-2xl">
                      <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
                        <Image src="/logo.png" alt="Zuba" width={32} height={32} className="object-contain" />
                      </div>
                      <div>
                        <div className="font-bold text-[#111827]">Welcome to Zuba</div>
                        <div className="text-sm text-[#6B7280]">Buy. Sell. Trust.</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#D1FAE5] p-4 rounded-xl text-center">
                        <Package className="text-[#059669] mx-auto mb-2" size={28} />
                        <div className="text-sm font-semibold text-[#111827]">24 Orders</div>
                      </div>
                      <div className="bg-[#EDE9FE] p-4 rounded-xl text-center">
                        <Star className="text-[#8B5CF6] mx-auto mb-2" size={28} />
                        <div className="text-sm font-semibold text-[#111827]">₵850</div>
                      </div>
                    </div>

                    <div className="bg-[#F9FAFB] p-4 rounded-xl">
                      <div className="text-xs text-[#9CA3AF] mb-2">Recent Activity</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="text-[#10B981]" size={16} />
                          <span className="text-sm text-[#374151]">Order delivered</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="text-[#3B82F6]" size={16} />
                          <span className="text-sm text-[#374151]">Payment secured</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#10B981] text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Free!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#8B5CF6] text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Secure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111827] text-center mb-12">Why Download Zuba?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F9FAFB] to-white hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-[#DBEAFE] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-[#3B82F6]" size={28} />
                  </div>
                  <h3 className="font-bold text-[#111827] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#6B7280]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111827] text-center mb-4">How to Install</h2>
          <p className="text-[#6B7280] text-center mb-12">Follow these simple steps to get started</p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">{step.title}</h3>
                  <p className="text-[#6B7280]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111827] text-center mb-12">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE] rounded-2xl p-8">
              <Smartphone className="text-[#3B82F6] mb-4" size={40} />
              <h3 className="text-xl font-bold text-[#111827] mb-4">Android Requirements</h3>
              <ul className="space-y-3">
                {[
                  'Android 6.0 or higher',
                  'Minimum 2GB RAM',
                  '50MB free storage',
                  'Internet connection required',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#3B82F6] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#EDE9FE] to-[#DDD6FE] rounded-2xl p-8">
              <Shield className="text-[#8B5CF6] mb-4" size={40} />
              <h3 className="text-xl font-bold text-[#111827] mb-4">Security & Privacy</h3>
              <ul className="space-y-3">
                {[
                  'End-to-end encryption',
                  'Secure payment processing',
                  'No ads or tracking',
                  'Regular security updates',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#8B5CF6] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-[#F59E0B] flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Important: Enable Installation from Unknown Sources</h3>
                <p className="text-[#374151] mb-4">
                  Since this is a direct APK download (not from Play Store), you'll need to enable installation from unknown sources:
                </p>
                <ol className="space-y-2 text-[#374151] ml-4">
                  {[
                    'Go to your device Settings',
                    'Navigate to Security or Privacy',
                    'Enable "Install from Unknown Sources" or "Install Unknown Apps"',
                    'Return to the download and tap to install',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-bold">{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-[#DBEAFE] mb-8">
            Join thousands of buyers and sellers on Ghana's most trusted marketplace
          </p>
          <button
            onClick={handleDownload}
            className="bg-white text-[#3B82F6] px-10 py-5 rounded-2xl hover:bg-[#F3F4F6] transition font-bold text-lg shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto"
          >
            <Download size={24} />
            <span>Download Zuba Now</span>
          </button>
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
              <h4 className="font-semibold mb-4">Download</h4>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="/download" className="hover:text-white transition-colors">Android APK</a></li>
                <li><span className="text-[#6B7280]">iOS (Coming Soon)</span></li>
                <li><span className="text-[#6B7280]">Play Store (Coming Soon)</span></li>
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
