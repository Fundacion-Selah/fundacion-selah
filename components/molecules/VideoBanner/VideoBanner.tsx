"use client";
import { Button } from "@/components/atoms";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "../Modal";

function VideoBanner() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="videoBanner bg-polynesian-blue-30 rounded-[2rem] p-[3rem] w-full">
      <div className="videoBanner__container flex gap-8">
        <div className="videoBanner__info flex flex-col shrink-[4] justify-between items-start">
          <h2 className="font-serif font-bold text-5xl mb-8 leading-[3.6rem]">
            ¿Y si convertimos la bondad en una actitud y no en una excepción?
          </h2>
          <Button>Conoce como te puedes vincular</Button>
        </div>
        <div className="videoBanner__player">
          <Link href="/#contacto" onClick={() => setShowModal(true)}>
            <Image
              src="/video-thumbnail.png"
              alt="Video presentation"
              width={640}
              height={360}
            />
          </Link>
        </div>
      </div>
      <Modal isOpen={showModal} closeModal={() => setShowModal(false)}>
        <>
          <p>modal content</p>
        </>
      </Modal>
    </section>
  );
}

export default VideoBanner;
