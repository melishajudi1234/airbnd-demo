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
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-2 shadow-sm border border-zinc-100">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />

        {isGuestFavourite && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-zinc-100">
            <span className="text-[13px] font-bold text-zinc-900 tracking-tight">Guest favourite</span>
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute top-4 right-4 p-1.5 rounded-full transition-transform duration-300 hover:scale-[1.15]"
        >
          <Heart
            className="w-5 h-5 stroke-white fill-transparent"
            strokeWidth={2.5}
          />
        </button>
      </div>

      <div className="px-1">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-zinc-700 text-sm leading-tight line-clamp-1">
            {title}
          </h3>
        </div>

        <div className="flex flex-row gap-0.5">
          <p className="text-zinc-600 text-sm font-medium">{price} .</p>
          <div className="flex items-center gap-1.5 font-bold text-zinc-600 text-sm font-medium">
            <Star className="w-2.5 h-2.5 fill-zinc-600" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
