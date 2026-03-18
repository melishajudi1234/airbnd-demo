"use client";

import React from "react";
import Image from "next/image";
import StepHeader from "@/components/overview/StepHeader";
import StepNav from "@/components/overview/StepNav";

const PhotosPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <StepHeader />

      <main className="flex-grow flex flex-col items-center py-2 px-6 lg:px-24">
        <div className="max-w-[700px] w-full mt-4">
          <h1 className="text-3xl font-bold text-zinc-900 mb-1.5 animate-in fade-in slide-in-from-bottom-2 duration-700">
            Add some photos of your house
          </h1>
          <p className="text-zinc-500 text-md lg:text-lg mb-12 animate-in fade-in slide-in-from-bottom-3 duration-700">
            You'll need 5 photos to get started. You can add more or make changes later.
          </p>

          <div className="w-full aspect-[16/10] border-2 border-dotted border-zinc-300 rounded-xl flex flex-col items-center justify-center p-12 bg-zinc-50/30 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="relative w-32 h-32 mb-8">
              <Image
                src="/images/camera_illustration.png"
                alt="Camera Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>

            <button className="px-4 py-1.5 rounded-lg border border-zinc-700 text-zinc-700 font-semibold hover:bg-zinc-100 transition-colors duration-200">
              Add photos
            </button>
          </div>
        </div>
      </main>

      <StepNav
        backHref="/become-a-host/overview/amenities"
        nextHref="/become-a-host/overview/photos" // Temporary self-link
      />
    </div>
  );
};

export default PhotosPage;
