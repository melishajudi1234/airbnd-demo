import React, { useState, useEffect } from "react";
import { Plus, Minus, MapPin, Search } from "lucide-react";
import { useHost } from "@/context/HostContext";

const MapMockup = () => {
  const { location, setLocation } = useHost();
  const [inputValue, setInputValue] = useState(location);
  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps?ll=20.5937,78.9629&z=5&output=embed&iwloc=0");

  useEffect(() => {
    // Show a default map view when no location is selected (no marker will be shown)
    if (!location || location === "India") {
      setMapUrl("https://www.google.com/maps?ll=20.5937,78.9629&z=5&output=embed&iwloc=0");
      return;
    }

    // Update the map only when the global location (searched/selected) changes
    const encodedLocation = encodeURIComponent(location);
    setMapUrl(`https://www.google.com/maps?q=${encodedLocation}&output=embed&z=15&t=m&iwloc=0`);
  }, [location]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // If the user clears the input, clear the global location too
    if (value === "") {
      setLocation("");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setLocation(inputValue.trim());
    }
  };

  return (
    <div className="relative w-full aspect-[16/9] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-sm group">
      {/* Interactive Map Iframe - Always visible */}
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
        title="Location Map"
        className="absolute inset-0 grayscale-[0.2] contrast-[1.1]"
      ></iframe>

      {/* Custom Red Marker Overlay - Only shown when a location is set in context */}
      {location && (

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%] pointer-events-none drop-shadow-2xl animate-bounce-short">
          <div className="relative flex flex-col items-center">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
              <MapPin className="w-5 h-5 text-white" fill="white" />
            </div>
            <div className="w-1 h-2 bg-red-500 -mt-0.5" />
            <div className="w-2 h-2 bg-black/20 rounded-full blur-[2px] mt-1" />
          </div>
        </div>
      )}

      {/* Floating Search Bar */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[500px] z-20">
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-full py-2 pl-6 pr-2 shadow-xl flex items-center gap-3 border border-zinc-100 transition-all focus-within:ring-2 focus-within:ring-zinc-900"
        >
          <MapPin className="w-5 h-5 text-zinc-900 flex-shrink-0" />
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your address"
            className="flex-grow bg-transparent border-none outline-none text-zinc-900 font-medium placeholder:text-zinc-400"
          />
        </form>
      </div>

      {/* Map Controls */}
      <div className="absolute top-24 left-6 flex flex-col gap-2 z-10">
        <button type="button" className="w-10 h-10 bg-white rounded-t-lg flex items-center justify-center border-b border-zinc-200 hover:bg-zinc-50 transition-colors shadow-lg">
          <Plus className="w-5 h-5 text-zinc-600" />
        </button>
        <button type="button" className="w-10 h-10 bg-white rounded-b-lg flex items-center justify-center hover:bg-zinc-50 transition-colors shadow-lg">
          <Minus className="w-5 h-5 text-zinc-600" />
        </button>
      </div>

      <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-3xl" />
    </div>
  );
};

export default MapMockup;
