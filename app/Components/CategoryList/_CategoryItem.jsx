

"use client"

import React from 'react';

function CategoryItem({ name, isActive, onClick }) {
  return (
    <li
      className={`mt-2 w-[50%] ${isActive ? 'text-indigo-600' : 'text-slate-600'} cursor-pointer`}
      onClick={onClick}
    >
      {name}
    </li>
  );
}

export default CategoryItem;