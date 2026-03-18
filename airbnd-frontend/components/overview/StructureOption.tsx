"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface StructureOptionProps {
  icon: LucideIcon;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const StructureOption = ({ icon: Icon, label, selected = false, onClick }: StructureOptionProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-6 flex flex-col gap-2 border-2 rounded-xl transition-all text-left h-full ${selected
        ? "border-zinc-200-zinc-50"
        : "border-zinc-100 hover:border-zinc-200"
        }`}
    >
      <Icon className="w-8 h-8 text-zinc-600" />
      <span className="text-zinc-600 leading-snug">{label}</span>
    </button>
  );
};

export default StructureOption;
