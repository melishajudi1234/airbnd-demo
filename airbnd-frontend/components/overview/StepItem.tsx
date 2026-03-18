"use client";

import React from "react";

interface StepItemProps {
  number: number;
  title: string;
  description: string;
  imagePath: string;
}

const StepItem = ({ number, title, description, imagePath }: StepItemProps) => {
  return (
    <div className="py-4 flex items-center justify-between gap-8 border-t border-zinc-200 first:border-t-0">
      <div className="flex gap-6 items-start">
        <span className="text-xl font-bold text-zinc-900 mt-0.5">{number}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
          <p className="text-zinc-500 text-md leading-snug max-w-[400px]">
            {description}
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 w-[120px] h-[120px]">
        <img
          src={imagePath}
          alt={title}
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback if images failed to copy or generate properly
            (e.target as HTMLImageElement).src = 'https://a0.muscache.com/4ea/air/v2/pictures/da175439-a69a-4c1c-922e-503463a56A3f.jpg?im_w=240';
          }}
        />
      </div>
    </div>
  );
};

export default StepItem;
