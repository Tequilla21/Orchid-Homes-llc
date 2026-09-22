import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orchid Homes LLC | Raleigh Rentals",
  description:
    "Explore two-bedroom rental homes from Orchid Homes LLC, a private landlord in Raleigh, North Carolina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
