import React from 'react';
import Head from "next/head";
import { ShoppingCart, Store, MapPin, Clock, Phone, Mail, Download, Shield, ChevronRight, Instagram, Facebook, Twitter, Package, Star, Award, TrendingUp, Users, CheckCircle } from 'lucide-react';

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://81bcab4457f6.ngrok-free.app/api/stores/s/${params.url}`);
  console.log('store id from params:', params.url);
  console.log('Fetching store data from:', `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/public/store/${params.url}`);
  console.log('Response status:', res.status);
  console.log('Response ok:', res.ok);
  
  if (!res.ok) {
    return { notFound: true };
  }
  
  const store = await res.json();
  console.log('Fetched store data:', store);
  
  return { props: { store } };
}

export default function StorePage({ store }) {
  const ogImage = store.data.logo || `${process.env.NEXT_PUBLIC_SITE_URL}/default-og.png`;

  
  return (
    <>
      <Head>
        <title>{store.data.name} - Shop on Zuba</title>
        <meta name="description" content={store.data.description || "Shop on Zuba"} />
        {/* Social share */}
        <meta property="og:title" content={store.data.name} />
        <meta property="og:description" content={store.data.description || "Shop on Zuba"} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}/store/${store.url}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">ZU</span>
                <span className="text-red-500">BA</span>
              </div>
              <ShoppingCart className="text-green-500" size={24} />
            </a>
            <div className="flex items-center gap-3">
              <a href="/" className="text-gray-600 hover:text-gray-900 font-medium hidden sm:block transition">
                Home
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition font-semibold flex items-center gap-2 shadow-lg shadow-blue-200">
                <Download size={18} />
                <span>Get App</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Modern Design */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Store Logo & Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold mb-6 border border-white/30">
                <CheckCircle size={16} />
                <span>Verified Store</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {store.data.name}
              </h1>
              
              <p className="text-xl text-blue-50 mb-8 max-w-2xl leading-relaxed">
                {store.data.description}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30">
                  <Package className="text-white" size={20} />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{store.data.totalProducts || '50+'}+</div>
                    <div className="text-xs text-blue-100">Products</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30">
                  <Star className="text-yellow-300 fill-yellow-300" size={20} />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{store.data.rating || '4.8'}★</div>
                    <div className="text-xs text-blue-100">Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30">
                  <TrendingUp className="text-green-300" size={20} />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{store.data.totalSales || '200+'}+</div>
                    <div className="text-xs text-blue-100">Sales</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition font-bold text-lg shadow-2xl flex items-center gap-2">
                  <Download size={22} />
                  <span>Shop Now</span>
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/50 px-8 py-4 rounded-full hover:bg-white/20 transition font-bold text-lg flex items-center gap-2">
                  <Phone size={22} />
                  <span>Contact</span>
                </button>
              </div>
            </div>

            {/* Store Logo Card */}
            <div className="relative">
              <div className="w-80 h-80 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
                  {store.data.logo ? (
                    <img 
                      src={store.data.logo} 
                      alt={store.data.name}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <Store className="text-blue-600" size={120} />
                  )}
                </div>
                
                {/* Verified Badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-4 shadow-xl border-4 border-white">
                  <Shield size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Information Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Store className="text-blue-600" size={24} />
            </div>
            Store Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Location */}
            {store.data.location && (
              <div className="group hover:shadow-lg transition-all duration-300 p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-2 text-lg">Location</div>
                    <div className="text-gray-700">{store.data.location}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Phone */}
            {store.data.phone && (
              <div className="group hover:shadow-lg transition-all duration-300 p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl border border-green-200/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-2 text-lg">Phone</div>
                    <a href={`tel:${store.data.phone}`} className="text-green-700 hover:text-green-800 font-semibold hover:underline">
                      {store.data.phone}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Email */}
            {store.data.email && (
              <div className="group hover:shadow-lg transition-all duration-300 p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl border border-purple-200/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-2 text-lg">Email</div>
                    <a href={`mailto:${store.data.email}`} className="text-purple-700 hover:text-purple-800 font-semibold hover:underline break-all">
                      {store.data.email}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Business Hours */}
            {store.data.businessHours && (
              <div className="group hover:shadow-lg transition-all duration-300 p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl border border-orange-200/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-2 text-lg">Business Hours</div>
                    <div className="text-gray-700">{store.data.businessHours}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Social Media */}
          {(store.data.facebook || store.data.instagram || store.data.twitter) && (
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gray-900 mb-6 text-xl">Connect With Us</h3>
              <div className="flex gap-4">
                {store.data.facebook && (
                  <a 
                    href={store.data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl flex items-center justify-center transition shadow-lg hover:shadow-xl transform hover:scale-110"
                  >
                    <Facebook className="text-white" size={24} />
                  </a>
                )}
                {store.data.instagram && (
                  <a 
                    href={store.data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl flex items-center justify-center transition shadow-lg hover:shadow-xl transform hover:scale-110"
                  >
                    <Instagram className="text-white" size={24} />
                  </a>
                )}
                {store.data.twitter && (
                  <a 
                    href={store.data.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition shadow-lg hover:shadow-xl transform hover:scale-110"
                  >
                    <Twitter className="text-white" size={24} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Shop With Us?</h2>
          <p className="text-xl text-gray-600">Experience the Zuba difference</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Payments</h3>
            <p className="text-gray-600">Every transaction protected by our advanced escrow system</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Earn Rewards</h3>
            <p className="text-gray-600">Get points worth ₵0.10 each on every purchase</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Package className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
            <p className="text-gray-600">Track your orders in real-time with live updates</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-3xl p-12 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <ShoppingCart className="text-blue-600" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Shopping Today
            </h2>
            <p className="text-xl text-blue-50 mb-10 max-w-3xl mx-auto">
              Download the Zuba app and discover thousands of products from verified sellers. Shop with confidence, earn rewards, and enjoy secure transactions.
            </p>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-full hover:bg-gray-50 transition font-bold text-xl shadow-2xl inline-flex items-center gap-3 transform hover:scale-105">
              <Download size={28} />
              <span>Download Zuba Now</span>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-3xl font-bold mb-4">
                <span className="text-blue-400">ZU</span>
                <span className="text-red-400">BA</span>
              </div>
              <p className="text-gray-400 text-lg">Buy. Sell. Trust.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Download</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/download" className="hover:text-white transition">Android APK</a></li>
                <li><a href="https://facebook.com/zubaapp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a></li>
                <li><a href="https://twitter.com/zubaapp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zuba. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}