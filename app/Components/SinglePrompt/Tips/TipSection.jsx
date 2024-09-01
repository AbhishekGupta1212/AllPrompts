
"use client"

import React from 'react';
import TipItem from './TipItem';

const tips = [
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/57a735133c16ffa8f9b311e81029bcbbaa3ffbf37ad6ff0687b92128d632742d?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    content: [
      "Use ChatGPT to research and analyze your industry and competitors to identify best practices and areas for",
      "differentiation in your employer branding strategy."
    ]
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/41656949ec1fbcb7f1b22aa45c0a539301be19473d6c519e795682d6f6ddc3f0?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    content: [
      "Use ChatGPT to create messaging and content that resonates with your target audience and aligns with your",
      "company's values and culture."
    ]
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/09322047054d5cdb454448ad333ab5cb17a555fe0370c323c9616dd80b36803b?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    content: [
      "Use ChatGPT to measure the effectiveness of your employer branding efforts by tracking metrics such as",
      "employee engagement, retention, and referral rates. Continuously iterate and improve your strategy based on",
      "the data and feedback."
    ]
  }
];

function TipsSection() {
  return (
    <section className="flex flex-col justify-center px-16 py-20 w-full bg-gray-50 bg-blend-normal max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start bg-blend-normal min-h-[302px] max-md:max-w-full">
        <header className="flex flex-col grow shrink w-64 bg-blend-normal h-[120px] min-w-[240px] pb-[20px] max-md:pb-24">
          <h2 className="text-2xl font-semibold tracking-tight leading-none text-gray-900">Tips</h2>
          <p className="flex flex-col mt-4 w-80 max-w-full text-base bg-blend-normal min-h-[72px] pb-[20px] text-slate-600 max-md:pb-24">
            Follow these guidelines to maximize your experience and unlock the full potential of your conversations with{" "}
            <span className="font-semibold text-indigo-700">Swanirbhar</span>.
          </p>
        </header>
        <div className="flex flex-col grow shrink text-base bg-blend-normal min-h-[302px] min-w-[240px] pb-[20px] text-slate-600 w-[832px] max-md:pb-24 max-md:max-w-full">
          {tips.map((tip, index) => (
            <TipItem key={index} iconSrc={tip.iconSrc} content={tip.content} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TipsSection;