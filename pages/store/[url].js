import React from 'react';
import Head from "next/head";
import { ShoppingCart, Store, MapPin, Clock, Phone, Mail, Download, ExternalLink, Star, Package, Shield, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';

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

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="flex items-center">
                <div className="text-2xl font-bold">
                  <span className="text-blue-600">ZU</span>
                  <span className="text-red-500">BA</span>
                  <ShoppingCart className="inline-block ml-1 text-green-500" size={24} />
                </div>
              </a>
              <div className="flex items-center gap-4">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium hidden sm:block">
                  Home
                </a>
                <a 
                  href="/download" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center gap-2"
                >
                  <Download size={18} />
                  <span>Download App</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Store Hero Section */}
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Store Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  {/* Store Logo */}
                  <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-4 flex-shrink-0">
                    {store.data.logo ? (
                      <img 
                        src={store.data.logo} 
                        alt={store.data.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Store className="text-blue-600" size={64} />
                    )}
                  </div>

                  {/* Store Info */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-4">
                      <Shield size={16} />
                      <span>Verified Seller</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                      {store.data.name}
                    </h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                      {store.data.description || "Welcome to our store on Zuba"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Store Stats */}
              <div className="grid grid-cols-3 divide-x divide-gray-200 bg-gray-50">
                <div className="px-6 py-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {store.data.totalProducts || '50+'}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">Products</div>
                </div>
                <div className="px-6 py-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {store.data.rating || '4.8'}★
                  </div>
                  <div className="text-gray-600 text-sm font-medium">Rating</div>
                </div>
                <div className="px-6 py-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {store.data.totalSales || '200+'}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">Sales</div>
                </div>
              </div>

              {/* Store Details */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Store className="text-blue-600" size={28} />
                  Store Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {store.data.location && (
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Location</div>
                        <div className="text-gray-600">{store.data.location}</div>
                      </div>
                    </div>
                  )}

                  {store.data.phone && (
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-green-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Phone</div>
                        <a href={`tel:${store.data.phone}`} className="text-green-600 hover:underline">
                          {store.data.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {store.data.email && (
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Email</div>
                        <a href={`mailto:${store.data.email}`} className="text-purple-600 hover:underline">
                          {store.data.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {store.data.businessHours && (
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-orange-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Business Hours</div>
                        <div className="text-gray-600">{store.data.businessHours}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Social Media Links */}
                {(store.data.facebook || store.data.instagram || store.data.twitter) && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Connect with us</h3>
                    <div className="flex gap-3">
                      {store.data.facebook && (
                        <a 
                          href={store.data.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition"
                        >
                          <Facebook className="text-blue-600" size={20} />
                        </a>
                      )}
                      {store.data.instagram && (
                        <a 
                          href={store.data.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-pink-100 hover:bg-pink-200 rounded-lg flex items-center justify-center transition"
                        >
                          <Instagram className="text-pink-600" size={20} />
                        </a>
                      )}
                      {store.data.twitter && (
                        <a 
                          href={store.data.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition"
                        >
                          <Twitter className="text-blue-400" size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="text-blue-600" size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Browse Products from {store.data.name}
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Download the Zuba app to explore all products, make secure purchases with escrow protection, and enjoy exclusive rewards!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/download" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition font-bold text-lg shadow-lg flex items-center justify-center gap-2"
                >
                  <Download size={24} />
                  <span>Download Zuba App</span>
                </a>
                <a 
                  href="/" 
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl hover:bg-white/30 transition font-bold text-lg flex items-center justify-center gap-2"
                >
                  <span>Learn More</span>
                  <ChevronRight size={20} />
                </a>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Shield className="text-white mx-auto mb-3" size={32} />
                  <h3 className="text-white font-semibold mb-2">Secure Payments</h3>
                  <p className="text-blue-100 text-sm">Escrow protection for every purchase</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Star className="text-white mx-auto mb-3" size={32} />
                  <h3 className="text-white font-semibold mb-2">Earn Rewards</h3>
                  <p className="text-blue-100 text-sm">Get points worth ₵0.10 each</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Package className="text-white mx-auto mb-3" size={32} />
                  <h3 className="text-white font-semibold mb-2">Track Orders</h3>
                  <p className="text-blue-100 text-sm">Real-time delivery updates</p>
                </div>
              </div>
            </div>
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
                <p className="text-gray-400">Buy. Sell. Trust.</p>
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
                  <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
                  <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Download</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/download" className="hover:text-white">Android APK</a></li>
                  <li><a href="https://facebook.com/zubaapp" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a></li>
                  <li><a href="https://twitter.com/zubaapp" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a></li>
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