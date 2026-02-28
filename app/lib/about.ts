// About page data

export interface TeamMember {
  name: string;
  role: string;
  slug: string;
  image: string;
  bio?: string[];
  featured?: boolean;
}

export interface Value {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Jonathan Miller",
    role: "Founder & CEO",
    slug: "jonathan-miller",
    image: "https://framerusercontent.com/images/E5PnKtYDHku834nfwcl0219c.png?width=1110&height=1336",
    featured: true,
    bio: [
      "Over the past decade, Jonathan Miller has built a disciplined, insight-led approach to residential property, helping clients make confident, long-term decisions in complex markets.",
      "Jonathan works closely with buyers, sellers, and investment-focused clients to deliver clear, research-backed guidance at every stage of the property journey. With a background spanning advisory roles and hands-on market experience, he has spent years supporting professionals, families, and investors as they navigate high-value property decisions.",
      "Through his work, Jonathan saw firsthand how property, often one of a client's most significant assets, was frequently approached without enough structure or strategic thinking. Drawn to a more considered, data-informed model, he is passionate about aligning property choices with broader financial goals — ensuring each decision is purposeful, well-timed, and built for long-term value.",
    ],
  },
  {
    name: "Marcus Reed",
    role: "Agent",
    slug: "marcus-reed",
    image: "https://framerusercontent.com/images/aIba8QcVIisIa6XPSYcXS7ibrns.png?width=880&height=1034",
  },
  {
    name: "Daniel Foster",
    role: "Agent",
    slug: "daniel-foster",
    image: "https://framerusercontent.com/images/ck0sHgkJjDU93s491IPSs50qgI.png?width=880&height=1034",
  },
  {
    name: "Oliver Hayes",
    role: "Agent",
    slug: "oliver-hayes",
    image: "https://framerusercontent.com/images/qUh8msM8p2qesVmEbcoaxrBtLoY.png?width=880&height=1034",
  },
  {
    name: "Emily Carter",
    role: "Agent",
    slug: "emily-carter",
    image: "https://framerusercontent.com/images/tZjQuX26e70uCjwQbWr8QkZtY4.png?width=880&height=1034",
  },
  {
    name: "Sofia Martinez",
    role: "Agent",
    slug: "sofia-martinez",
    image: "https://framerusercontent.com/images/XGjISr1mMMVrRNHHtetG9xF2yjs.png?width=880&height=1034",
  },
  {
    name: "Ethan Liu",
    role: "Agent",
    slug: "ethan-liu",
    image: "https://framerusercontent.com/images/6QbW1NSSEqNr772iYmfAFyMNWmw.png?width=880&height=1034",
  },
];

export const values: Value[] = [
  {
    number: "01",
    title: "Amplify Together.",
    description:
      "We support each other at our low points and never let our high points go to our heads. If one of us is behind, we are all behind. And when one of us succeeds, we ALL do.",
  },
  {
    number: "02",
    title: "Be Relentless.",
    description:
      "We are not only tireless in the pursuit of achieving our goals, we are tenacious seekers of knowledge, never sacrificing personal growth for professional growth.",
  },
  {
    number: "03",
    title: "Disrupt For Good.",
    description:
      "We are the best at what we do because we never lose sight of the people and communities around us. Our voice carries above the rest and we disrupt to have a positive, lasting impact.",
  },
  {
    number: "04",
    title: "Create For Tomorrow.",
    description:
      "We are future obsessed and always look forward, creating to bring the future to today.",
  },
];

export const stats: Stat[] = [
  { value: 8, suffix: "K+", label: "Clients" },
  { value: 12, suffix: "K+", label: "Consultations" },
  { value: 30, suffix: "", label: "Cities" },
  { value: 2, suffix: "B+", label: "In Sales" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "\u201CThe clarity, care, and consistency HAUS brings to every step makes the entire experience feel considered and trustworthy. It\u2019s rare to find that balance done this well.\u201D",
    authorName: "Daniel Morris",
    authorRole: "Property Investor",
    authorImage:
      "https://framerusercontent.com/images/ykax52rsbkgYur5jZqaKxWGRLM.jpg?scale-down-to=1024&width=3246&height=4058",
  },
  {
    quote:
      "\u201CThe process, the approach, the rigour, the relationships they build, that [HAUS\u2019s] clients can leverage off \u2013 it\u2019s really powerful. It\u2019s not easy to do, and it\u2019s not easy to find.\u201D",
    authorName: "Sarah Chen",
    authorRole: "Business Owner",
    authorImage:
      "https://framerusercontent.com/images/8jpvtN1LhtGTLfO40jCfOWkYilI.jpg?scale-down-to=1024&width=2363&height=3992",
  },
  {
    quote:
      "\u201CHAUS combines insight, structure, and strong relationships in a way that gives their clients real confidence. That kind of approach is hard to replicate.\u201D",
    authorName: "James Walker",
    authorRole: "Investment Advisor",
    authorImage:
      "https://framerusercontent.com/images/Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg?scale-down-to=1024&width=2662&height=3993",
  },
  {
    quote:
      "\u201CThere\u2019s a depth to how HAUS works \u2014 in their process, their judgement, and their partnerships \u2014 that creates outcomes you don\u2019t often see elsewhere.\u201D",
    authorName: "Michael Torres",
    authorRole: "Real Estate Developer",
    authorImage:
      "https://framerusercontent.com/images/fl5yE1xHBzRypxEXFhKRr3GP64.jpg?scale-down-to=1024&width=7471&height=9808",
  },
];

export const heroImages = [
  {
    src: "https://framerusercontent.com/images/rTcRHvDasD5E4c9wi5wyH9jpiQM.png?width=1340&height=768",
    width: 485,
    aspectRatio: 1.48773,
  },
  {
    src: "https://framerusercontent.com/images/JbijQHyfUgOvE6ISPtZkCum6J2E.png?width=920&height=1150",
    width: 400,
    aspectRatio: 0.715564,
  },
  {
    src: "https://framerusercontent.com/images/rrgSCttp4wZHsTO1NkOhRebD1OM.png?width=1880&height=1331",
    width: 482,
    aspectRatio: 1.73381,
  },
  {
    src: "https://framerusercontent.com/images/U8w2KVZ9URHVyoKghgGvjNtSzy0.png?width=1297&height=898",
    width: 400,
    aspectRatio: 0.852878,
  },
];

export const aboutDescription = {
  label: "About us",
  heading:
    "HAUS\u2122 guides people and businesses toward the spaces they truly belong to, offering curated options, thoughtful direction, and a seamless experience from search to settlement.",
  paragraphs: [
    "At HAUS\u2122, we believe finding the right space is about more than square footage or location. It\u2019s about understanding how people live, work, and grow \u2014 and matching them with environments that support those ambitions. We take a considered approach to real estate, combining local insight, market knowledge, and careful curation to help our clients make confident decisions.",
    "Whether you\u2019re buying, selling, leasing, or investing, we focus on clarity at every step. From the first conversation to final settlement, our process is designed to feel straightforward, informed, and human. With attention to detail and a commitment to long-term value, HAUS\u2122 works as a trusted partner \u2014 guiding each client toward spaces that feel right, now and into the future.",
  ],
};

export const valuesIntro =
  "The foundation of how we operate, make decisions, and build long-term relationships.";
