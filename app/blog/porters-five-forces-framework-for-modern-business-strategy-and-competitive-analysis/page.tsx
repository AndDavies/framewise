"use client";
import React, { useState } from "react";

export default function Template() {
  // 1. State and Handlers for the Subscribe Form
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<{ message: string; isError: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

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
            src="/blog/porters_five_forces.png"
            alt="Article Hero"
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
          Porter’s Five Forces: Why This Classic Framework Still Fuels Competitive Edge
        </h1>

        {/* 3. Author Info and Date */}
        <div className="flex items-center gap-3 text-sm mb-6">
          <p className="font-semibold">Michael Davies, CD, BSc</p>
          <p className="text-gray-400">November 2, 2024</p>
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
            <li>Porter’s Five Forces isn’t just an “MBA thing”—it’s a lens for seeing hidden market forces.</li>
            <li>Even solopreneurs and indie hackers can use these insights to spot threats and opportunities early.</li>
            <li>Start small and build up.</li>
            <li>Staying curious about your competitors, potential entrants, and market trends often yields first-mover advantage.</li>
          </ul>
        </div>

        {/* 5. Main Article Text */}
        <article className="space-y-6 leading-relaxed">
          <p>
            Ask any consultant, and they’ll tell you Michael Porter’s name is
            etched into the bedrock of modern strategy. But for someone running
            a lean operation—maybe a one-person startup or an indie hacker
            project—mention “Porter’s Five Forces” and you might get a polite
            nod or a shrug: “Is that relevant for me?” Short answer: Absolutely.
          </p>

          <p>
            The Five Forces (threat of new entrants, threat of substitutes,
            bargaining power of suppliers, bargaining power of buyers, and
            rivalry among competitors) originally aimed at big firms navigating
            complex industries. But businesses of all shapes and sizes—
            especially in the digital age—are discovering that thinking a few
            moves ahead is a game-changer.
          </p>

          {/* Inline Quote with minimal highlight */}
          <p className="italic font-semibold border-l-4 border-yellow-400 pl-4 text-gray-300">
            “Strategy is about making choices, trade-offs; it’s about deliberately
            choosing to be different.” – Michael Porter
          </p>

          <p>
            <strong>Looking Beyond ‘Big Business’</strong>
            <br />
            While Fortune 500 companies have entire departments to analyze
            competitive threats, the real winners in this day and age are often
            the scrappy folks in co-working spaces, garages, or coffee shops.
            People like Pieter Levels (creator of Nomad List and other indie
            hacking gems) show us that you don’t need an army of MBAs to think
            strategically. You just need an awareness of how competition,
            suppliers, customers, and emerging alternatives (substitutes) can
            shift the terrain overnight.
          </p>

          <strong>Finding the Hidden Opportunities</strong>
          <br />
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <em>Threat of New Entrants:</em> If it’s easy for other indie
              hackers to replicate your idea, what unique spin can you bring?
            </li>
            <li>
              <em>Rivalry Among Competitors:</em> Even if you’re the only
              coder in your field, never assume you’re alone. The rivalry
              might be indirect (e.g., how Netflix competes with sleep).
            </li>
            <li>
              <em>Buyer and Supplier Power:</em> Customers these days are
              discerning and have an entire internet of choices. How can you
              stand out?
            </li>
          </ul>

          <p>
            <strong>Sowing the Seeds of Innovation</strong>
            <br />
            It’s not enough to be “disruptive” in a vacuum. By recognizing these
            forces, you can spot friction points that no one else is solving.
            Maybe suppliers are too powerful, and you have a workaround—or
            perhaps the real competition is the thousands of side-hustlers who
            can replicate your service with a single plugin.
          </p>

          <p>
            <strong>A Framework for Real-World Impact</strong>
            <br />
            Ultimately, Porter’s Five Forces isn’t about memorizing a textbook
            definition. It’s about learning to see your competitive field with
            fresh eyes. As a solopreneur, that heightened awareness can be the
            difference between building something that flops and creating the
            next must-have product.
          </p>

          <p>
            <strong>Stay Tuned</strong>
            <br />
            Stay tuned for more insights on how big-picture frameworks like
            these can guide everyday decisions. Our upcoming consulting app
            will soon help you harness that power with minimal fuss—but for
            now, keep your head on a swivel and never underestimate the forces
            shaping your market.
          </p>
        </article>

        {/* 6. Subscription Section */}
        <div className="mt-12">
          {/* Placeholder background image (replace /placeholder-bg.png) */}
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
            {/* 
              If you want a dark overlay on top of the image:
              <div className="absolute inset-0 bg-black opacity-40" />
            */}

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
                  // Example inline style for a radial background “burst”
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

                    {/* Feedback Message */}
                    {feedback && (
                      <div
                        className={`
                          mt-4
                          font-semibold
                          text-sm
                          w-full
                          text-right
                          ${feedback.isError ? "text-red-400" : "text-green-300"}
                        `}
                      >
                        {feedback.message}
                      </div>
                    )}
                  </div>
                </div>
          </div>
        </div>

      </div>
    </section>
  );
}