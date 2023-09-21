"use client";
import { Button } from "@/components/atoms";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "../Modal";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
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
          <Link
            className="hover:underline py-2 px-4 font-sans text-ghost-white"
            href="/#proyectos"
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline py-2 px-4 font-sans text-ghost-white"
            href="/#vincularme"
          >
            Vincularme
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline py-2 px-4 font-sans text-ghost-white"
            href="/#contacto"
          >
            Contacto
          </Link>
        </li>
        <li>
          <Button primary onClick={() => setShowModal(true)}>
            Haz tu donación
          </Button>
        </li>
      </ul>
      {showModal ? (
        <Modal isOpen={showModal} closeModal={() => setShowModal(false)}>
          <div className=" text-ghost-white text-center max-w-xl">
            <h3 className="font-serif font-bold text-3xl mb-8">
              Puedes hacer tus donaciones en la siguiente cuenta BBVA:
            </h3>
            <p className="font-bold">Fundación Selah</p>
            <p><span className="font-bold">Nit: </span>901692224</p>
            <p><span className="font-bold">Cuenta de ahorros: </span>0241000358</p>
          </div>
        </Modal>
      ) : null}
    </nav>
  );
}

export default Navbar;
