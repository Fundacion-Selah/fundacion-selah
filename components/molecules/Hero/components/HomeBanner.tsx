import { BannerItem } from ".";

const HomeBanner = () => {
  return (
    <section className="hero overflow-auto">
      <ul className="flex h-[20rem] lg:h-[27rem] overflow-x-auto gap-4 lg:gap-0 p-4 lg:p-0 scroll-smooth snap-both">
        <BannerItem
          image="/hero/img-comedor-ninos.png"
          title="Comedor para niños y abuelitos"
          description="Atender 100 niños y 50 abuelitos para proveerles almuerzo de lunes a viernes"
          link="/#comedor"
        />
        <BannerItem
          image="/hero/img-talleres.png"
          title="Talleres creativos"
          description="Ayudar a desarrollar en las mujeres de sectores vulnerables, la capacidad creativa, permitiendo que expresen su potencial creador."
          link="/#talleres"
        />
        <BannerItem
          image="/hero/img-el-rey-llama.png"
          title="El Rey te mandó a llamar"
          description="Impartir a través de fundamentos bíblicos, principios que traigan un conocimiento más profundo de lo que somos en Cristo y para Cristo."
          link="/#rey"
        />
        <BannerItem
          image="/hero/img-plan-lector.png"
          title="Plan lector"
          description="Es un programa que consiste en proponer un libro para que los estudiantes lo lean en la jornada académica y presenten sus reflexiones con respecto al mismo."
          link="/#lector"
        />
      </ul>
    </section>
  );
};

export default HomeBanner;
