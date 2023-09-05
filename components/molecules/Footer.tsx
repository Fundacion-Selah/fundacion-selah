import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-blue w-full flex items-center justify-center p-8">
      <div className="container text-center">
        <h3 className="font-serif font-bold text-3xl">Contacto</h3>
        <ul className="flex justify-center gap-4 pt-4">
          <li>
            <Link
              href="https://www.instagram.com/selah.fundacion/"
              target="_blank"
              className="flex gap-2 justify-end"
            >
              <Image
                className="inline-block "
                src="/icons/icon-instagram.svg"
                alt="instagram"
                width={20}
                height={20}
              />
              @selah.fundacion
            </Link>
          </li>
          <li>
            <Link
              href="https://api.whatsapp.com/send?phone=573103715377"
              target="_blank"
              className="flex gap-2 justify-end"
            >
              <Image
                src="/icons/icon-whatsapp.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                className="inline-block"
              />
              +57 3103715377
            </Link>
          </li>
          <li>
            <Link
              href="mailto: somosfundacionselah@gmail.com"
              target="_blank"
              className="flex gap-2 justify-end"
            >
              <Image
                src="/icons/icon-email.svg"
                alt="email"
                width={20}
                height={20}
                className="inline-block"
              />
              somosfundacionselah@gmail.com
            </Link>
          </li>
        </ul>
        <Link href="/reportes-dian" className="hover:underline pt-4 block">Ver reportes DIAN</Link>
      </div>
    </footer>
  );
}
