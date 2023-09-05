"use client";
import { usePathname } from "next/navigation";
export default function Hero() {
  const pathname = usePathname();
  console.log(pathname);
  const isHome = pathname === "/";
  return <>{isHome ? <div>Home</div> : <div>Internal</div>}</>;
}
