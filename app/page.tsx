import { VideoBanner } from "@/components/molecules";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center ">
      <div className="content">
        <VideoBanner />
        <h2 id="proyectos" className="text-center text-5xl font-bold pt-12 font-serif">Proyectos</h2>
      </div>
    </main>
  );
}
