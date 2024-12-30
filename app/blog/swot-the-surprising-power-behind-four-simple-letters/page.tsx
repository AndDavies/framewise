"use client";
import React, { useState } from "react";

export default function Template() {
  // 1. State and Handlers for the Subscribe Form
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Subscription failed");
      }

      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
    } finally {
      setLoading(false);
    }
  }

  function Spinner() {
    return (
      <div className="inline-block h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
    );
  }

  return (
    <section className="bg-[#16171A] text-gray-200 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* 1. Bold Header Image */}
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6">
          <img
            src="/blog/swot_analysis.png"
            alt="Illustration of SWOT Analysis"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2. Title */}
        <h1
          className="
            text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4
            bg-gradient-to-r from-gray-200 to-white
            bg-clip-text text-transparent
          "
        >
          SWOT: The Surprising Power Behind Four Simple Letters
        </h1>

        {/* 3. Author Info and Date */}
        <div className="flex items-center gap-3 text-sm mb-6">
          <p className="font-semibold">Michael Davies, CD, BSc</p>
          <p className="text-gray-400">November 3, 2024</p>
        </div>

        {/* 4. Key Takeaways */}
        <div className="mb-6 border border-gray-700 bg-[#1c1e22] px-4 py-3 rounded-md">
          <h2
            className="
              text-2xl md:text-3xl font-bold mb-3
              bg-gradient-to-r from-gray-200 to-white
              bg-clip-text text-transparent tracking-tight
            "
          >
            Key Takeaways:
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Strengths, Weaknesses, Opportunities, and Threats can spark honest self-reflection.</li>
            <li>Candidly reviewing where you stand helps you pivot faster—crucial for indie hackers and small teams.</li>
            <li>SWOT fosters a mindset of continuous learning, setting you up for long-term wins.</li>
          </ul>
        </div>

        {/* 5. Main Article Text */}
        <article className="space-y-6 leading-relaxed">
          <p>
            It’s possibly the simplest strategic framework on the planet:
            <strong> SWOT</strong>—an acronym so short you might pass it
            off as “too basic” for real impact. And yet, some of the most
            successful startups in Silicon Valley quietly use it to discover
            weaknesses before they turn fatal.
          </p>

          {/* Inline Quote with minimal highlight */}
          <p className="italic font-semibold border-l-4 border-yellow-400 pl-4 text-gray-300">
            “Risk comes from not knowing what you’re doing.” – Warren Buffett
          </p>

          <p>
            Buffett’s wisdom underscores why founders (big or small) can’t
            afford to gloss over self-awareness. If you don’t know where
            you’re strong or weak, you might be leaping into a market with
            blind spots the size of the Grand Canyon.
          </p>

          <p>
            <strong>More Than Just a Brainstorm</strong>
            <br />
            A big misconception is that SWOT belongs in a dusty corner of a
            corporate binder. In reality, it’s an invitation to ask the tough
            questions. For solopreneurs like Pieter Levels, pinpointing a
            glaring weakness—maybe a lack of marketing savvy—can be the first
            step to finding a mentor or building a tool to automate the gap.
          </p>

          <strong>From Eye-Roll to Eye-Opener</strong>
          <br />
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <em>Strengths:</em> Lean teams can pivot quickly. Are you
              leveraging that agility?
            </li>
            <li>
              <em>Weaknesses:</em> Limited funds or coding knowledge might
              hold you back; acknowledging it helps you get creative.
            </li>
            <li>
              <em>Opportunities:</em> Emerging platforms, shifting consumer
              tastes, or tech breakthroughs can catapult a micro-startup
              into the mainstream.
            </li>
            <li>
              <em>Threats:</em> Massive competitors, platform dependency, or
              even personal burnout.
            </li>
          </ul>

          <p>
            <strong>Why It Matters</strong>
            <br />
            In a bustling digital economy, thousands of new ideas launch
            daily. Many vanish just as fast because their creators never
            paused to identify lurking threats or unexploited opportunities.
            Understanding your environment—and your own capabilities—helps you
            make bold, smarter moves.
          </p>

          <p>
            <strong>Business Beyond Buzzwords</strong>
            <br />
            SWOT is more than jargon. It’s a catalyst for meaningful dialogue,
            whether that’s a chat with co-founders or a coffee-fueled brainstorm
            with your indie hacker network. Our forthcoming consulting app will
            streamline these reflections, offering quick insights so you can
            pivot or double down with confidence.
          </p>
        </article>

        {/* 6. Subscription Section */}
        <div className="mt-12">
          <div
            className="
              relative 
              w-full
              rounded-xl
              overflow-hidden
              p-8
              md:p-12
              bg-[#16171A]
            "
            style={{
              backgroundImage: "url('/placeholder-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="
                relative
                z-10
                text-white
                flex
                flex-col
                lg:flex-row
                lg:items-center
                gap-8
                w-full
                min-h-[350px]
                px-8
                py-10
                bg-black
                overflow-hidden
              "
              style={{
                background: `
                  radial-gradient(
                    circle at center,
                    rgba(249,115,22,0.3) 0%,
                    rgba(249,115,22,0) 50%
                  )
                `,
              }}
            >
              {/* Text Block */}
              <div className="lg:w-1/2 lg:pr-8">
                <h3 className="text-5xl md:text-4xl font-extrabold mb-4">
                  Top-Tier Business Strategy
                  Without the Consulting Price Tag
                </h3>
                <p className="mb-6 text-gray-200 text-lg">
                  Stay in the loop with the latest in Business Strategy and Executive Insights.
                </p>
              </div>

              {/* Form Block */}
              <div className="lg:w-1/2 flex justify-end items-center">
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row items-center gap-4 w-full"
                >
                  <div className="relative w-full sm:w-2/3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="
                        w-full
                        bg-gray-800
                        text-white
                        text-lg
                        placeholder-gray-400
                        border
                        border-white
                        px-6
                        py-4
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
                      text-lg
                      font-bold
                      px-8
                      py-4
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
                      <>Subscribe →</>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}