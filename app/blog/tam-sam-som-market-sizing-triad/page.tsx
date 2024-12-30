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
            src="/blog/tam_sam_som.png"
            alt="Illustration of Market Sizing"
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
          TAM, SAM, SOM: The Market-Sizing Triad That Tests Your Ambition
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
            <li>Proper market sizing helps you avoid building a solution in search of a market.</li>
            <li>TAM (Total), SAM (Serviceable), and SOM (Obtainable) ensure you’re realistic about growth potential.</li>
            <li>Indie hackers and solopreneurs benefit from right-sizing their goals before investing time and resources.</li>
          </ul>
        </div>

        {/* 5. Main Article Text */}
        <article className="space-y-6 leading-relaxed">
          <p>
            You’ve got a groundbreaking product idea—maybe it’s the next big SaaS platform, or a niche micro-tool with massive potential. How do you figure out if your big dream aligns with a big-enough market? Enter TAM, SAM, and SOM—the ultimate reality check for your product’s future.
          </p>

          {/* Inline Quote with minimal highlight */}
          <p className="italic font-semibold border-l-4 border-yellow-400 pl-4 text-gray-300">
            “The only way to win is to learn faster than anyone else.” – Eric Ries
          </p>

          
            <strong>From Pie-in-the-Sky to Practical</strong>
            <br />
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <em>TAM (Total Addressable Market):</em> The grand sum of all potential customers if you had zero competition and infinite resources.
              </li>
              <li>
                <em>SAM (Serviceable Available Market):</em> The slice of that pie you could realistically serve given your product’s scope.
              </li>
              <li>
                <em>SOM (Serviceable Obtainable Market):</em> The portion you can actually capture with your current capacity.
              </li>
            </ul>
          

          <p>
            <strong>Why This Matters</strong>
            <br />
            For founders running solo, resources are precious. Overestimating your market can lead to wasted effort, while underestimating it might mean you never take that bold leap. People like Pieter Levels often excel because they define just the right slice of market to focus on—an approach that fosters laser-sharp marketing and product decisions.
          </p>

          <p>
            <strong>Balancing Dreams and Data</strong>
            <br />
            Embracing market analysis doesn’t mean you lose your creative spark. It means you’re fueling your vision with facts. Is your SOM big enough to sustain a profitable venture? If not, time to rethink or refine your offering. No sense in building a solution for an audience that isn’t there.
          </p>

          <p>
            <strong>A Healthy Dose of Realism</strong>
            <br />
            Investors, mentors, and even your future customers will want to know if your idea has legs. The triad of TAM, SAM, and SOM helps you articulate that convincingly. Our soon-to-launch consulting app will let you gather these insights in a breeze, but the conceptual clarity is valuable even if you’re not seeking investment—because no one wants to open a store where no one shops.
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