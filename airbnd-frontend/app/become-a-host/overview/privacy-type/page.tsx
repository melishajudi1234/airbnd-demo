"use client";

import React from "react";
import StepHeader from "@/components/overview/StepHeader";
import StepNav from "@/components/overview/StepNav";
import PrivacyOption from "@/components/overview/PrivacyOption";
import { useHost } from "@/context/HostContext";
import { Home, DoorOpen, Users } from "lucide-react";

const PrivacyTypePage = () => {
  const { privacyType, setPrivacyType } = useHost();

  const options = [
    {
      id: "An entire place",
      title: "An entire place",
      description: "Guests have the whole place to themselves.",
      icon: Home,
    },
    {
      id: "A room",
      title: "A room",
      description: "Guests have their own room in a home, plus access to shared spaces.",
      icon: DoorOpen,
    },
    {
      id: "A shared room in a hostel",
      title: "A shared room in a hostel",
      description: "Guests sleep in a shared room in a professionally managed hostel with staff on-site 24/7.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <StepHeader />

      <main className="flex-grow flex flex-col items-center py-2 px-2">
        <div className="max-w-[650px] w-full mt-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-8">
            What type of place will guests have?
          </h1>

          <div className="flex flex-col gap-4">
            {options.map((option) => (
              <PrivacyOption
                key={option.id}
                title={option.title}
                description={option.description}
                icon={option.icon}
                selected={privacyType === option.id}
                onClick={() => setPrivacyType(option.id)}
              />
            ))}
          </div>
        </div>
      </main>

      <StepNav
        backHref="/become-a-host/overview/structure"
        nextHref="/become-a-host/overview/location"
      />
    </div>
  );
};

export default PrivacyTypePage;
