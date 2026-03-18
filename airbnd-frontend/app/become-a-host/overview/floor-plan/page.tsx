"use client";

import React, { useEffect } from "react";
import StepHeader from "@/components/overview/StepHeader";
import StepNav from "@/components/overview/StepNav";
import Counter from "@/components/overview/Counter";
import { useCounter } from "@/hooks/useCounter";
import { useHost } from "@/context/HostContext";

const FloorPlanPage = () => {
  const { floorPlan, setFloorPlan } = useHost();

  const guests = useCounter(floorPlan.guests, 1, 16);
  const bedrooms = useCounter(floorPlan.bedrooms, 0, 50);
  const beds = useCounter(floorPlan.beds, 1, 16);
  const bathrooms = useCounter(floorPlan.bathrooms, 1, 16);

  // Sync with context on change
  useEffect(() => {
    setFloorPlan({
      guests: guests.count,
      bedrooms: bedrooms.count,
      beds: beds.count,
      bathrooms: bathrooms.count,
    });
  }, [guests.count, bedrooms.count, beds.count, bathrooms.count, setFloorPlan]);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <StepHeader />

      <main className="flex-grow flex flex-col items-center py-2 px-2">
        <div className="max-w-[630px] w-full mt-4 flex flex-col items-start px-6 lg:px-0">
          <h1 className="text-3xl font-bold text-zinc-900 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-700">
            Share some basics about your place
          </h1>
          <p className="text-zinc-500 text-md lg:text-lg mb-12 animate-in fade-in slide-in-from-bottom-3 duration-700">
            You'll add more details later, such as bed types.
          </p>

          <div className="w-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Counter
              label="Guests"
              value={guests.count}
              onIncrease={guests.increment}
              onDecrease={guests.decrement}
              minValue={1}
            />
            <Counter
              label="Bedrooms"
              value={bedrooms.count}
              onIncrease={bedrooms.increment}
              onDecrease={bedrooms.decrement}
            />
            <Counter
              label="Beds"
              value={beds.count}
              onIncrease={beds.increment}
              onDecrease={beds.decrement}
              minValue={1}
            />
            <Counter
              label="Bathrooms"
              value={bathrooms.count}
              onIncrease={bathrooms.increment}
              onDecrease={bathrooms.decrement}
              minValue={1}
            />
          </div>
        </div>
      </main>

      <StepNav
        backHref="/become-a-host/overview/location"
        nextHref="/become-a-host/overview/stand-out"
      />
    </div>
  );
};

export default FloorPlanPage;
