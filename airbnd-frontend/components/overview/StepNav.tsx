"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface StepNavProps {
  backHref: string;
  nextHref: string;
}

const StepNav = ({ backHref, nextHref }: StepNavProps) => {
  const router = useRouter();

  return (
    <footer className="sticky bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 py-4 px-12">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link
          href={backHref}
          className="text-zinc-900 font-semibold hover:text-zinc-600 transition-colors"
        >
          Back
        </Link>
        <button
          onClick={() => router.push(nextHref)}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          Next
        </button>
      </div>
    </footer>
  );
};

export default StepNav;
