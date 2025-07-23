import { ListDian } from "@/components/molecules";
import { DIAN_DOCUMENTS } from "./dianDocuments";


export default function ReportesDian() {
  return (
    <main className="py-32 px-4 lg:px-0">
      <div className="content">
        <h1 className="text-5xl font-bold pb-12 font-serif">Reportes Dian</h1>
        <ListDian items={DIAN_DOCUMENTS[2024]} title="2024" />
        <ListDian items={DIAN_DOCUMENTS[2023]} title="2023" />
      </div>
    </main>
  );
}
