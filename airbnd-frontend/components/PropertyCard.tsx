"use client";

import React from "react";
import { Star, Heart } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { image, title, price, rating, isGuestFavourite } = property;

  return (
    <div className="flex-none w-[280px] cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 shadow-sm border border-zinc-100">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
        
        {isGuestFavourite && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md border border-zinc-100">
            <span className="text-[13px] font-bold text-zinc-900 tracking-tight">Guest favourite</span>
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute top-4 right-4 p-2.5 bg-black/10 backdrop-blur-sm rounded-full transition-transform duration-300 hover:scale-[1.15]"
        >
          <Heart
            className="w-5 h-5 stroke-white fill-transparent"
            strokeWidth={2.5}
          />
        </button>
      </div>

      <div className="px-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-zinc-900 text-lg leading-tight line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 font-bold text-zinc-900 bg-zinc-50 px-2 py-0.5 rounded-lg border border-zinc-100">
            <Star className="w-3.5 h-3.5 fill-zinc-900" />
            <span className="text-[15px]">{rating}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-0.5">
          <p className="text-zinc-600 text-base font-medium">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
