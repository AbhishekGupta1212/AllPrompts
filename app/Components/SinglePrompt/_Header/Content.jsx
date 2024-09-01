
"use client"

import React from "react";

function Content({ title, emoji, description, promptId }) {
  return (
    <article className="flex flex-col mt-8 max-w-full bg-blend-normal w-[768px]">
      <h1 className="flex flex-wrap gap-4 items-start pb-px text-4xl tracking-tighter leading-tight text-gray-900 bg-blend-normal h-[43px]">
        <span role="img" aria-label="Emoji">
          {emoji}
        </span>
        <span className="font-semibold max-md:max-w-full">{title}</span>
      </h1>
      <p className="flex flex-col ml-5 pb-2 mt-4 bg-blend-normal text-slate-600 max-md:pb-24 max-md:max-w-full">
        {description}
      </p>
      <div className="self-start text-slate-600">{promptId}</div>
    </article>
  );
}

export default Content;