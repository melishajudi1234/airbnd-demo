"use client";

import React from "react";
import Image from "next/image";
import StepHeader from "@/components/overview/StepHeader";
import StepNav from "@/components/overview/StepNav";

const StandOutPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <StepHeader />

      <main className="flex-grow flex items-center justify-center py-2 px-2 lg:px-16">
        <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start max-w-[500px]">
            <span className="text-zinc-900 font-semibold mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
              Step 2
            </span>
            <h1 className="text-3xl font-bold text-zinc-900 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
              Make your place stand out
            </h1>
            <p className="text-zinc-500 text-md lg:text-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
              In this step, you'll add some of the amenities your place offers, plus 5 or more photos. Then you'll create a title and description.
            </p>
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] w-[90%] animate-in fade-in slide-in-from-right-4 duration-1000">
            <Image
              src="/images/stand_out_illustration.png"
              alt="Stand Out Illustration"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </main>

      <StepNav
        backHref="/become-a-host/overview/floor-plan"
        nextHref="/become-a-host/overview/amenities"
      />
    </div>
  );
};

export default StandOutPage;
