"use client";

import React from "react";
import StepHeader from "@/components/overview/StepHeader";
import StepNav from "@/components/overview/StepNav";
import { useHost } from "@/context/HostContext";
import {
  Wifi,
  Tv,
  ChefHat,
  WashingMachine,
  Car,
  CircleDollarSign,
  Snowflake,
  Lamp
} from "lucide-react";

const AMENITIES_LIST = [
  { id: "wifi", label: "Wifi", icon: Wifi },
  { id: "tv", label: "TV", icon: Tv },
  { id: "kitchen", label: "Kitchen", icon: ChefHat },
  { id: "washing_machine", label: "Washing machine", icon: WashingMachine },
  { id: "free_parking", label: "Free parking on premises", icon: Car },
  { id: "paid_parking", label: "Paid parking on premises", icon: CircleDollarSign },
  { id: "air_conditioning", label: "Air conditioning", icon: Snowflake },
  { id: "dedicated_workspace", label: "Dedicated workspace", icon: Lamp },
];

const AmenitiesPage = () => {
  const { amenities, setAmenities } = useHost();

  const toggleAmenity = (id: string) => {
    if (amenities.includes(id)) {
      setAmenities(amenities.filter((a) => a !== id));
    } else {
      setAmenities([...amenities, id]);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <StepHeader />

      <main className="flex-grow flex flex-col items-center py-2 px-2">
        <div className="max-w-[850px] w-full mt-4">
          <h1 className="text-3xl font-bold text-zinc-900 mb-1.5 animate-in fade-in slide-in-from-bottom-2 duration-700">
            Tell guests what your place has to offer
          </h1>
          <p className="text-zinc-500 text-md lg:text-lg mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            You can add more amenities after you publish your listing.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-800">
            What about these guest favourites?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            {AMENITIES_LIST.map((item) => {
              const Icon = item.icon;
              const isSelected = amenities.includes(item.id);

              return (
                <button
                  key={item.id}
                  onClick={() => toggleAmenity(item.id)}
                  className={`flex flex-col items-start p-4 rounded-xl border-2 transition-all duration-200 text-left group
                    ${isSelected
                      ? "border-zinc-200 bg-zinc-50"
                      : "border-zinc-100 hover:border-zinc-200 bg-white"
                    }
                  `}
                >
                  <Icon className={`w-6 h-6 mb-1.5 transition-colors ${isSelected ? "text-zinc-700" : "text-zinc-600 group-hover:text-zinc-700"}`} />
                  <span className={`font-semibold text-lg ${isSelected ? "text-zinc-700" : "text-zinc-600 group-hover:text-zinc-700"}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      <StepNav
        backHref="/become-a-host/overview/stand-out"
        nextHref="/become-a-host/overview/photos"
      />
    </div>
  );
};

export default AmenitiesPage;
