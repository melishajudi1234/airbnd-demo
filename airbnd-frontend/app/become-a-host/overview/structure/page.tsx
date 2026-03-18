"use client";

import React from "react";
import StepHeader from "@/components/overview/StepHeader";
import StepNav from "@/components/overview/StepNav";
import StructureOption from "@/components/overview/StructureOption";
import { useHost } from "@/context/HostContext";
import {
  Home,
  Building2,
  Warehouse,
  Coffee,
  Sailboat,
  Caravan,
  Building,
  Castle,
  Tent,
  Palmtree,
  Wind
} from "lucide-react";

const propertyTypes = [
  { icon: Home, label: "House" },
  { icon: Building2, label: "Flat/apartment" },
  { icon: Warehouse, label: "Barn" },
  { icon: Coffee, label: "Bed & breakfast" },
  { icon: Sailboat, label: "Boat" },
  { icon: Caravan, label: "Campervan" },
  { icon: Building, label: "Casa particular" },
  { icon: Castle, label: "Castle" },
  { icon: Tent, label: "Yurt" },
  { icon: Wind, label: "Windmill" },
  { icon: Palmtree, label: "Tropical" },
];

const StructurePage = () => {
  const { structure: selectedType, setStructure: setSelectedType } = useHost();

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <StepHeader />

      <main className="flex-grow flex flex-col items-center py-2 px-2">
        <div className="max-w-[650px] w-full">
          <h1 className="text-3xl font-bold text-zinc-900 mb-8 text-center sm:text-left">
            Which of these best describes your place?
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {propertyTypes.map((type) => (
              <StructureOption
                key={type.label}
                icon={type.icon}
                label={type.label}
                selected={selectedType === type.label}
                onClick={() => setSelectedType(type.label)}
              />
            ))}
          </div>
        </div>
      </main>

      <StepNav
        backHref="/become-a-host/overview/about-your-place"
        nextHref="/become-a-host/overview/privacy-type"
      />
    </div>
  );
};

export default StructurePage;
