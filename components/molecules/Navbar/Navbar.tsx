import { Button } from "@/components/atoms";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center mt-6">
      <Link href="/">
        <Image
          src="/selah-logo.svg"
          alt="Fundación Selah"
          width="217"
          height="76"
        />
      </Link>

      <ul className="flex items-center gap-4">
        <li>
          <Link className="hover:underline py-2 px-4 font-sans" href="/#proyectos">
            Proyectos
          </Link>
        </li>
        <li>
          <Link className="hover:underline py-2 px-4 font-sans" href="/#vincularme">
            Vincularme
          </Link>
        </li>
        <li>
          <Link className="hover:underline py-2 px-4 font-sans" href="/#contacto">
            Contacto
          </Link>
        </li>
        <li>
          <Button primary>Haz tu donación</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
