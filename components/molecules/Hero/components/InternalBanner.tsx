import internalBanner from "@/public/img-dian.png";
import Image from "next/image";

const InternalBanner = () => {
  return (
    <section className="internalBanner">
      <Image src={internalBanner} alt="Imagen sección Dian" />
    </section>
  );
};

export default InternalBanner;
