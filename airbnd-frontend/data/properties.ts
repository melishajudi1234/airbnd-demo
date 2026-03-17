export interface Property {
  image: string;
  title: string;
  price: string;
  rating: string;
  isGuestFavourite?: boolean;
}

export const properties: Property[] = [
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
