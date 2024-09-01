
"use client"

import React from 'react';

const PromptInfo = () => {
  return (
    <section className="flex flex-col grow shrink w-64 h-36 bg-blend-normal min-w-[240px] pb-[160px] max-md:pb-24 sticky left-0">
      <h1 className="text-2xl font-semibold tracking-tight leading-none text-gray-900">
        Prompts
      </h1>
      <p className="flex flex-col mt-4 w-80 max-w-full h-24 text-base bg-blend-normal pb-[2rem] text-slate-600 max-md:pb-24">
        Copy a prompt, replace placeholders with relevant text, and paste it at{" "}
        <span className="font-semibold text-indigo-700">Swanirbhar</span> in
        the right, bottom corner for an efficient and streamlined experience.
      </p>
    </section>
  );
};

export default PromptInfo;