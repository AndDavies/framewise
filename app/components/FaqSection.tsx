"use client"; // Needed for interactive UI in Next.js App Router

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqItems: FAQItem[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // If the current question is already open, close it; otherwise open it
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="border-b border-gray-300 text-white">
          <button
            onClick={() => handleToggle(index)}
            className="flex justify-between items-center w-full py-3 text-left"
          >
            <span className="font-medium text-gray-300">
              {item.question}
            </span>
            <span className="ml-2 text-gray-300">
              {openIndex === index ? "–" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <p className="pb-3 text-gray-200">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqSection;