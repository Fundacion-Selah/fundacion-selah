"use client";
import { usePathname } from "next/navigation";
import { HomeBanner, InternalBanner } from "./components";

function Hero() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return <>{isHome ? <HomeBanner /> : <InternalBanner />}</>;
}

export default Hero;