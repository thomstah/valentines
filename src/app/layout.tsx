import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Play this game Mindy.",
  description: "Card matching game!",
  keywords: [
    "Valentine's card game",
    "romantic proposal game",
    "photo card challenge",
    "Valentine's Day surprise",
    "couples game",
    "valentine's day game",
    "proposal game",
  ],
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
