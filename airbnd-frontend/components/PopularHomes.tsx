"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Heart } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  rating: string;
  isGuestFavourite?: boolean;
}

const PropertyCard = ({ image, title, price, rating, isGuestFavourite }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex-none w-[200px] group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-2xl mb-3">
        {/* Main Image */}
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />

        {/* Guest Favourite Badge */}
        {isGuestFavourite && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            <span className="text-[12px] font-bold text-zinc-900">Guest favourite</span>
          </div>
        )}

        {/* Heart Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 transition-transform active:scale-90"
        >
          <Heart
            className={`w-6 h-6 transition-colors duration-200 ${isLiked ? "fill-[#FF385C] stroke-[#FF385C]" : "stroke-white fill-black/20"
              }`}
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Details */}
      <div className="flex justify-between items-start transition-colors group-hover:bg-zinc-50/50 p-1 rounded-lg">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-zinc-900 line-clamp-1">{title}</h3>
          <p className="text-zinc-500 text-sm">{price}</p>
        </div>
        <div className="flex items-center gap-1 font-medium">
          <Star className="w-3 h-3 fill-zinc-900 stroke-zinc-900" />
          <span className="text-sm">{rating}</span>
        </div>
      </div>
    </div>
  );
};

const SeeAllCard = () => {
  return (
    <div className="flex-none w-[280px] h-full group cursor-pointer snap-start pr-8">
      <div className="relative aspect-square bg-white rounded-2xl border border-zinc-200 shadow-sm flex flex-col items-center justify-center gap-10 hover:shadow-md transition-shadow">
        {/* Image Stack */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Center Image */}
          <div className="absolute z-20 w-28 h-28 border-4 border-white rounded-2xl overflow-hidden shadow-lg transform -translate-y-2">
            <img
              src="/images/hotel_images/5star/ITC GRAND CHOLA, A LUXURY .avif"
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Left Image */}
          <div className="absolute z-10 w-24 h-24 border-2 border-white rounded-2xl overflow-hidden shadow-md transform -translate-x-12 translate-y-4 -rotate-[15deg] opacity-90">
            <img
              src="/images/hotel_images/5star/FEATHERS - A RADHA HOTEL.jpg"
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Image */}
          <div className="absolute z-10 w-24 h-24 border-2 border-white rounded-2xl overflow-hidden shadow-md transform translate-x-12 translate-y-4 rotate-[15deg] opacity-90">
            <img
              src="/images/hotel_images/5star/RADISSON BLU HOTEL & SUITES GRT .avif"
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <span className="text-lg font-bold text-zinc-900 group-hover:underline">See all</span>
      </div>
    </div>
  );
};

const PopularHomes = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  React.useEffect(() => {
    checkScroll();
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const properties = [
    {
      image: "/images/hotel_images/5star/ITC GRAND CHOLA, A LUXURY .avif",
      title: "Villa in Bengaluru",
      price: "₹12,550 for 2 nights",
      rating: "5.0",
      isGuestFavourite: true,
    },
    {
      image: "/images/hotel_images/5star/FEATHERS - A RADHA HOTEL.jpg",
      title: "Home in Bengaluru",
      price: "₹11,880 for 2 nights",
      rating: "4.98",
      isGuestFavourite: true,
    },
    {
      image: "/images/hotel_images/5star/RADISSON BLU HOTEL & SUITES GRT .avif",
      title: "Flat in Bengaluru",
      price: "₹22,760 for 2 nights",
      rating: "5.0",
    },
    {
      image: "/images/hotel_images/5star/RAMADA PLAZA BY WYNDHAM.avif",
      title: "Flat in Bengaluru",
      price: "₹8,230 for 2 nights",
      rating: "5.0",
      isGuestFavourite: true,
    },
    {
      image: "/images/hotel_images/5star/LE ROYAL MERIDIEN .jpeg",
      title: "Le Royal Méridien",
      price: "₹5,704 for 2 nights",
      rating: "5.0",
    },
    {
      image: "/images/hotel_images/5star/TRIDENT HOTELS, MEENAMBAKKAM .avif",
      title: "Flat in Bengaluru",
      price: "₹7,760 for 2 nights",
      rating: "4.87",
      isGuestFavourite: true,
    },
  ];

  return (
    <section className="py-12 bg-white font-sans overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 group cursor-pointer">
            <h2 className="text-2xl font-bold text-zinc-900">Popular homes in Bengaluru</h2>
            <ChevronRight className="w-6 h-6 transform translate-y-0.5 group-hover:translate-x-1 transition-transform" />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 border rounded-full transition-all bg-white ${canScrollLeft
                ? "border-zinc-200 hover:bg-zinc-100 hover:shadow-md cursor-pointer opacity-100"
                : "border-zinc-200 cursor-default opacity-50"
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 border rounded-full transition-all bg-white ${canScrollRight
                ? "border-zinc-200 hover:bg-zinc-100 hover:shadow-md cursor-pointer opacity-100"
                : "border-zinc-200 cursor-default opacity-50"
                }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {properties.map((prop, index) => (
            <div key={index} className="snap-start first:pl-0">
              <PropertyCard {...prop} />
            </div>
          ))}
          <SeeAllCard />
        </div>
      </div>
    </section>
  );
};

export default PopularHomes;
