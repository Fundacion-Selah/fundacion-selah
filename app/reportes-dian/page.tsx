import Link from "next/link";

export default function ReportesDian() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <div className="content">
        <h1 className="text-center text-3xl font-bold underline">
          <Link href="/">Fundación Selah</Link>
        </h1>
        <h2 className="text-center text-2xl font-bold pt-12">Reportes DIAN</h2>
        <ol className="list-decimal">
          <li>
            <a
              className="hover:underline"
              href="/reportesDian/Estatutos-Fundacion-Selah.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Estatutos
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="/reportesDian/Estados-Fros-Fund-Selah-Mzo-2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Estados Fros - Mzo 2023
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="/reportesDian/Certificado-Electronico-Camara-De-Comercio.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificado Electrónico Cámara De Comercio
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="/reportesDian/Acta-Asamblea-No-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acta Asamblea No. 2
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="/reportesDian/Certificacion-Consolidada-De-No-Antecedentes.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificación Consolidada de No. Antecedentes
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="/reportesDian/Radicado-Solicitud-52451002150536.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Radicado Solicitud
            </a>
          </li>
        </ol>
      </div>
    </main>
  );
}
