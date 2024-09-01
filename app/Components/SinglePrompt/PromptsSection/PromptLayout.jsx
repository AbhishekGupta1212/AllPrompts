
"use client"
import React from 'react';;
import PromptSection from './PromptSection';
import PromptInfo from './PromptInfo';

const PromptLayout = () => {
  return (
    <main className="flex flex-wrap gap-10 items-start bg-blend-normal max-md:max-w-full">
      <PromptInfo />
      <PromptSection />
    </main>
  );
};

export default PromptLayout;