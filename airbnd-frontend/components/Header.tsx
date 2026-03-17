"use client";

import React from "react";
import { Search, Globe, Menu, Home, Compass, Bell } from "lucide-react";

const BalloonIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="w-5 h-5 fill-current">
    <path d="M16 1c-5.523 0-10 4.477-10 10 0 3.314 1.621 6.25 4.12 8.041L9 24h14l-1.12-4.959C24.379 17.25 26 14.314 26 11c0-5.523-4.477-10-10-10zm0 2c4.418 0 8 3.582 8 8 0 2.21-1.01 4.185-2.618 5.514L20 18H12l-1.382-1.486C9.01 15.185 8 13.21 8 11c0-4.418 3.582-8 8-8zm-2 17h4l0.5 2.5h-5L14 20zm0.5 4.5h3l0.5 2.5h-4L14.5 24.5zM16 4c-3.866 0-7 3.134-7 7 0 1.2.3 2.3.8 3.3l1.2-0.6c-0.4-0.8-0.6-1.7-0.6-2.7 0-3.3 2.7-6 6-6s6 2.7 6 6c0 1-0.2 1.9-0.6 2.7l1.2 0.6c0.5-1 0.8-2.1 0.8-3.3 0-3.866-3.134-7-7-7z"></path>
  </svg>
);

const BellIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="w-5 h-5 fill-current">
    <path d="M26 24v-1.5a1.5 1.5 0 0 0-1.5-1.5H7.5A1.5 1.5 0 0 0 6 22.5V24H4v2h24v-2h-2zM16 4a6 6 0 0 1 6 6v7.35l1.65 1.65H8.35L10 17.35V10a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4v6h8v-6a4 4 0 0 0-4-4zm4 21a4 4 0 1 1-8 0h8zM16 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 font-sans hidden lg:block ${isScrolled ? "py-3 shadow-md border-b border-zinc-200" : "py-4 shadow-sm"
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Top Section */}
        <div className="flex items-center justify-between relative transition-all duration-300">
          {/* Logo */}
          <div className="flex items-center gap-1 text-[#FF385C] flex-shrink-0 transition-transform duration-300">
            <svg width="30" height="32" viewBox="0 0 1007 1080" className="block"><path d="M949.278 666.715C875.957 506.859 795.615 344.664 713.713 184.809C698.893 155.177 670.813 98.2527 645.852 67.8412C609.971 24.1733 556.93 0.779785 503.109 0.779785C449.288 0.779785 396.247 24.1733 360.366 67.8412C335.406 98.2527 307.325 155.177 292.505 184.809C210.603 344.664 130.262 506.859 56.9404 666.715C47.5802 687.769 24.9598 737.675 16.3796 760.289C6.23941 787.581 0.779297 817.213 0.779297 846.845C0.779297 975.509 101.401 1079.22 235.564 1079.22C346.326 1079.22 434.468 1008.26 503.109 934.18C571.751 1008.26 659.892 1079.22 770.655 1079.22C904.817 1079.22 1006.22 975.509 1006.22 846.845C1006.22 817.213 999.979 787.581 989.839 760.289C981.259 737.675 958.638 687.769 949.278 666.715ZM503.109 810.195C447.728 738.455 396.247 649.56 396.247 577.819C396.247 506.079 446.948 470.209 503.109 470.209C559.27 470.209 610.751 508.419 610.751 577.819C610.751 647.22 558.49 738.455 503.109 810.195ZM770.655 998.902C688.628 998.902 618.271 941.557 555.955 872.656C620.205 792.541 691.093 679.121 691.093 577.819C691.093 458.513 598.271 389.892 503.109 389.892C407.947 389.892 315.906 458.513 315.906 577.819C315.906 679.098 386.294 792.478 450.318 872.593C387.995 941.526 317.614 998.902 235.564 998.902C146.642 998.902 81.1209 931.061 81.1209 846.845C81.1209 826.57 84.241 807.856 91.2611 788.361C98.2812 770.426 120.902 720.52 130.262 701.025C203.583 541.17 282.365 380.534 364.267 220.679C379.087 191.047 404.047 141.921 422.768 119.307C443.048 94.3538 471.129 81.0975 503.109 81.0975C535.09 81.0975 563.17 94.3538 583.451 119.307C602.171 141.921 627.132 191.047 641.952 220.679C723.854 380.534 802.635 541.17 875.957 701.025C885.317 720.52 907.937 770.426 914.957 788.361C921.978 807.856 925.878 826.57 925.878 846.845C925.878 931.061 859.576 998.902 770.655 998.902Z" fill="currentcolor"></path></svg>
            <span className="text-xl font-bold tracking-tight">airbnb</span>
          </div>

          {/* Large Navigation Tabs - Visible only when NOT scrolled */}
          <div className={`absolute left-1/2 -translate-x-1/2 flex-1 flex justify-center transition-all duration-300 ${isScrolled ? "opacity-0 scale-95 pointer-events-none -translate-y-4" : "opacity-100 scale-100 pointer-events-auto translate-y-0"
            }`}>
            <nav className="flex items-center justify-center w-full">
              <div className="flex items-end justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                <div className="flex flex-col items-center gap-1 group cursor-pointer pb-2 text-black border-b-2 border-black">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    <span className="text-sm font-semibold">Homes</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1 group cursor-pointer pb-2 text-zinc-500 hover:text-zinc-800 transition-colors">
                  <div className="flex items-center gap-2">
                    <BalloonIcon />
                    <span className="text-sm font-medium">Experiences</span>
                    <span className="bg-zinc-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">NEW</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1 group cursor-pointer pb-2 text-zinc-500 hover:text-zinc-800 transition-colors">
                  <div className="flex items-center gap-2">
                    <BellIcon />
                    <span className="text-sm font-medium">Services</span>
                    <span className="bg-zinc-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">NEW</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Compact Search Bar - Visible ONLY when scrolled */}
          <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${isScrolled ? "opacity-100 scale-100 pointer-events-auto translate-y-0" : "opacity-0 scale-110 pointer-events-none translate-y-4"
            }`}>
            <div className="flex items-center bg-white border border-zinc-200 rounded-full py-1.5 pl-4 pr-1.5 shadow-sm hover:shadow-md transition-shadow cursor-pointer min-w-[300px]">
              <div className="flex items-center gap-3 flex-1 px-2">
                <Home className="w-4 h-4 text-[#FF385C]" />
                <span className="text-sm font-semibold text-zinc-900 border-r border-zinc-200 pr-4">Anywhere</span>
                <span className="text-sm font-semibold text-zinc-900 border-r border-zinc-200 pr-4">Anytime</span>
                <span className="text-sm text-zinc-500 pr-2">Add guests</span>
              </div>
              <div className="bg-[#FF385C] p-2 rounded-full text-white ml-2">
                <Search className="w-3 h-3 stroke-[4px]" />
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-3 transition-all duration-300 relative">
            <div className={`text-sm font-semibold text-zinc-900 px-4 py-3 rounded-full hover:bg-zinc-100 cursor-pointer transition-opacity duration-300 ${isScrolled ? "opacity-0 invisible pointer-events-none w-0 truncate" : "opacity-100 visible"}`}>
              Become a host
            </div>

            <div className="p-3 hover:bg-zinc-100 rounded-full cursor-pointer transition-colors">
              <Globe className="w-4 h-4 text-zinc-900" />
            </div>

            {/* Refined menu Button */}
            <div
              ref={menuRef}
              className="relative"
            >
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-3 p-1.5 pl-3 border border-zinc-200 rounded-full cursor-pointer hover:shadow-md transition-shadow bg-white"
              >
                <Menu className="w-4 h-4 text-zinc-900" />
              </div>

              {/* Static Dropdown UI (As seen in the feedback) */}
              {isMenuOpen && (
                <div className="absolute top-12 right-0 w-[240px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.12)] rounded-xl py-2 z-[60] border border-zinc-100 animate-in fade-in zoom-in duration-200">
                  <div className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-50 cursor-pointer text-zinc-700">
                    <div className="w-5 h-5 flex items-center justify-center">?</div>
                    <span className="text-sm font-medium">Help Centre</span>
                  </div>
                  <div className="h-[1px] bg-zinc-100 my-1 mx-4" />
                  <div className="px-4 py-3 hover:bg-zinc-50 cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm font-bold text-zinc-900">Become a host</div>
                        <div className="text-[12px] text-zinc-500 max-w-[130px] leading-tight mt-1">
                          It's easy to start hosting and earn extra income.
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-zinc-100 rounded-md overflow-hidden flex items-center justify-center text-xl">🏠</div>
                    </div>
                  </div>
                  <div className="h-[1px] bg-zinc-100 my-1 mx-4" />
                  <div className="px-4 py-3 hover:bg-zinc-50 cursor-pointer text-sm text-zinc-700">Refer a host</div>
                  <div className="px-4 py-3 hover:bg-zinc-50 cursor-pointer text-sm text-zinc-700">Find a co-host</div>
                  <div className="h-[1px] bg-zinc-100 my-1 mx-4" />
                  <div className="px-4 py-3 hover:bg-zinc-50 cursor-pointer text-sm font-bold text-zinc-900">Log in or sign up</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Large Search Bar Section - Expands when NOT scrolled */}
        <div className={`flex justify-center transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 opacity-0 -mt-2" : "max-h-[100px] opacity-100 mt-2"
          }`}>
          <div className="flex items-center bg-white border border-zinc-200 rounded-full shadow-lg hover:shadow-xl transition-shadow w-full max-w-[850px] py-1.5 pl-6 pr-2 mb-2">
            {/* Where */}
            <div className="flex-1 flex flex-col justify-center py-2 hover:bg-zinc-100 rounded-full pl-6 -ml-6 cursor-pointer">
              <span className="text-xs font-bold text-zinc-900">Where</span>
              <span className="text-sm text-zinc-400">Search destinations</span>
            </div>

            <div className="w-[1px] h-8 bg-zinc-200 mx-2"></div>

            {/* When */}
            <div className="flex-1 flex flex-col justify-center py-2 hover:bg-zinc-100 rounded-full pl-6 cursor-pointer">
              <span className="text-xs font-bold text-zinc-900">When</span>
              <span className="text-sm text-zinc-400">Add dates</span>
            </div>
            <div className="w-[1px] h-8 bg-zinc-200 mx-2"></div>

            {/* Who */}
            <div className="flex-[1.2] flex items-center justify-between pl-6 hover:bg-zinc-100 rounded-full cursor-pointer group overflow-hidden">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-zinc-900">Who</span>
                <span className="text-sm text-zinc-400">Add guests</span>
              </div>
              <div className="bg-[#FF385C] p-3.5 rounded-full text-white ml-2">
                <Search className="w-5 h-5 stroke-[3px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
