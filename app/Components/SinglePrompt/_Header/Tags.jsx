
"use client"
import React from "react";

function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-3 items-start pr-2 mt-6 text-sm font-medium leading-none bg-blend-normal min-h-[32px] max-md:max-w-full">
      
        <span
          className={`px-3 py-1.5 whitespace-nowrap text-[rgb(151, 65, 220)]  rounded-2xl bg-blend-normal border border-black-200 ${tags}`}
        >
          {tags}
        </span>

    </div>
  );
}

export default Tags;