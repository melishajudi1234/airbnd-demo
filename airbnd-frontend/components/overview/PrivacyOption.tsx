"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface PrivacyOptionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  selected?: boolean;
  onClick?: () => void;
}

const PrivacyOption = ({ title, description, icon: Icon, selected = false, onClick }: PrivacyOptionProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 flex items-center justify-between border-2 rounded-xl transition-all text-left ${selected
        ? "border-black bg-zinc-50 shadow-sm"
        : "border-zinc-200 hover:border-black"
        }`}
    >
      <div className="flex flex-col gap-1 max-w-[80%]">
        <h3 className="font-semibold text-zinc-900 text-lg">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      </div>
      <Icon className="w-8 h-8 text-zinc-600" />
    </button>
  );
};

export default PrivacyOption;
