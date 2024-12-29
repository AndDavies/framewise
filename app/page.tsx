'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // NAVBAR shrink logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true)
      else setIsScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // FAQ accordion toggle
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Nav classes
  const navHeight = isScrolled ? 'h-20' : 'h-24'
  const navLogoSize = isScrolled ? 'h-14 w-14' : 'h-16 w-16'
  const navBackground = isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
  const navTransition = 'transition-all duration-300 ease-in-out'

  // Sample FAQ data
  const faqItems = [
    {
      question: 'What Exactly Is This Platform?',
      answer: 'We’re creating an AI business consultant that offers McKinsey-level strategic frameworks in an accessible, self-serve format.'
    },
    {
      question: 'How Does It Compare to Hiring a Traditional Firm?',
      answer: 'Traditional firms can charge huge fees—often tens of thousands of dollars. We democratize those frameworks at a fraction of the cost.'
    },
    {
      question: 'Which Strategic Frameworks Do You Offer?',
      answer: 'Porter’s 5 Forces, SWOT Analysis, PESTEL, Business Model Canvas, and more—helping you pick what’s right for your situation.'
    },
    {
      question: 'Are These Frameworks Too “Corporate” for Solopreneurs?',
      answer: 'Not at all. We adapt them so you can quickly validate your idea, understand your market, and build in public without feeling overwhelmed.'
    }
  ]

  return (
    <main className="scroll-smooth min-h-screen w-full bg-white text-gray-900 antialiased">
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
        {/* BG Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/landing/framewise_hero_background.png")' }} />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-black/10" />
        {/* Text container */}
        <div className="relative z-10 w-full max-w-2xl px-4 md:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-xl tracking-tight">
            Top-Tier Business Strategy <br /> Without the Consulting Price Tag
          </h1>
          <p className="text-xl sm:text-2xl text-white font-semibold drop-shadow-md mb-6">
            Use proven frameworks and guided analysis to shape your next big idea or scale your current business.
          </p>

          {/* SIGN-UP FORM */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

      {/* HOW IT WORKS SECTION */}
      <div className="how-it-works-section py-12 bg-white" id="how-it-works">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">How It Works</h2>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            
            {/* Step 1 */}
            <div className="group bg-white rounded-lg p-8 text-center border-l-4 border-transparent hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[200px] mb-4">
                <Image src="/landing/boardmeeting.png" alt="Group" fill className="object-cover rounded-md" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-yellow-400 transition-colors duration-300">Share Your Idea</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Basic inputs to personalize the journey.</p>
            </div>

            {/* Step 2 */}
            <div className="group bg-white rounded-lg p-8 text-center border-l-4 border-transparent hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[200px] mb-4">
                <Image src="/landing/group.png" alt="Board Meeting" fill className="object-cover rounded-md" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-yellow-400 transition-colors duration-300">Apply Proven Frameworks</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Get Actionable Feedback</p>
            </div>

            {/* Step 3 */}
            <div className="group bg-white rounded-lg p-8 text-center border-l-4 border-transparent hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[200px] mb-4">
                <Image src="/landing/highfives.png" alt="High-Five" fill className="object-cover rounded-md" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-yellow-400 transition-colors duration-300">Get Actionable Feedback</h3>
              <p className="text-sm text-gray-600 leading-relaxed">AI-powered insights to refine and move forward.</p>
            </div>

          </div>
        </div>
      </div>

<section className="w-full bg-[rgb(22,23,26)] text-gray-300 py-16 px-4">
  {/* Container */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
    
    {/* Left Side: Circular Gradient Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative w-96 h-96 rounded-full overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100"></div>
        {/* Placeholder Image */}
        <img 
          src="/landing/why_it_matters.png" 
          alt="Placeholder" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" 
        />
      </div>
    </div>

    {/* Right Side: Why This Matters */}
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-3xl font-bold">Why This Matters</h2>
      <ul className="space-y-5">

        {/* 1. Save Thousands */}
        <li className="flex items-start gap-3">
          <img 
            src="/icons/radiant.svg" 
            alt="radiant bullet" 
            className="h-10 w-10 flex-shrink-0" 
          />
          <div>
            <h3 className="font-semibold text-lg">
              Save Thousands (If Not More) on Consulting Fees
            </h3>
            {/* <p className="text-gray-300">
              #placeholder text about how your AI-driven solution offers 
              proven frameworks at a fraction of the price
            </p> */}
          </div>
        </li>

        {/* 2. Build a Solid Foundation */}
        <li className="flex items-start gap-3">
          <img 
            src="/icons/radiant.svg" 
            alt="radiant bullet" 
            className="h-10 w-10 flex-shrink-0" 
          />
          <div>
            <h3 className="font-semibold text-lg">
              Build a Solid Strategic Foundation
            </h3>
            {/* <p className="text-gray-300">
              #placeholder text focusing on using frameworks like Porter’s 5 Forces, 
              SWOT, etc., for a stable business foundation
            </p> */}
          </div>
        </li>

        {/* 3. From Idea to Action */}
        <li className="flex items-start gap-3">
          <img 
            src="/icons/radiant.svg" 
            alt="radiant bullet" 
            className="h-10 w-10 flex-shrink-0" 
          />
          <div>
            <h3 className="font-semibold text-lg">
              From Idea to Action in Record Time
            </h3>
            {/* <p className="text-gray-300">
              #placeholder text on quickly applying insights to launch faster 
              and validate your ideas without endless guesswork
            </p> */}
          </div>
        </li>
      </ul>
      
      {/* Sign-Up Form */}
      <div className="mt-8">
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="flex flex-col sm:flex-row items-center justify-start gap-4"
        >
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
                focus:border-orange-400
                transition-colors
              "
              required
            />
          </div>
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
    </div>
  </div>
</section>

      {/* FEATURES OVERVIEW SECTION */}
      <div className="features-overview-section py-12 bg-gray-50" id="features">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">Features Overview</h2>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            
            {/* FEATURE 1 */}
            <div className="group relative bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="relative w-16 h-16 mb-4 mx-auto">
                <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-80" />
                <Image 
                  src="/icons/group.png" 
                  alt="On-Demand Frameworks Icon"
                  fill 
                  className="object-contain p-2 relative" 
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
                On-Demand Frameworks
              </h3>
              <p className="text-base text-gray-600 leading-normal">
                Easily access proven strategic frameworks to develop your next business idea or optimize an existing one.
              </p>
            </div>

            {/* FEATURE 2 */}
            <div className="group relative bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="relative w-16 h-16 mb-4 mx-auto">
                <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-80" />
                <Image 
                  src="/icons/brainstorm.png" 
                  alt="Interactive Canvas Icon"
                  fill 
                  className="object-contain p-2 relative" 
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
                Interactive Canvas for Brainstorming
              </h3>
              <p className="text-base text-gray-600 leading-normal">
                Collaborate visually and structure ideas to reach deeper insights and creative solutions.
              </p>
            </div>

            {/* FEATURE 3 */}
            <div className="group relative bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="relative w-16 h-16 mb-4 mx-auto">
                <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-80" />
                <Image 
                  src="/icons/rocket.png" 
                  alt="AI-Powered Insights Icon"
                  fill 
                  className="object-contain p-2 relative" 
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
                AI-Powered Insights
              </h3>
              <p className="text-base text-gray-600 leading-normal">
                Get real-time, data-backed feedback to refine your strategic approach and outmaneuver competitors.
              </p>
            </div>

            {/* FEATURE 4 */}
            <div className="group relative bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="relative w-16 h-16 mb-4 mx-auto">
                <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-80" />
                <Image 
                  src="/icons/heads.png" 
                  alt="Community & Support Icon"
                  fill 
                  className="object-contain p-2 relative" 
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
                Community & Support
              </h3>
              <p className="text-base text-gray-600 leading-normal">
                Join a network of innovators and business owners, and receive helpful tips from experts along the way.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="faq-section bg-gray-900 text-white py-12 px-6" id="faq">
        <h2 className="text-4xl font-extrabold text-center mb-10">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item border border-gray-700 rounded-md">
              <button 
                onClick={() => handleToggle(index)}
                className="faq-question w-full text-left bg-gray-800 py-3 px-4 font-semibold rounded-t-md"
              >
                {item.question}
              </button>
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