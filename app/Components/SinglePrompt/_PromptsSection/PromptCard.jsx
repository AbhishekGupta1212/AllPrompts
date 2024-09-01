
"use client"

import React from 'react';

const PromptCard = ({ number, content }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <article className="flex overflow-hidden flex-col pb-6 mt-4 w-full max-w-screen-md bg-gray-900 rounded-xl bg-blend-normal max-md:max-w-full">
      <header className="flex flex-wrap gap-10 px-6 py-4 w-full font-medium text-white bg-blend-normal bg-slate-800 max-md:px-5 max-md:max-w-full">
        <h2 className="my-auto text-lg">Prompt #{number}</h2>
        <button
          onClick={handleCopy}
          className="flex flex-1 gap-2 px-4 py-2.5 text-sm leading-none whitespace-nowrap rounded-lg border border-solid bg-blend-normal border-slate-600"
          aria-label={`Copy prompt ${number}`}
        >
          <span>Copy</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/09638f6bf14e25430d335ed0001e6870819d0f1b6001f25804653cb079678c72?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" className="object-contain shrink-0 self-start w-5 bg-blend-normal aspect-square" alt="" />
        </button>
      </header>
      <div className="flex flex-col items-start px-6 mt-6 w-full text-base max-md:px-5 max-md:max-w-full">
        <p className="text-gray-300 max-md:max-w-full">{content}</p>
      </div>
    </article>
  );
};

export default PromptCard;