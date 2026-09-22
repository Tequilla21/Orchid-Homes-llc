export type Rental = {
  id: number;
  title: string;
  address: string;
  rent: number | null;
  bedrooms: number;
  bathrooms: number | null;
  squareFeet: number | null;
  available: boolean;
  description: string;
  amenities: string[];
};

// Update this list when the landlord confirms current prices and availability.
// Four units are represented as available based on the project brief; verify before publishing.
export const rentals: Rental[] = [
  {
    id: 1,
    title: "Renovated Downtown Raleigh Apartment",
    address: "911 S. Blount Street, Raleigh, NC 27601",
    rent: 1099,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 900,
    available: true,
    description:
      "Renovated second-floor apartment with an open floor plan, private balcony, central air and heat, in-unit laundry, and off-street parking.",
    amenities: [
      "Private balcony",
      "Central air and heat",
      "In-unit laundry",
      "Off-street parking",
      "Luxury vinyl plank flooring",
    ],
  },
  {
    id: 2,
    title: "Two-Bedroom Rental",
    address: "Raleigh, NC · Address to be confirmed",
    rent: null,
    bedrooms: 2,
    bathrooms: null,
    squareFeet: null,
    available: true,
    description: "Contact Orchid Homes for current pricing, location, and details.",
    amenities: [],
  },
  {
    id: 3,
    title: "Two-Bedroom Rental",
    address: "Raleigh, NC · Address to be confirmed",
    rent: null,
    bedrooms: 2,
    bathrooms: null,
    squareFeet: null,
    available: true,
    description: "Contact Orchid Homes for current pricing, location, and details.",
    amenities: [],
  },
  {
    id: 4,
    title: "Two-Bedroom Rental",
    address: "Raleigh, NC · Address to be confirmed",
    rent: null,
    bedrooms: 2,
    bathrooms: null,
    squareFeet: null,
    available: true,
    description: "Contact Orchid Homes for current pricing, location, and details.",
    amenities: [],
  },
];
