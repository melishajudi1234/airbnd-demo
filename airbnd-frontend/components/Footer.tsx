"use client";

import React from "react";
import { Globe, Facebook, Twitter, Instagram, ChevronDown } from "lucide-react";

const Footer = () => {
  const destinations = [
    { city: "Pocono Mountains", type: "Apartment rentals" },
    { city: "Pittsburgh", type: "House rentals" },
    { city: "Portland", type: "House rentals" },
    { city: "Minneapolis", type: "Apartment rentals" },
    { city: "Honolulu", type: "Apartment rentals" },
    { city: "Amsterdam", type: "Monthly rentals" },
    { city: "Athens", type: "Monthly Rentals" },
    { city: "Oahu", type: "Holiday rentals" },
    { city: "Cincinnati", type: "Apartment rentals" },
    { city: "Charlotte", type: "Apartment rentals" },
    { city: "Wilmington", type: "Monthly Rentals" },
    { city: "Key West", type: "House rentals" },
    { city: "Barcelona", type: "House rentals" },
    { city: "Osaka", type: "Monthly Rentals" },
    { city: "Sarasota", type: "House rentals" },
    { city: "Branson", type: "Holiday rentals" },
    { city: "Tokyo", type: "Monthly Rentals" },
  ];

  const categories = [
    "Popular",
    "Arts & culture",
    "Beach",
    "Mountains",
    "Outdoors",
    "Things to do",
  ];

  return (
    <footer className="bg-[#F7F7F7] border-t border-zinc-200 pt-12 pb-8 px-8 lg:px-20 font-sans">
      <div className="max-w-[1280px] mx-auto">
        {/* SECTION 1 — Inspiration for future getaways */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">
            Inspiration for future getaways
          </h2>
          
          {/* Category Tabs */}
          <div className="flex items-center gap-8 border-b border-zinc-200 mb-8 overflow-x-auto">
            {categories.map((category, index) => (
              <div
                key={category}
                className={`pb-4 text-sm font-semibold cursor-default whitespace-nowrap ${
                  index === 0
                    ? "text-zinc-900 border-b-2 border-zinc-900"
                    : "text-zinc-500 hover:text-zinc-800 transition-colors"
                }`}
              >
                {category}
              </div>
            ))}
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
            {destinations.map((dest, index) => (
              <div key={index} className="flex flex-col cursor-default">
                <span className="text-sm font-bold text-zinc-900">{dest.city}</span>
                <span className="text-sm text-zinc-500">{dest.type}</span>
              </div>
            ))}
            <div className="flex items-center gap-1 text-sm font-bold text-zinc-900 cursor-default hover:underline">
              Show more <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </section>

        <hr className="border-zinc-200 mb-12" />

        {/* SECTION 2 — Main footer links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1: Support */}
          <div>
            <h3 className="text-sm font-bold text-zinc-900 mb-4">Support</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Help Centre",
                "Get help with a safety issue",
                "AirCover",
                "Anti-discrimination",
                "Disability support",
                "Cancellation options",
                "Report neighbourhood concern",
              ].map((link) => (
                <li key={link} className="text-sm text-zinc-700 hover:underline cursor-default">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Hosting */}
          <div>
            <h3 className="text-sm font-bold text-zinc-900 mb-4">Hosting</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Airbnb your home",
                "Airbnb your experience",
                "Airbnb your service",
                "AirCover for Hosts",
                "Hosting resources",
                "Community forum",
                "Hosting responsibly",
                "Join a free hosting class",
                "Find a co-host",
                "Refer a host",
              ].map((link) => (
                <li key={link} className="text-sm text-zinc-700 hover:underline cursor-default">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Airbnb */}
          <div>
            <h3 className="text-sm font-bold text-zinc-900 mb-4">Airbnb</h3>
            <ul className="flex flex-col gap-3">
              {[
                "2025 Summer Release",
                "Newsroom",
                "Careers",
                "Investors",
                "Airbnb.org emergency stays",
              ].map((link) => (
                <li key={link} className="text-sm text-zinc-700 hover:underline cursor-default">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-zinc-200 mb-8" />

        {/* SECTION 3 — Bottom bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-2">
          {/* Left side text */}
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 text-sm text-zinc-900">
            <span>© 2026 Airbnb, Inc.</span>
            <span className="hidden lg:inline">·</span>
            <span className="hover:underline cursor-default">Privacy</span>
            <span className="hidden lg:inline">·</span>
            <span className="hover:underline cursor-default">Terms</span>
            <span className="hidden lg:inline">·</span>
            <span className="hover:underline cursor-default">Company details</span>
          </div>

          {/* Right side settings & social */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-6 text-sm font-bold text-zinc-900">
              <div className="flex items-center gap-2 hover:underline cursor-default">
                <Globe className="w-4 h-4" />
                <span>English (IN)</span>
              </div>
              <div className="hover:underline cursor-default">
                <span>₹ INR</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Facebook className="w-5 h-5 text-zinc-900 hover:text-zinc-600 transition-colors cursor-default" />
              <Twitter className="w-5 h-5 text-zinc-900 hover:text-zinc-600 transition-colors cursor-default fill-current" />
              <Instagram className="w-5 h-5 text-zinc-900 hover:text-zinc-600 transition-colors cursor-default" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
