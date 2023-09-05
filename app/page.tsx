'use client';
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-blue flex h-screen flex-col items-center justify-center p-24">
      <div className="content">
        <p className="text-center pt-12">¿Y si convertimos la bondad en una actitud y no en una excepción?</p>
        <Link className="text-center block underline pt-12" href="/reportes-dian">Reportes DIAN</Link>
        <p className="text-center pt-12">🚧 Sitio en construcción 🚧</p>
      </div>
    </main>
  );
}
