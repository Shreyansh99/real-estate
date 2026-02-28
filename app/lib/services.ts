// Service page data

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "buy",
    number: "01",
    title: "Buy a property",
    description:
      "Buying a property is one of the most important financial decisions you\u2019ll make. Our role is to guide you with clarity, insight, and confidence at every stage of the journey. We combine in-depth market research with a clear understanding of your goals to identify opportunities that truly align with your long-term plans.\n\nFrom assessing locations and pricing to managing negotiations and due diligence, we take a structured, advice-led approach to ensure every decision is informed and considered. Our focus is not just on helping you buy a property, but on helping you buy the right property.",
    image:
      "https://framerusercontent.com/images/HIELsXr0BOmPa7SpH4bxmKsyIg.jpg?scale-down-to=1024&width=5184&height=3456",
    imageAlt: "white and brown wooden house",
    tags: [
      "Property Research",
      "Negotiation",
      "Marketing",
      "Legal work",
      "Property Visits",
    ],
  },
  {
    id: "sell",
    number: "02",
    title: "Sell your property",
    description:
      "Selling a property requires more than exposure\u2014it requires strategy. We work closely with you to position your property effectively in the market, combining data-driven pricing with thoughtful presentation and targeted marketing.\n\nOur team manages the entire sales process, from preparing your property and launching the campaign to handling buyer inquiries and negotiations. With a clear focus on timing, transparency, and value, we aim to deliver outcomes that reflect both the quality of your asset and your expectations.",
    image:
      "https://framerusercontent.com/images/m53TQxP8s6LxVSPu801L62yP6dQ.jpg?scale-down-to=1024&width=2874&height=3448",
    imageAlt: "keys on hand",
    tags: [
      "Property Valuation",
      "Marketing Strategy",
      "Buyer Screening",
      "Negotiation",
      "Legal Coordination",
      "Sale Closure",
    ],
  },
  {
    id: "rent",
    number: "03",
    title: "Rent & lease",
    description:
      "Whether you\u2019re leasing out a property or searching for the right rental, we bring structure and efficiency to the process. We help landlords secure reliable tenants while ensuring renters find spaces that suit their needs and lifestyle.\n\nFrom market pricing and listings to inspections and agreements, we manage each step with care and attention to detail. Our approach balances speed with due diligence, creating outcomes that work for both property owners and tenants.",
    image:
      "https://framerusercontent.com/images/KGTXISgxyxmkCq256EXQwsbnNto.jpg?scale-down-to=1024&width=5304&height=7952",
    imageAlt: "brown and white couch beside window",
    tags: [
      "Rental Pricing",
      "Tenant Sourcing",
      "Property Viewings",
      "Lease Agreements",
      "Background Checks",
      "Ongoing Support",
    ],
  },
  {
    id: "management",
    number: "04",
    title: "Property management",
    description:
      "Property ownership comes with ongoing responsibilities. Our property management services are designed to protect your asset while ensuring it performs efficiently over time.\n\nWe handle day-to-day operations, tenant communication, maintenance coordination, and compliance, allowing you to step back with confidence. With a proactive and transparent approach, we focus on preserving value, minimizing issues, and delivering peace of mind.",
    image:
      "https://framerusercontent.com/images/2GdDpTYGqUIRYVIKSAIHyR64k.jpg?scale-down-to=1024&width=3648&height=5472",
    imageAlt: "wicker table and two chairs near swimming pool",
    tags: [
      "Tenant Management",
      "Maintenance Coordination",
      "Rent Collection",
      "Property Inspections",
      "Compliance & Reporting",
    ],
  },
];
