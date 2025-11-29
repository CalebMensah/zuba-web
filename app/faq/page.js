"use client";

import React, { useState } from 'react';
import { Menu,X,ShoppingCart, ChevronDown, ChevronUp, Search, HelpCircle, Store, Package, Shield, CreditCard, Users, MessageCircle } from 'lucide-react';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'General', icon: HelpCircle, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { name: 'For Buyers', icon: Package, color: 'text-green-600', bgColor: 'bg-green-50' },
    { name: 'For Sellers', icon: Store, color: 'text-red-600', bgColor: 'bg-red-50' },
    { name: 'Payments', icon: CreditCard, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { name: 'Security', icon: Shield, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { name: 'Support', icon: MessageCircle, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
  ];

  const faqs = [
    {
      category: 'General',
      question: 'What is Zuba?',
      answer: 'Zuba is a trusted social commerce platform that connects buyers and sellers across Ghana. We make it easy, fast, and safe to buy and sell products online with features like secure escrow payments, verified sellers, and real-time order tracking.'
    },
    {
      category: 'General',
      question: 'How do I create an account?',
      answer: 'Download the Zuba app from the App Store or Google Play Store. Click "Sign Up" and enter your name, email, phone number, and create a password. Verify your email and phone number to complete registration.'
    },
    {
      category: 'General',
      question: 'Is Zuba free to use?',
      answer: 'Yes! Creating an account and browsing products is completely free. Sellers pay a small commission on successful sales, and there are no hidden fees for buyers.'
    },
    {
      category: 'For Buyers',
      question: 'How do I place an order?',
      answer: 'Browse products, add items to your cart, proceed to checkout, enter your delivery address, choose a payment method, and confirm your order. You\'ll receive real-time updates on your order status.'
    },
    {
      category: 'For Buyers',
      question: 'Can I buy from multiple sellers at once?',
      answer: 'Yes! You can add products from multiple sellers to your cart and check out all at once. Each seller will handle their portion of the order separately.'
    },
    {
      category: 'For Buyers',
      question: 'What is the escrow system?',
      answer: 'Our escrow system protects your money. When you make a purchase, your payment is held securely for 4 days. The money is only released to the seller after you confirm receipt of your goods, or automatically after 4 days if you don\'t respond.'
    },
    {
      category: 'For Buyers',
      question: 'What if I don\'t receive my order?',
      answer: 'If you don\'t receive your order within the expected timeframe, don\'t confirm receipt. Contact the seller first through the app. If the issue isn\'t resolved, your payment will remain in escrow and you can contact our support team for assistance.'
    },
    {
      category: 'For Buyers',
      question: 'How do I earn reward points?',
      answer: 'You earn points when you sign up, make purchases, and leave reviews for products. Each point is worth ₵0.10 and can be redeemed for products or used as credit for future purchases.'
    },
    {
      category: 'For Buyers',
      question: 'Can I track my order?',
      answer: 'Yes! You can track your order in real-time through the app. You\'ll receive notifications at every stage: order confirmed, being prepared, shipped, out for delivery, and delivered.'
    },
    {
      category: 'For Buyers',
      question: 'What payment methods do you accept?',
      answer: 'We accept Mobile Money (MTN, Vodafone, AirtelTigo), debit/credit cards (Visa, Mastercard), and bank transfers. All payments are processed securely through certified payment gateways.'
    },
    {
      category: 'For Sellers',
      question: 'How do I become a seller on Zuba?',
      answer: 'Create an account, go to "Become a Seller" in your profile, provide your business information and verification documents (Ghana Card, business registration, selfie), and wait for approval. Once verified, you can set up your store immediately.'
    },
    {
      category: 'For Sellers',
      question: 'What documents do I need for seller verification?',
      answer: 'You need: Ghana Card (front and back), business registration documents (if applicable), and a selfie photo for identity verification. All documents are encrypted and stored securely.'
    },
    {
      category: 'For Sellers',
      question: 'How long does verification take?',
      answer: 'Seller verification typically takes 24-48 hours. We\'ll review your documents and notify you via email and in-app notification once your store is approved.'
    },
    {
      category: 'For Sellers',
      question: 'How do I add products to my store?',
      answer: 'Go to your seller dashboard, click "Add Product," upload product photos, enter title, description, price, quantity, and category. You can add multiple photos and manage inventory from your dashboard.'
    },
    {
      category: 'For Sellers',
      question: 'When do I receive payment for my sales?',
      answer: 'Payments are released after the buyer confirms receipt or automatically after 4 days. The money is transferred to your Zuba wallet, where you can withdraw to your mobile money account or bank.'
    },
    {
      category: 'For Sellers',
      question: 'What fees do sellers pay?',
      answer: 'Sellers pay a small commission on each successful sale. The exact percentage depends on your product category and seller tier. There are no listing fees or monthly charges.'
    },
    {
      category: 'For Sellers',
      question: 'How do I manage orders?',
      answer: 'All orders appear in your seller dashboard. You can view order details, update order status, communicate with buyers, arrange delivery, and track payments all from one place.'
    },
    {
      category: 'For Sellers',
      question: 'Can I offer discounts or promotions?',
      answer: 'Yes! You can create discount codes, run flash sales, and offer special promotions through your seller dashboard. This helps attract more customers to your store.'
    },
    {
      category: 'Payments',
      question: 'Is my payment information secure?',
      answer: 'Absolutely! All payment information is encrypted using industry-standard security. We use certified payment processors and never store your full card details on our servers.'
    },
    {
      category: 'Payments',
      question: 'How does the 4-day escrow period work?',
      answer: 'When you buy something, your payment is held securely for 4 days. You can confirm receipt early if you\'re satisfied. If you don\'t respond within 4 days, the payment is automatically released to the seller. This protects both buyers and sellers.'
    },
    {
      category: 'Payments',
      question: 'Can I get a refund?',
      answer: 'Yes, if you receive a damaged or incorrect item, don\'t confirm receipt. Contact the seller first to resolve the issue. If unresolved, contact our support team within the 4-day escrow period for a refund.'
    },
    {
      category: 'Payments',
      question: 'How do I withdraw money from my seller wallet?',
      answer: 'Go to your wallet, click "Withdraw," select your preferred method (Mobile Money or Bank Transfer), enter the amount, and confirm. Withdrawals are processed within 24 hours.'
    },
    {
      category: 'Security',
      question: 'How do you verify sellers?',
      answer: 'We verify all sellers by checking their Ghana Card, business documents, and identity through a selfie verification. Only verified sellers can list products on Zuba.'
    },
    {
      category: 'Security',
      question: 'What if I suspect fraud?',
      answer: 'Report any suspicious activity immediately through the app or contact our support team. We take fraud seriously and investigate all reports promptly. Never complete a transaction outside the app.'
    },
    {
      category: 'Security',
      question: 'Is my personal information safe?',
      answer: 'Yes! We use end-to-end encryption for sensitive data, secure servers with regular audits, and limit employee access to personal information. Read our Privacy Policy for full details.'
    },
    {
      category: 'Security',
      question: 'Can I report a seller or product?',
      answer: 'Yes! Click the three dots on any product or seller profile and select "Report." Provide details about the issue and we\'ll investigate within 24 hours.'
    },
    {
      category: 'Support',
      question: 'How do I contact customer support?',
      answer: 'You can reach us via email at zubamobileapp@gmail.com, call us at 0598785053, or WhatsApp us. We also have in-app chat support available Monday-Friday 8 AM-6 PM, Saturday 9 AM-4 PM.'
    },
    {
      category: 'Support',
      question: 'What are your business hours?',
      answer: 'Our support team is available Monday-Friday 8 AM-6 PM, and Saturday 9 AM-4 PM (GMT). We\'re closed on Sundays. We respond to all inquiries within 24 hours.'
    },
    {
      category: 'Support',
      question: 'How do I delete my account?',
      answer: 'Go to Settings > Account > Delete Account. Note that this action is permanent and will delete all your data, including order history, wallet balance, and seller information.'
    },
    {
      category: 'Support',
      question: 'Can I change my registered phone number or email?',
      answer: 'Yes! Go to Settings > Profile > Edit. You\'ll need to verify your new phone number or email address for security purposes.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const faqsByCategory = categories.map(category => ({
    ...category,
    faqs: filteredFaqs.filter(faq => faq.category === category.name)
  })).filter(category => category.faqs.length > 0);

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
              <a href="/faq" className="text-blue-600 font-medium">FAQ</a>
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
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="text-blue-600" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 mb-8">
            Find answers to common questions about using Zuba
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const count = faqs.filter(faq => faq.category === category.name).length;
              return (
                <a
                  key={index}
                  href={`#${category.name.toLowerCase().replace(' ', '-')}`}
                  className={`${category.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transition group`}
                >
                  <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition`}>
                    <Icon className={category.color} size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{count} questions</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqsByCategory.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try searching with different keywords</p>
            </div>
          ) : (
            faqsByCategory.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} id={category.name.toLowerCase().replace(' ', '-')}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center`}>
                      <Icon className={category.color} size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = faqs.findIndex(f => f === faq);
                      const isOpen = openIndex === globalIndex;
                      
                      return (
                        <div
                          key={faqIndex}
                          className="bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-lg"
                        >
                          <button
                            onClick={() => toggleAccordion(globalIndex)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                          >
                            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                            {isOpen ? (
                              <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                            ) : (
                              <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-5 pt-2">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12">
            <MessageCircle className="mx-auto text-blue-600 mb-6" size={48} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still need help?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition font-semibold"
              >
                Contact Support
              </a>
              <a
                href="mailto:zubamobileapp@gmail.com"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition font-semibold"
              >
                Email Us
              </a>
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