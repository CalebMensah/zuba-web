"use client";

import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Download, Smartphone, CheckCircle, Shield, Star, Package, Clock, AlertCircle, Apple, PlayCircle } from 'lucide-react';

export default function DownloadPage() {
  const [downloading, setDownloading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      // Replace this dummy link with your actual Google Drive APK link
      window.location.href = 'https://drive.google.com/uc?export=download&id=YOUR_DUMMY_ID';
      setDownloading(false);
    }, 500); // Slight delay for UX
  };


  const features = [
    { icon: Shield, title: 'Secure Escrow', description: 'Your money protected for 4 days' },
    { icon: Star, title: 'Earn Rewards', description: 'Get points worth ₵0.10 each' },
    { icon: Package, title: 'Track Orders', description: 'Real-time delivery updates' },
    { icon: CheckCircle, title: 'Verified Sellers', description: 'Buy with confidence' }
  ];

  const steps = [
    {
      number: '1',
      title: 'Download the APK',
      description: 'Click the download button above to get the Zuba app file'
    },
    {
      number: '2',
      title: 'Enable Installation',
      description: 'Go to Settings > Security > Enable "Install from Unknown Sources"'
    },
    {
      number: '3',
      title: 'Install the App',
      description: 'Open the downloaded file and tap "Install"'
    },
    {
      number: '4',
      title: 'Start Shopping',
      description: 'Open Zuba, create your account, and start buying or selling'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              <a href="/download" className="text-blue-600 font-medium">Download</a>
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
              <a href="/features" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Features</a>
              <a href="/faq" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">FAQ</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Contact</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-2">
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
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Latest Version 1.0.0
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Download Zuba Today
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get Ghana's most trusted social commerce app. Buy and sell with confidence using our secure escrow system.
              </p>

              {/* Download Buttons */}
              <div className="space-y-4 mb-8">
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-5 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50"
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
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] p-8 shadow-2xl transform hover:scale-105 transition duration-300">
                <div className="bg-white rounded-[2.5rem] p-6 shadow-inner">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-2xl">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <ShoppingCart className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Welcome to Zuba</div>
                        <div className="text-sm text-gray-600">Buy. Sell. Trust.</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-50 p-4 rounded-xl text-center">
                        <Package className="text-green-600 mx-auto mb-2" size={28} />
                        <div className="text-sm font-semibold text-gray-900">24 Orders</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-xl text-center">
                        <Star className="text-purple-600 mx-auto mb-2" size={28} />
                        <div className="text-sm font-semibold text-gray-900">₵850</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-xs text-gray-500 mb-2">Recent Activity</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="text-green-600" size={16} />
                          <span className="text-sm text-gray-700">Order delivered</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="text-blue-600" size={16} />
                          <span className="text-sm text-gray-700">Payment secured</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Free!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Secure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Download Zuba?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">How to Install</h2>
          <p className="text-gray-600 text-center mb-12">Follow these simple steps to get started</p>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <Smartphone className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Android Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Android 6.0 or higher</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Minimum 2GB RAM</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">50MB free storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Internet connection required</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <Shield className="text-purple-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Privacy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">End-to-end encryption</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Secure payment processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">No ads or tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Regular security updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Important: Enable Installation from Unknown Sources</h3>
                <p className="text-gray-700 mb-4">
                  Since this is a direct APK download (not from Play Store), you'll need to enable installation from unknown sources:
                </p>
                <ol className="space-y-2 text-gray-700 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">1.</span>
                    <span>Go to your device Settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">2.</span>
                    <span>Navigate to Security or Privacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">3.</span>
                    <span>Enable "Install from Unknown Sources" or "Install Unknown Apps"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">4.</span>
                    <span>Return to the download and tap to install</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of buyers and sellers on Ghana's most trusted marketplace
          </p>
          <button
            onClick={handleDownload}
            className="bg-white text-blue-600 px-10 py-5 rounded-2xl hover:bg-gray-100 transition font-bold text-lg shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto"
          >
            <Download size={24} />
            <span>Download Zuba Now</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
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
              <h4 className="font-semibold mb-4">Download</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/download" className="hover:text-white">Android APK</a></li>
                <li><span className="text-gray-500">iOS (Coming Soon)</span></li>
                <li><span className="text-gray-500">Play Store (Coming Soon)</span></li>
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

{/* 
              <div className="flex gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">10K+</div>
                  <div className="text-gray-600 text-sm">Downloads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">4.8★</div>
                  <div className="text-gray-600 text-sm">Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">2K+</div>
                  <div className="text-gray-600 text-sm">Sellers</div>
                </div>
              </div>
  
  */}