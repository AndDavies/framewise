'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  // FAQ local state: track which question is open by index (or null if none)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Nav shrink logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggling a single FAQ item
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Nav classes
  const navHeight = isScrolled ? 'h-20' : 'h-24'
  const navLogoSize = isScrolled ? 'h-14 w-14' : 'h-16 w-16'
  const navBackground = isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
  const navTransition = 'transition-all duration-300 ease-in-out'

  // Faq data (you can expand or refine these as needed)
  const faqItems = [
    {
      question: 'What Exactly Is This Platform?',
      answer: 'We’re creating an AI business consultant that offers McKinsey-level strategic frameworks in an accessible, self-serve format. Think of it as a “virtual consulting” solution for small businesses, solopreneurs, and indie hackers who want affordable consulting without the big firm price tag.'
    },
    {
      question: 'How Does It Compare to Hiring a Traditional Consulting Firm?',
      answer: 'Traditional firms like McKinsey can charge huge fees—often tens of thousands of dollars. Our platform democratizes those business frameworks (like Porter’s 5 Forces, SWOT Analysis, and more), guiding you step-by-step at a fraction of the cost. You get actionable business strategy insights without the financial barrier.'
    },
    {
      question: 'Which Strategic Frameworks Do You Offer?',
      answer: 'We’re starting with proven tools such as Porter’s 5 Forces, SWOT Analysis, PESTEL, and Business Model Canvas—plus a growing library of advanced frameworks. We’ll help you choose the right one for your startup strategy, whether you’re bootstrapping a new SaaS or looking to innovate in an existing small business.'
    },
    {
      question: 'Are These Frameworks Too ‘Corporate’ for a Solopreneur or Indie Hacker?',
      answer: 'Not at all. While these methodologies are often taught in MBA programs or used by large consulting firms, they can be invaluable for solopreneurs, side-hustlers, and indie hackers. Our goal is to simplify and adapt them so you can quickly validate your idea, understand your market, and build in public without feeling overwhelmed.'
    }
  ]

  return (
    <main className="min-h-screen w-full bg-white text-gray-900 antialiased">
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-8 ${navHeight} ${navBackground} ${navTransition}`}>
        {/* LOGO + BRAND NAME */}
        <div className="flex items-center space-x-3">
          <Image
            src="/landing/logo_white_trans.png"
            alt="FrameWise Logo"
            width={200}
            height={200}
            priority
            className={`object-contain ${navLogoSize} ${navTransition}`}
          />
          <span className={`text-white font-extrabold text-2xl ${navTransition}`}>
            FrameWise
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="flex space-x-6">
          <a href="#how-it-works" className="text-white font-semibold hover:text-yellow-300">How It Works</a>
          <a href="#why-this-matters" className="text-white font-semibold hover:text-yellow-300">Why This Matters</a>
          <a href="#features" className="text-white font-semibold hover:text-yellow-300">Features</a>
          <a href="#faq" className="text-white font-semibold hover:text-yellow-300">FAQ</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex items-center justify-start w-full h-screen border-8 border-yellow-400 overflow-hidden pt-0" id="hero">
  {/* Background Image (using a div w/ background) */}
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/landing/framewise_hero_background.png")' }} />

  {/* Light overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Text container */}
  <div className="relative z-10 w-full max-w-2xl px-4 md:px-8 text-center">
    <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-xl tracking-tight">
      Top-Tier Business Strategy  <br /> Without the Consulting Price Tag
    </h1>
    <p className="text-xl sm:text-2xl text-white font-semibold drop-shadow-md mb-6">
      Use proven frameworks and guided analysis to shape your next big idea 
      or scale your current business.
    </p>

    {/* SIGN-UP FORM */}
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center justify-center gap-4">
      {/* Email Input */}
      <div className="relative">
        <input 
          type="email" 
          placeholder="your@email.com"
          className="
            w-64 sm:w-80 
            bg-gray-800 
            text-white 
            placeholder-gray-400
            border border-white 
            px-6 py-3
            rounded-full
            focus:outline-none
            focus:border-yellow-400
            transition-colors
          "
          required
        />
      </div>
      
      {/* Subscribe Button */}
      <button 
        type="submit"
        className="
          bg-orange-500
          text-white
          font-bold
          px-6 py-3
          rounded-full
          hover:bg-orange-600
          transition-colors
        "
      >
        Subscribe &rarr;
      </button>
    </form>
  </div>
</section>

      {/* WHY THIS MATTERS SECTION */}
      <div className="why-this-matters-section py-12 bg-gray-50" id="why-this-matters">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">Why This Matters</h2>
        
        <div className="max-w-7xl mx-auto px-6">
          {/* 3 columns for wide screens, 1 for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            {/* ITEM 1 */}
            <div className="group bg-white rounded-lg p-8 text-center border-l-4 border-transparent hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[250px] mb-4">
                <Image
                  src="/landing/boardmeeting.png"
                  alt="Group"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-2 text-gray-800 group-hover:text-yellow-400 transition-colors duration-300">
                Save Thousands (If Not More) on Consulting Fees
              </h3>
              <p className="text-base text-gray-600 leading-snug">
                Traditional management consultants are costly and often out of reach...
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="group bg-white rounded-lg p-8 text-center border-l-4 border-transparent hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[250px] mb-4">
                <Image
                  src="/landing/group.png"
                  alt="Board Meeting"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-2 text-gray-800 group-hover:text-yellow-400 transition-colors duration-300">
                Build a Solid Strategic Foundation
              </h3>
              <p className="text-base text-gray-600 leading-snug">
                You can’t grow a successful business on shaky ground. Our guided approach...
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="group bg-white rounded-lg p-8 text-center border-l-4 border-transparent hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[250px] mb-4">
                <Image
                  src="/landing/highfives.png"
                  alt="High Fives"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-2 text-gray-800 group-hover:text-yellow-400 transition-colors duration-300">
                From Idea to Action in Record Time
              </h3>
              <p className="text-base text-gray-600 leading-snug">
                By translating frameworks into real-life next moves, you’ll save time, reduce guesswork...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS SECTION */}
      <div className="how-it-works-section py-12 bg-white" id="how-it-works">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">How It Works</h2>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[200px] mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                {/* Placeholder for now */}
                <span>Group Discussion Image</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Share Your Idea</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Basic inputs to personalize the journey.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[200px] mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                <span>Team Collaboration Image</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Apply Proven Frameworks</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Get Actionable Feedback</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[200px] mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                <span>High-Five Image</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Get Actionable Feedback</h3>
              <p className="text-sm text-gray-600 leading-relaxed">AI-powered insights to refine and move forward.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES OVERVIEW SECTION */}
      <div className="features-overview-section py-12 bg-gray-50" id="features">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">Features Overview</h2>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 w-full">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[150px] mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                <span>[On-Demand Frameworks Icon]</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">On-Demand Frameworks</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Easily access proven strategic frameworks to develop your next business idea or optimize an existing one.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[150px] mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                <span>[Interactive Canvas Icon]</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Interactive Canvas for Brainstorming</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Collaborate visually and structure ideas to reach deeper insights and creative solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[150px] mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                <span>[AI-Powered Insights Icon]</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">AI-Powered Insights</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get real-time, data-backed feedback to refine your strategic approach and outmaneuver competitors.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[150px] mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                <span>[Community & Support Icon]</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Community & Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Join a network of innovators and business owners, and receive helpful tips from experts along the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="faq-section bg-gray-900 text-white py-12 px-6" id="faq">
        <h2 className="text-4xl font-extrabold text-center mb-10">FAQ</h2>

        {/* We'll map through faqItems for each question */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item border border-gray-700 rounded-md">
              <button 
                onClick={() => handleToggle(index)}
                className="faq-question w-full text-left bg-gray-800 py-3 px-4 font-semibold rounded-t-md"
              >
                {item.question}
              </button>
              {/* Show/hide answer based on openIndex */}
              {openIndex === index && (
                <div className="faq-answer bg-gray-700 p-4 rounded-b-md">
                  <p className="text-sm">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}