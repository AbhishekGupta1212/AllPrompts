
"use client"
import React from "react";

function Header({category}) {
  return (
    <header className="flex flex-wrap gap-3 w-full font-medium whitespace-nowrap bg-blend-normal text-slate-600">
      <div>Prompts</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eecf9837c9b163efc696ab905e625b8fdddbd09a892510e5431e959c09acb2cb?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca"
        className="object-contain shrink-0 my-auto w-5 bg-blend-normal aspect-square"
        alt=""
      />
      <div className="grow shrink w-[1168px] max-md:max-w-full">{category}</div>
    </header>
  );
}

export default Header;