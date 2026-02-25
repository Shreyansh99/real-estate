import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HAUS - A Premium Real Estate Template for Framer",
  description: "HAUS™ guides people and businesses toward the spaces they truly belong to, offering curated options, thoughtful direction, and a seamless experience from search to settlement.",
  metadataBase: new URL("https://haustemplate.framer.website/"),
  openGraph: {
    title: "HAUS - A Premium Real Estate Template for Framer",
    description: "HAUS™ guides people and businesses toward the spaces they truly belong to, offering curated options, thoughtful direction, and a seamless experience from search to settlement.",
    url: "https://haustemplate.framer.website/",
    images: [{ url: "https://framerusercontent.com/images/ItsqAVEm8LcnT7P2amJXNbBBk.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAUS - A Premium Real Estate Template for Framer",
    description: "HAUS™ guides people and businesses toward the spaces they truly belong to, offering curated options, thoughtful direction, and a seamless experience from search to settlement.",
    images: ["https://framerusercontent.com/images/ItsqAVEm8LcnT7P2amJXNbBBk.png"],
  },
  alternates: {
    canonical: "https://haustemplate.framer.website/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      { url: "https://framerusercontent.com/images/MiJbxN6w60UKIqeKy4hx09AeE.svg", media: "(prefers-color-scheme: light)" },
      { url: "https://framerusercontent.com/images/MiJbxN6w60UKIqeKy4hx09AeE.svg", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "https://framerusercontent.com/images/xHg37YGBiPDuc0d61tK5MzF7ZA.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
