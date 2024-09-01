
"use client"
import { useState } from 'react';

function Card({title,description,buttonText,onClick}) {
  return (
    <div className="bg-white rounded-3xl hover:shadow-2xl border border-gray-200 p-6 w-[20rem] text-ellipsis overflow-hidden h-80 " onClick={onClick}>
      <div className="flex items-center mb-4">
        {/* <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/298/man-technologist_1f468-1f3fb-200d-1f4bb.png"
          alt="User Icon"
          className="w-10 h-10"
        /> */}
      </div>
      <h2 className="text-gray-700 text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-sm  text-ellipsis overflow-hidden h-32">{description.substring(0, 150)}...</p>
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{buttonText}</button>
    </div>
  );
}
 
export default Card;