"use client";

import React from "react";
import StepHeader from "@/components/overview/StepHeader";
import StepNav from "@/components/overview/StepNav";

const AboutYourPlacePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <StepHeader />

      <main className="flex-grow flex items-center justify-center px-2 py-2">
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column Content */}
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold text-zinc-900">Step 1</span>
            <h1 className="text-2xl lg:text-4xl text-zinc-900 leading-[1.1] mb-2">
              Tell us about your place
            </h1>
            <p className="text-zinc-600 text-md leading-relaxed max-w-[550px]">
              In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.
            </p>
          </div>

          {/* Right Column Illustration */}
          <div className="w-[80%] flex justify-center">
            <img
              src="/images/hotel-images/step1.png"
              alt="Step 1 Illustration"
              className="w-full max-w-[600px] h-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://a0.muscache.com/4ea/air/v2/pictures/da175439-a69a-4c1c-922e-503463a56A3f.jpg?im_w=960';
              }}
            />
          </div>
        </div>
      </main>

      <StepNav
        backHref="/become-a-host/overview"
        nextHref="/become-a-host/overview/structure"
      />
    </div>
  );
};

export default AboutYourPlacePage;
