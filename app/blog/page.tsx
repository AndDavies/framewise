"use client";
import React from "react";

export default function Template() {
  return (
    <section className="bg-[#16171A] text-gray-200 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* 1. Bold Header Image */}
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6">
          <img
            src="/images/article-hero.jpg"
            alt="Article Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2. Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
          The Journey to Self-Mastery Begins in the Physical Realm
        </h1>

        {/* 3. Author Info and Date */}
        <div className="flex items-center gap-3 text-sm mb-6">
          {/* Example: If you have an author avatar, you can add it here */}
          {/* <img
            src="/images/author.jpg"
            alt="Author Name"
            className="h-10 w-10 rounded-full object-cover"
          /> */}
          <p className="font-semibold">Michael Davies, CD, BSc</p>
          <p className="text-gray-400">November 2, 2024</p>
        </div>

        {/* 4. Prominent Quote */}
        <div className="bg-gray-800 px-6 py-4 mb-6 rounded-lg relative">
          <p className="font-semibold text-lg italic">
            “The journey to self-mastery begins in the physical province
            because that is the easiest place to impart the essential
            lessons of success and to absorb them.”
            <br />— Greg Glassman
          </p>
        </div>

        {/* 5. Key Takeaways */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Key Takeaways for Your Journey to Self-Mastery:
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Growth lives outside your comfort zone.</li>
            <li>Don’t be afraid to look like a beginner.</li>
            <li>Start small and build up.</li>
            <li>Accept humility as a gift.</li>
            <li>Every moment of awkwardness is a chance to learn.</li>
            <li>Surrender to what you can’t control—trust the process.</li>
          </ul>
        </div>

        {/* 6. Main Article Text */}
        <article className="space-y-6 leading-relaxed">
          <p>
            Years ago, I came across this quote from Greg Glassman.
            I don’t remember the exact day, but I remember how it hit me...
          </p>
          <p>
            More paragraphs, subheadings, images, etc.
          </p>
        </article>
      </div>
    </section>
  );
}