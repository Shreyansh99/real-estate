export interface Property {
  name: string;
  price: number;
  priceLabel: string;
  status: "for sale" | "for lease" | "sold";
  type: "residential" | "commercial" | "agricultural" | "industrial";
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
  image: string;
  slug: string;
}

export function formatPrice(price: number, status: string): string {
  const formatted = price.toLocaleString("en-US");
  if (status === "for lease") {
    return `$${formatted}/mon`;
  }
  return `$${formatted}`;
}

export const properties: Property[] = [
  {
    name: "HAUS™ Greenfield Acres",
    price: 2500000,
    priceLabel: "$2,500,000",
    status: "for lease",
    type: "agricultural",
    bedrooms: 1,
    bathrooms: 2,
    sqft: 2500,
    address: "1840 County Road 12, Salinas, CA 93908",
    image: "https://framerusercontent.com/images/JrdZEbcF0LiVhYLSxz8OehbpPM.jpg?scale-down-to=1024&width=6000&height=4000",
    slug: "haus-greenfield-acres-salinas",
  },
  {
    name: "HAUS™ Harbor Plaza",
    price: 5000,
    priceLabel: "$5,000/mon",
    status: "for sale",
    type: "commercial",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 4919,
    address: "88 Madison Avenue, New York, NY 10016",
    image: "https://framerusercontent.com/images/JrdZEbcF0LiVhYLSxz8OehbpPM.jpg?scale-down-to=1024&width=6000&height=4000",
    slug: "haus-harbor-plaza-tampa",
  },
  {
    name: "HAUS™ Business Hub",
    price: 500000,
    priceLabel: "$500,000",
    status: "for sale",
    type: "commercial",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 1932,
    address: "100 Main Street, Miami",
    image: "https://framerusercontent.com/images/JrdZEbcF0LiVhYLSxz8OehbpPM.jpg?scale-down-to=1024&width=6000&height=4000",
    slug: "haus-business-hub-chicago",
  },
  {
    name: "HAUS™ Retail Row",
    price: 5000000,
    priceLabel: "$5,000,000",
    status: "sold",
    type: "commercial",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3920,
    address: "88 Madison Avenue, New York, NY 10016",
    image: "https://framerusercontent.com/images/JrdZEbcF0LiVhYLSxz8OehbpPM.jpg?scale-down-to=1024&width=6000&height=4000",
    slug: "haus-retail-row-charleston",
  },
  {
    name: "HAUS™ Central Offices",
    price: 5000000,
    priceLabel: "$5,000,000",
    status: "for sale",
    type: "commercial",
    bedrooms: 5,
    bathrooms: 3,
    sqft: 5034,
    address: "789 Harbor Drive, San Diego, CA 92101",
    image: "https://framerusercontent.com/images/JrdZEbcF0LiVhYLSxz8OehbpPM.jpg?scale-down-to=1024&width=6000&height=4000",
    slug: "haus-central-offices-los-angeles",
  },
  {
    name: "HAUS™ Market Square",
    price: 5000000,
    priceLabel: "$5,000,000",
    status: "for sale",
    type: "commercial",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 2192,
    address: "245 Market Street, San Francisco, CA 94105",
    image: "https://framerusercontent.com/images/JrdZEbcF0LiVhYLSxz8OehbpPM.jpg?scale-down-to=1024&width=6000&height=4000",
    slug: "haus-market-square-san-jose",
  },
  {
    name: "HAUS™ Urban Loft",
    price: 9000000,
    priceLabel: "$9,000,000",
    status: "sold",
    type: "residential",
    bedrooms: 3,
    bathrooms: 4,
    sqft: 3115,
    address: "1120 Sunset Boulevard, Los Angeles, CA 90026",
    image: "https://framerusercontent.com/images/h0XF5DFd9poY72vqXDQBQPXwM.jpg?width=736&height=920",
    slug: "haus-urban-loft-san-francisco",
  },
  {
    name: "HAUS™ Cedar House",
    price: 7200000,
    priceLabel: "$7,200,000",
    status: "for sale",
    type: "residential",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 5553,
    address: "1600 Camelback Road, Phoenix, AZ 85016",
    image: "https://framerusercontent.com/images/axFv5vWnEBO8WoV63hJEtdCjKQE.jpg?scale-down-to=1024&width=1080&height=1080",
    slug: "haus-cedar-house-aspen",
  },
  {
    name: "HAUS™ Oceanview",
    price: 5000000,
    priceLabel: "$5,000,000",
    status: "sold",
    type: "residential",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 4505,
    address: "1120 Sunset Boulevard, Los Angeles, CA 90026",
    image: "https://framerusercontent.com/images/9jFQZtBgnEcXhCurew78HTyzelQ.jpg?scale-down-to=1024&width=1199&height=799",
    slug: "haus-oceanview-malibu",
  },
  {
    name: "HAUS™ Willow Estate",
    price: 5000000,
    priceLabel: "$5,000,000",
    status: "for sale",
    type: "residential",
    bedrooms: 3,
    bathrooms: 5,
    sqft: 3473,
    address: "410 Michigan Avenue, Chicago, IL 60611",
    image: "https://framerusercontent.com/images/gdgpFU2u2gqrbdVcMDHW28Mz7pY.jpg?scale-down-to=1024&width=1080&height=1080",
    slug: "haus-willow-estate",
  },
  {
    name: "HAUS™ Paradise",
    price: 5000000,
    priceLabel: "$5,000,000",
    status: "for sale",
    type: "residential",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 5877,
    address: "100 Main Street, Miami",
    image: "https://framerusercontent.com/images/JrdZEbcF0LiVhYLSxz8OehbpPM.jpg?scale-down-to=1024&width=6000&height=4000",
    slug: "haus-paradise",
  },
  {
    name: "HAUS™ Valley Farmstead",
    price: 5000000,
    priceLabel: "$5,000,000",
    status: "for sale",
    type: "agricultural",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 5718,
    address: "410 Michigan Avenue, Chicago, IL 60611",
    image: "https://framerusercontent.com/images/JrdZEbcF0LiVhYLSxz8OehbpPM.jpg?scale-down-to=1024&width=6000&height=4000",
    slug: "haus-valley-farmstead-yolo",
  },
];

export const propertyTypes = ["All", "Residential", "Commercial", "Agricultural", "Industrial"] as const;
export const propertyStatuses = ["All", "For Sale", "For Lease", "Sold"] as const;
export const bedroomOptions = ["Any", "1", "2", "3", "4", "5", "6+"] as const;
export const bathroomOptions = ["Any", "1", "2", "3", "4", "5+"] as const;
export const priceRanges = [
  "Any",
  "Under $500K",
  "$500K - $1M",
  "$1M - $5M",
  "$5M - $10M",
  "Over $10M",
] as const;
