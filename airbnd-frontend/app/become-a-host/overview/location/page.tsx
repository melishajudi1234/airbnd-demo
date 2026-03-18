"use client";

import React from "react";
import StepHeader from "@/components/overview/StepHeader";
import StepNav from "@/components/overview/StepNav";
import MapMockup from "@/components/overview/MapMockup";

const LocationPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <StepHeader />

      <main className="flex-grow flex flex-col items-center py-2 px-2">
        <div className="max-w-[850px] w-full mt-4 flex flex-col items-center text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-3">
            Is the pin in the right spot?
          </h1>
          <p className="text-zinc-500 text-md mb-10 max-w-[600px]">
            Your address is only shared with guests after they've made a reservation.
          </p>

          <MapMockup />
        </div>
      </main>

      <StepNav
        backHref="/become-a-host/overview/privacy-type"
        nextHref="/become-a-host/overview/floor-plan"
      />
    </div>
  );
};

export default LocationPage;
