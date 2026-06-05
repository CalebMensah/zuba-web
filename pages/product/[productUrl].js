import React, { useState } from 'react';
import Head from "next/head";
import { ShoppingCart, Download, Store, Shield, Star, ChevronLeft, ChevronRight, ExternalLink, Package, Truck, CreditCard, ArrowRight, Check, Heart, Share2 } from 'lucide-react';

export async function getServerSideProps({ params }) {
  const { productUrl } = params;
  try {
    const res = await fetch(
      `https://zuba-app.onrender.com/api/products/product/${productUrl}`
    );
    if (!res.ok) {
      return { notFound: true };
    }
    const product = await res.json();
    console.log("Fetched product:", product);
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { notFound: true };
  }
}

export default function ProductPage({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const shareUrl = `https://zuba-web.vercel.app/product/${product.url}`;
  const images = product.data.images || [];
  const currentImage = images[currentImageIndex] || "";

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.data.name,
          text: product.data.description,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    }
  };

  return (
    <>
      <Head>
        <title>{product.data.name} | Zuba</title>
        <meta name="description" content={product.data.description} />
        {/* OpenGraph + Social Preview */}
        <meta property="og:title" content={product.data.name} />
        <meta property="og:description" content={product.data.description} />
        <meta property="og:image" content={currentImage} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="product" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16">
              <a href="/" className="flex items-center gap-1 sm:gap-2">
                <div className="text-xl sm:text-2xl font-bold">
                  <span className="text-blue-600">ZU</span>
                  <span className="text-red-500">BA</span>
                </div>
                <ShoppingCart className="text-green-500" size={20} />
              </a>
              <div className="flex items-center gap-2 sm:gap-3">
                <a href="/" className="text-gray-600 hover:text-gray-900 font-medium hidden sm:block transition">
                  Home
                </a>
                <a href="/download" className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-3 py-2 sm:px-6 sm:py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition font-semibold flex items-center gap-1 sm:gap-2 shadow-lg shadow-blue-200 text-sm sm:text-base">
                  <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="hidden xs:inline">Get App</span>
                  <span className="xs:hidden">App</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Product Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden aspect-square">
                {currentImage ? (
                  <>
                    <img 
                      src={currentImage} 
                      alt={product.data.name}
                      className="w-full h-full object-contain p-4 sm:p-8"
                    />
                    
                    {/* Image Navigation */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition"
                        >
                          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition"
                        >
                          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition ${
                                idx === currentImageIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-50">
                    <Package className="text-gray-300" size={80} />
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 sm:gap-4">
                  {images.slice(0, 4).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative bg-white rounded-lg sm:rounded-xl overflow-hidden aspect-square border-2 transition ${
                        idx === currentImageIndex ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-contain p-2" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Store Badge */}
              {product.data.store && (
                <a 
                  href={`/store/${product.data.store.url}`}
                  className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full text-blue-700 font-semibold text-sm transition"
                >
                  <Store size={16} />
                  <span>{product.data.store.name}</span>
                  <ArrowRight size={14} />
                </a>
              )}

              {/* Product Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  {product.data.name}
                </h1>
                
                {/* Rating & Reviews */}
                {product.data.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < Math.floor(product.data.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 font-medium">{product.data.rating}</span>
                    {product.data.reviewCount && (
                      <span className="text-gray-400">({product.data.reviewCount} reviews)</span>
                    )}
                  </div>
                )}
              </div>

              {/* Price */}
              {product.data.price && (
                <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-sm text-gray-600 mb-1">Price</div>
                  <div className="text-4xl sm:text-5xl font-bold text-blue-600">
                    ₵{product.data.price.toLocaleString()}
                  </div>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-gray-400 line-through text-lg">₵{product.originalPrice.toLocaleString()}</span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              {product.data.description && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Description</h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {product.data.description}
                  </p>
                </div>
              )}

              {/* Features/Benefits */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Secure Payment</div>
                    <div className="text-sm text-gray-600">Protected by escrow system</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Truck className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Fast Delivery</div>
                    <div className="text-sm text-gray-600">Track your order in real-time</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <Star className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Earn Rewards</div>
                    <div className="text-sm text-gray-600">Get points on every purchase</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <a
                  href={`zuba://product/${product.url}`}
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition font-bold text-lg shadow-xl flex items-center justify-center gap-3"
                >
                  <ShoppingCart size={24} />
                  <span>Open in Zuba App</span>
                </a>
                
                <a
                  href="/download"
                  className="w-full bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition font-bold text-lg shadow-lg border-2 border-blue-600 flex items-center justify-center gap-3"
                >
                  <Download size={24} />
                  <span>Download App</span>
                </a>

                <button
                  onClick={handleShare}
                  className="w-full bg-gray-100 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-200 transition font-semibold flex items-center justify-center gap-2"
                >
                  <Share2 size={20} />
                  <span>Share Product</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Shop on Zuba Section */}
        <section className="bg-white py-12 sm:py-16 mt-12 sm:mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Shop on Zuba?</h2>
              <p className="text-lg text-gray-600">The safest way to buy and sell in Ghana</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payments</h3>
                <p className="text-gray-600">Every transaction protected by our escrow system</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-linear-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Check className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Sellers</h3>
                <p className="text-gray-600">All sellers are verified for your safety</p>
              </div>

              <div className="text-center p-6 sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Earn Rewards</h3>
                <p className="text-gray-600">Get points worth ₵0.10 each on purchases</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
              <div className="col-span-2 md:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  <span className="text-blue-400">ZU</span>
                  <span className="text-red-400">BA</span>
                </div>
                <p className="text-gray-400 text-base sm:text-lg">Buy. Sell. Trust.</p>
              </div>
              <div>
                <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Company</h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                  <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                  <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                  <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Legal</h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                  <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
                  <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Download</h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                  <li><a href="/download" className="hover:text-white transition">Android APK</a></li>
                  <li><a href="https://facebook.com/zubaapp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a></li>
                  <li><a href="https://twitter.com/zubaapp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
              <p>&copy; 2024 Zuba. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}