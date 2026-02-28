export interface ContactInfo {
  email: string;
  phone: string;
}

export interface Office {
  id: string;
  city: string;
  email: string;
  phone: string;
  address: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const contactInfo: ContactInfo = {
  email: "hello@haus.com",
  phone: "+1 213-760-2892",
};

export const contactDescription =
  "If you have any questions, requests or need more information, please do not hesitate to contact us. Our team is ready to respond to your needs as soon as possible.";

export const contactImage =
  "https://framerusercontent.com/images/C1ObrGINRJah7qLyHtkRckWmO0.png";

export const offices: Office[] = [
  {
    id: "new-york",
    city: "New York",
    email: "newyork@haus.com",
    phone: "+1 213-760-2892",
    address: "250 Park Avenue South New York, NY 10003 United States",
    image:
      "https://framerusercontent.com/images/Qu5fOfII6Rntld1HOfNTcFGAow.png",
  },
  {
    id: "new-york-2",
    city: "New York",
    email: "newyork@haus.com",
    phone: "+1 213-760-2892",
    address: "250 Park Avenue South New York, NY 10003 United States",
    image:
      "https://framerusercontent.com/images/Qu5fOfII6Rntld1HOfNTcFGAow.png",
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How do I start the buying or selling process?",
    answer:
      "Getting started is simple. Reach out through our contact form, and one of our agents will connect with you to understand your goals, timeline, and next steps.",
  },
  {
    id: "faq-2",
    question: "Do you work with both buyers and sellers?",
    answer:
      "Yes. We work with buyers, sellers, landlords, and tenants, offering tailored guidance whether you\u2019re purchasing, selling, leasing, or investing in property.",
  },
  {
    id: "faq-3",
    question: "Are your listings updated in real time?",
    answer:
      "Our listings are regularly updated to reflect current availability and pricing. For the most accurate and up-to-date information, we recommend speaking directly with an agent.",
  },
  {
    id: "faq-4",
    question: "What types of properties do you specialize in?",
    answer:
      "We specialize in residential, commercial, and investment properties, with a focus on thoughtfully designed spaces and high-quality locations.",
  },
  {
    id: "faq-5",
    question: "How do I schedule a viewing or consultation?",
    answer:
      "You can request a viewing or consultation directly through our website or by contacting one of our agents. We\u2019ll coordinate a time that works best for you.",
  },
];
