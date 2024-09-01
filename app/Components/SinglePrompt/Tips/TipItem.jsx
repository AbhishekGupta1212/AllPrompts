
"use client"

import React from 'react';

function TipItem({ iconSrc, content }) {
  return (
    <div className="flex flex-wrap gap-3 items-start py-4 pl-4 mt-4 max-w-full bg-white rounded-xl border border-gray-300 border-solid bg-blend-normal min-h-[82px] w-[896px]">
      <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 w-5 bg-blend-normal aspect-square" />
      <div className="flex flex-col pr-1.5 bg-blend-normal min-h-[48px] min-w-[240px]  w-[830px] max-md:pb-24 max-md:max-w-full">
        {content.map((line, index) => (
          <p key={index} className="max-md:max-w-full">{line}</p>
        ))}
      </div>
    </div>
  );
}

export default TipItem;