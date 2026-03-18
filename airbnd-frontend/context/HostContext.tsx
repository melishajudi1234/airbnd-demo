"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface HostContextType {
  structure: string | null;
  privacyType: string | null;
  location: string;
  floorPlan: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  amenities: string[];
  photos: string[];
  setStructure: (structure: string | null) => void;
  setPrivacyType: (privacyType: string | null) => void;
  setLocation: (location: string) => void;
  setFloorPlan: (floorPlan: any) => void;
  setAmenities: (amenities: string[]) => void;
  setPhotos: (photos: string[]) => void;
}

const HostContext = createContext<HostContextType | undefined>(undefined);

export const HostProvider = ({ children }: { children: ReactNode }) => {
  const [structure, setStructure] = useState<string | null>("Campervan/motorhome");
  const [privacyType, setPrivacyType] = useState<string | null>("An entire place");
  const [location, setLocation] = useState<string>("Mylaudy, Tamil Nadu 629403, India");
  const [floorPlan, setFloorPlan] = useState({
    guests: 4,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  });
  const [amenities, setAmenities] = useState<string[]>([]);
  const [photos, setPhotos] = useState<string[]>([]);

  return (
    <HostContext.Provider value={{ 
      structure, 
      privacyType, 
      location, 
      floorPlan,
      setStructure, 
      setPrivacyType, 
      setLocation,
      setFloorPlan,
      amenities,
      setAmenities,
      photos,
      setPhotos
    }}>
      {children}
    </HostContext.Provider>
  );
};

export const useHost = () => {
  const context = useContext(HostContext);
  if (context === undefined) {
    throw new Error("useHost must be used within a HostProvider");
  }
  return context;
};
