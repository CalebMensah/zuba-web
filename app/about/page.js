import React from 'react';
import { ShoppingCart, Store, Shield, Star, Users, Package, MessageCircle, Heart, Rocket, Info, Mail, Globe, Facebook, Twitter, Instagram, Linkedin, CheckCircle } from 'lucide-react';

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
    { text: 'Trust & Transparency', color: 'bg-blue-500' },
    { text: 'Customer Satisfaction', color: 'bg-green-500' },
    { text: 'Innovation & Excellence', color: 'bg-blue-400' },
    { text: 'Community Empowerment', color: 'bg-red-500' }
  ];

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
              <a href="/about" className="text-blue-600 font-medium">About</a>
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
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl font-bold">Z</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Zuba</h1>
          <p className="text-xl text-gray-600 mb-6">Buy and sell with trust, all in one app</p>
          <div className="inline-block bg-gray-100 px-4 py-2 rounded-full">
            <span className="text-sm font-semibold text-gray-600">Version 1.0.0</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}


      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Info className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">About Zuba</h2>
          </div>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border-l-4 border-blue-600 shadow-md">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Zuba, our mission is to simplify buying and selling, build trust between users, 
              and empower everyday sellers to reach more buyers without the hassle.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
              <Shield className="text-green-500 shrink-0" size={24} />
              <p className="text-gray-700 font-semibold">
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
            <Star className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Heart className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md space-y-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${value.color}`}></div>
                <p className="text-gray-900 font-semibold text-lg">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Mail className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <div className="space-y-4">
            <a href="mailto:support@zubaapp.com" className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Mail className="text-blue-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Email Support</div>
                <div className="text-lg font-semibold text-gray-900">support@zubaapp.com</div>
              </div>
              <span className="text-gray-400 group-hover:text-blue-600 transition">→</span>
            </a>
            <a href="https://www.zubaapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Globe className="text-blue-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Website</div>
                <div className="text-lg font-semibold text-gray-900">www.zubaapp.com</div>
              </div>
              <span className="text-gray-400 group-hover:text-blue-600 transition">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Follow Us</h2>
          <div className="flex justify-center gap-4">
            <a href="https://facebook.com/zubaapp" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition">
              <Facebook className="text-blue-600" size={24} />
            </a>
            <a href="https://twitter.com/zubaapp" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition">
              <Twitter className="text-blue-400" size={24} />
            </a>
            <a href="https://instagram.com/zubaapp" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition">
              <Instagram className="text-red-500" size={24} />
            </a>
            <a href="https://linkedin.com/company/zubaapp" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition">
              <Linkedin className="text-blue-700" size={24} />
            </a>
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






{/*
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  */}