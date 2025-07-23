import { Footer, Header } from "@/components/organisms";
import type { Metadata } from "next";
import { roboto, source_serif } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fundación Selah",
  description: "Fundación Selah",
  openGraph: {
    title: "Fundación Selah",
    description: "Fundación Selah",
    url: "https://fundacionselah.org",
    images: [
      {
        url: "https://fundacionselah.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fundación Selah"
      }
    ],
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body
        className={`${roboto.variable} ${source_serif.variable} bg-ghost-white flex flex-col items-center font-sans`}
      >
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
