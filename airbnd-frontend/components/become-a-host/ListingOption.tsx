"use client";

import React from "react";
import { ChevronRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface ListingOptionProps {
  icon: LucideIcon;
  text: string;
  hasBorder?: boolean;
  href?: string;
}

const ListingOption = ({ icon: Icon, text, hasBorder = true, href = "#" }: ListingOptionProps) => {
  return (
    <Link
      href={href}
      className={`p-5 flex items-center justify-between hover:bg-zinc-50 transition-all cursor-pointer border-b border-zinc-200 block`}
    >
      <div className="flex items-center gap-4">
        <Icon className="w-6 h-6 text-zinc-900" />
        <span className="text-zinc-900 font-medium">{text}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-zinc-600" />
    </Link>
  );
};

export default ListingOption;
