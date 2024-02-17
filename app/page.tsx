import { ProjectItem, VideoBanner } from "@/components/molecules";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-32 px-4 lg:px-0">
      <div className="content">
        <VideoBanner />
        <h2
          id="proyectos"
          className="text-center text-5xl font-bold pt-12 font-serif"
        >
          Proyectos
        </h2>
        <section className="proyectos">
          <ProjectItem
            odd
            title="Comedor para niños y abuelitos"
            image="/hero/img-comedor-ninos.png"
            id="comedor"
            description={{
              propose:
                "Atender 100 niños y 50 abuelitos para proveerles almuerzo de lunes a viernes.",
              problem:
                "Es una vereda que presenta gran asentamiento, gran cantidad de personas desplazadas. Por lo tanto, se evidencia el desempleo, el hambre y las familias muy numerosas que no tienen como subsistir.",
              place: "Bello, El Pinar (Antioquia – Colombia)",
            }}
          />
          <ProjectItem
            title="Talleres creativos"
            image="/hero/img-talleres.png"
            id="talleres"
            description={{
              propose:
                "Ayudar a desarrollar en las mujeres de sectores vulnerables, la capacidad creativa, permitiendo que expresen su potencial creador, al servicio de su propio bienestar en pro de futuros emprendimientos generando así sus propios ingresos.  ",
              problem:
                "Falta de oportunidades laborales y poco acompañamiento a mujeres que pueden desarrollar un talento para las artes anteriormente mencionadas.",
              place:
                "Población de mujeres que desean descubrir su talento en las artes y activarlo como una posible fuente de ingreso.",
              items: [
                "Costura y diseño",
                "Tejidos en crochet",
                "Pintura (básico)",
                "Manualidades, papelería",
                "Jabonería artesanal",
                "Estilismo",
              ],
            }}
          />
          <ProjectItem
            odd
            title="El Rey te mandó a llamar"
            image="/hero/img-el-rey-llama.png"
            id="rey"
            description={{
              propose:
                "Por medio de la realización de un evento, donde el propósito principal es impartir a través de fundamentos bíblicos, principios que traigan un conocimiento más profundo de lo que somos en Cristo y para Cristo, recuperando así en el corazón de hombres y mujeres su imagen original, como la que Dios diseñó.",
              problem:
                "La depresión, conocida también como trastorno depresivo mayor o depresión unipolar, es una enfermedad mental capaz de causar numerosos síntomas psicológicos y físicos. Su síntoma más conocido es una tristeza profunda y prolongada.",
              place:
                "Población de hombres y mujeres, en estado de vulnerabilidad, de los 17 años en adelante.",
            }}
          />
          <ProjectItem
            title="Plan lector"
            image="/hero/img-plan-lector.png"
            id="lector"
            description={{
              propose:
                "El plan lector es un programa que consiste en proponer un libro para que los estudiantes lo lean en la jornada académica y presenten sus reflexiones con respecto al mismo, promoviendo así el hábito de la lectura y el análisis crítico de los textos.",
              problem:
                "Hoy en día los jóvenes no tienen un hábito por la lectura que les añada valores y principios de vida ni desarrollar un sentido crítico y coherente a la hora de encaminar su propósito de vida!",
              place:
                "Colegios del País (Colombia)",
              book: "Celda 212",
              other: {
                title: "Un foro con el autor",
                content: "Una vez que un grupo de estudiantes ha leído la obra, podrá tener la oportunidad de conocer al autor del libro y compartir una sesión de preguntas y respuestas que enriquecerá en gran manera su formación académica."
              }
            }}
          />
        </section>
        <section className="p-12 bg-gradient-yellow rounded-[2rem] text-center" id="vincularme">
          <h2 className="font-serif font-bold text-2xl lg:text-5xl pb-16 w-4/5 mx-auto">¿Cómo puedes vincularte a nuestros proyectos?</h2>
          <ul className="flex flex-col gap-10 justify-center items-center">
            <li className="flex flex-wrap lg:flex-nowrap gap-8 justify-center lg:justify-start items-center w-auto lg:w-4/5">
              <Image src="/icons/icon-volunteer.svg" alt="Voluntario" width={80} height={80}/>
              <span className="text-2xl text-center lg:text-left">Como voluntario y apoyar uno de nuestros proyectos bien sea desde el servicio o con tu profesión.</span>
            </li>
            <li className="flex flex-wrap lg:flex-nowrap gap-8 justify-center lg:justify-start items-center w-auto lg:w-4/5">
              <Image src="/icons/icon-gifts.svg" alt="Aportes en especie" width={80} height={80}/>
              <span className="text-2xl text-center lg:text-left">Aporte en especie (mercado, ropa, implementos de aseo, medicina)</span>
            </li>
            <li className="flex flex-wrap lg:flex-nowrap gap-8 justify-center lg:justify-start items-center w-auto lg:w-4/5">
              <Image src="/icons/icon-donation.svg" alt="Aporte en dinero" width={80} height={80}/>
              <span className="text-2xl text-center lg:text-left">Aporte en dinero como empresa o persona natural – según el proyecto que te llame la atención – te mostramos el presupuesto para el desarrollo del mismo.</span>
            </li>
            <li className="flex flex-wrap lg:flex-nowrap gap-8 justify-center lg:justify-start items-center w-auto lg:w-4/5">
              <Image src="/icons/icon-sponsor.svg" alt="Apadrinando" width={80} height={80}/>
              <span className="text-2xl text-center lg:text-left">Apadrinando de manera mensual y con un aporte desde $55.000 uno de los proyectos SELAH.</span>
            </li>
            <li className="flex flex-wrap lg:flex-nowrap gap-8 justify-center lg:justify-start items-center w-auto lg:w-4/5">
              <Image src="/icons/icon-share.svg" alt="Conectarnos" width={80} height={80}/>
              <span className="text-2xl text-center lg:text-left">Conectarnos con posibles padrinos o empresas que deseen ser parte de SELAH.</span>
            </li>
          </ul>
          <p className="font-bold text-2xl py-8 w-auto lg:w-1/2 text-center mx-auto">Recuerda que podemos expedir un certificado de donación descontable para la declaración de renta.</p>
        </section>
      </div>
    </main>
  );
}
