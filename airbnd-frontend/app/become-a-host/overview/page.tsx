"use client";

import React from "react";
import Link from "next/link";
import OverviewHeader from "@/components/overview/OverviewHeader";
import StepItem from "@/components/overview/StepItem";

const OverviewPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <OverviewHeader />

      <main className="flex-grow flex items-center justify-center px-2 py-2">
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Column */}
          <div>
            <h1 className="text-2xl lg:text-4xl text-zinc-900 leading-[1.1]">
              It’s easy to get started on Airbnb
            </h1>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <StepItem
              number={1}
              title="Tell us about your place"
              description="Share some basic info, such as where it is and how many guests can stay."
              imagePath="/images/hotel-images/step1.png"
            />
            <StepItem
              number={2}
              title="Make it stand out"
              description="Add 5 or more photos plus a title and description – we’ll help you out."
              imagePath="/images/hotel-images/step2.png"
            />
            <StepItem
              number={3}
              title="Finish up and publish"
              description="Choose a starting price, verify a few details, then publish your listing."
              imagePath="/images/hotel-images/step3.png"
            />
          </div>
        </div>
      </main>

      {/* Bottom Sticky Section */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-zinc-200 p-4">
        <div className="max-w-[1200px] mx-auto flex justify-end">
          <Link
            href="/become-a-host/overview/about-your-place"
            className="bg-[#FF385C] hover:bg-[#E31C5F] text-white font-bold py-1.5 px-4 rounded-lg transition-colors text-lg"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
