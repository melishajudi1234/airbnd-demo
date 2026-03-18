"use client";

import React from "react";
import { Home } from "lucide-react";

const ListingCard = () => {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 hover:bg-zinc-50 transition-all cursor-pointer flex items-center gap-4">
      <div className="bg-zinc-100 p-3 rounded-md">
        <Home className="w-5 h-5 text-zinc-900" />
      </div>
      <span className="text-zinc-900 font-medium">Your House listing</span>
    </div>
  );
};

export default ListingCard;
