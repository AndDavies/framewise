"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FaqSection from "./components/FaqSection";

/** 
 * Simple spinner using Tailwind's animate-spin class
 * plus a small ring shape 
 */
function Spinner() {
  return (
    <div className="inline-block h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  // For the subscribe form states
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<{ message: string; isError: boolean } | null>(null);
  const [loading, setLoading] = useState(false); // Spinner loading state

  // NAVBAR shrink logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FAQ accordion toggle
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Nav classes
  const navHeight = isScrolled ? "h-20" : "h-24";
  const navLogoSize = isScrolled ? "h-14 w-14" : "h-16 w-16";
  const navBackground = isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent";
  const navTransition = "transition-all duration-300 ease-in-out";

  // Sample FAQ data
  const faqItems = [
    {
      question: "What is FrameWise and how does it work?",
      answer:
        "We’re creating an AI business consultant that offers McKinsey-level strategic frameworks in an accessible, self-serve format.",
    },
    {
      question: "How Does It Compare to Hiring a Traditional Firm?",
      answer:
        "Traditional firms can charge huge fees—often tens of thousands of dollars. We democratize those frameworks at a fraction of the cost.",
    },
    {
      question: "Which Strategic Frameworks Do You Offer?",
      answer:
        "Porter’s 5 Forces, SWOT Analysis, PESTEL, Business Model Canvas, and more—helping you pick what’s right for your situation.",
    },
    {
      question: "Are These Frameworks Too \"Corporate\" for Solopreneurs?",
      answer:
        "Not at all. We adapt them so you can quickly validate your idea, understand your market, and build in public without feeling overwhelmed.",
    },
    {
      question: "How Do I Get Personalized Guidance Using FrameWise?",
      answer:
        "Our AI business consultant tailors recommendations to your unique goals and resources. If you need extra insight, you can request deeper analysis or live consultations, ensuring you always have strategic support when you need it.",
    },
    {
      question: "Is My Data Safe and Confidential with FrameWise?",
      answer:
        "Absolutely. We use best-in-class encryption and privacy protocols to secure your data. Your information stays confidential—no data sharing with third parties. We believe trust is essential, especially for entrepreneurs building their future.",
    },
    {
      question: "Is There a Beta or Free Trial Available?",
      answer:
        "Yes. While we’re in our concept validation stage, we offer early adopters a free trial to explore the core functionalities. Sign up on our waitlist to get notified when our next cohort opens. Your feedback helps us refine FrameWise to fit real-world needs.",
    },
  ];

  // Handle subscribe form submission
  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFeedback(null);
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setFeedback({ message: data.message || "Something went wrong.", isError: true });
        return;
      }

      // On success
      setFeedback({ message: data.message, isError: false });
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setFeedback({ message: "Server error. Please try again later.", isError: true });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="scroll-smooth min-h-screen w-full bg-white text-gray-900 antialiased">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-8 ${navHeight} ${navBackground} ${navTransition}`}
      >
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
          {/* <span className={`text-white font-extrabold text-2xl ${navTransition}`}>
            FrameWise
          </span> */}
        </div>

        {/* NAV LINKS */}
        <div className="flex space-x-6">
          <a href="#how-it-works" className="text-white font-semibold hover:text-yellow-300">
            How It Works
          </a>
          <a href="#why-this-matters" className="text-white font-semibold hover:text-yellow-300">
            Why This Matters
          </a>
          <a href="#features" className="text-white font-semibold hover:text-yellow-300">
            Features
          </a>
          <a href="#faq" className="text-white font-semibold hover:text-yellow-300">
            FAQ
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="relative flex items-center justify-start w-full h-screen border-8 border-yellow-400 overflow-hidden pt-0"
        id="hero"
      >
        {/* BG Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/landing/framewise_hero_background.png")' }}
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-black/10" />
        {/* Text container */}
        <div className="relative z-10 w-full max-w-2xl px-4 md:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-xl tracking-tight">
            Top-Tier Business Strategy <br /> Without the Consulting Price Tag
          </h1>
          <p className="text-xl sm:text-2xl text-white font-semibold drop-shadow-md mb-6">
            Use proven frameworks and guided analysis to shape your next big idea or scale your
            current business.
          </p>

          {/* SIGN-UP FORM */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email here"
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
                flex
                items-center
                justify-center
                gap-2
              "
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner />
                  Processing...
                </>
              ) : (
                <>Subscribe &rarr;</>
              )}
            </button>
          </form>

          {/* Feedback message */}
          {feedback && (
            <div
              className={`mt-4 font-semibold text-sm ${
                feedback.isError ? "text-red-400" : "text-green-300"
              }`}
            >
              {feedback.message}
            </div>
          )}
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
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-yellow-400 transition-colors duration-300">
                Share Your Idea
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">Basic inputs to personalize the journey.</p>
            </div>

            {/* Step 2 */}
            <div className="group bg-white rounded-lg p-8 text-center border-l-4 border-transparent hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[200px] mb-4">
                <Image src="/landing/group.png" alt="Board Meeting" fill className="object-cover rounded-md" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-yellow-400 transition-colors duration-300">
                Apply Proven Frameworks
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">Get Actionable Feedback</p>
            </div>

            {/* Step 3 */}
            <div className="group bg-white rounded-lg p-8 text-center border-l-4 border-transparent hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-[200px] mb-4">
                <Image src="/landing/highfives.png" alt="High-Five" fill className="object-cover rounded-md" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-yellow-400 transition-colors duration-300">
                Get Actionable Feedback
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                AI-powered insights to refine and move forward.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY IT MATTERS SECTION */}
      <section className="w-full bg-[rgb(22,23,26)] text-gray-300 py-16 px-4" id="why-this-matters">
        {/* Container */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Circular Image with Subtle Gradient at Bottom */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[30rem] h-[30rem] rounded-full overflow-hidden">
              {/* The main image */}
              <img
                src="/landing/why_it_matters.png"
                alt="Placeholder"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Subtle gradient overlay: only the bottom 10%, fading to transparent */}
              <div className="absolute bottom-0 w-full h-[10%] bg-gradient-to-t from-gray-300 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Why This Matters */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Heading with bolder style + paint-stroke behind “Matters” */}
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-100 drop-shadow-md relative">
              Why This{" "}
              <span className="relative inline-block">
                Matters
                {/* Paint-stroke effect behind the word */}
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-orange-500 -z-10" />
              </span>
            </h2>

            <ul className="space-y-5">
              {/* 1. Save Thousands */}
              <li className="flex items-center gap-3">
                <img src="/icons/radiant.svg" alt="radiant bullet" className="h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-100">
                    Save Thousands (If Not More) on Consulting Fees
                  </h3>
                </div>
              </li>

              {/* 2. Build a Solid Foundation */}
              <li className="flex items-center gap-3">
                <img src="/icons/radiant.svg" alt="radiant bullet" className="h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-100">Build a Solid Strategic Foundation</h3>
                </div>
              </li>

              {/* 3. From Idea to Action */}
              <li className="flex items-center gap-3">
                <img src="/icons/radiant.svg" alt="radiant bullet" className="h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-100">From Idea to Action in Record Time</h3>
                </div>
              </li>
            </ul>

            {/* Sign-Up Form */}
            <div className="mt-8">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email here"
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
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Spinner />
                      Processing...
                    </>
                  ) : (
                    <>Subscribe &rarr;</>
                  )}
                </button>
              </form>

              {/* Feedback message */}
              {feedback && (
                <div
                  className={`mt-4 font-semibold text-sm ${
                    feedback.isError ? "text-red-400" : "text-green-300"
                  }`}
                >
                  {feedback.message}
                </div>
              )}
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
                Easily access proven strategic frameworks to develop your next business idea or optimize an existing
                one.
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
        
        <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
        <FaqSection faqItems={faqItems} />
      </div>
    </main>
  );
}
