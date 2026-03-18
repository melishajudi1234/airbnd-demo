"use client";

import React from "react";
import HostHeader from "@/components/become-a-host/HostHeader";
import ListingCard from "@/components/become-a-host/ListingCard";
import ListingOption from "@/components/become-a-host/ListingOption";
import { Home, Copy, Plus } from "lucide-react";

const BecomeAHostPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <HostHeader />

      <main className="max-w-[700px] mx-auto px-6 py-12">
        {/* Active Listing Section */}
        <div className="space-y-4 mb-10">
          <ListingCard />
          <div className="flex justify-start mt-6">
            <button className="text-sm font-semibold text-zinc-900 underline hover:text-zinc-600 transition-colors">
              Show all
            </button>
          </div>
        </div>

        {/* Start New Listing Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900">Start a new listing</h2>

          <div className="bg-white rounded-xl overflow-hidden">
            <ListingOption
              icon={Plus}
              text="Create a new listing"
              href="/become-a-host/overview"
            />
            <ListingOption
              icon={Copy}
              text="Create from an existing listing"
              hasBorder={false}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BecomeAHostPage;
