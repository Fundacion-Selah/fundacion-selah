import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <div className="content">
        <h1 className="text-center text-3xl font-bold underline">Fundación Selah</h1>
        <p className="text-center pt-12">¿Y si convertimos la bondad en una actitud y no en una excepción?</p>
        <Link className="text-center block underline pt-12" href="/reportes-dian">Reportes DIAN</Link>
        <p className="text-center pt-12">🚧 Sitio en construcción 🚧</p>
      </div>
    </main>
  );
}
