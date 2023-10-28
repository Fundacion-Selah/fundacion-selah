"use client";
import { Button } from "@/components/atoms";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal } from "../Modal";

function VideoBanner() {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/#vincularme");
  };

  const handleModalClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="videoBanner bg-polynesian-blue-30 rounded-[2rem] p-[3rem] w-full">
      <div className="videoBanner__container flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap gap-8">
        <div className="videoBanner__info flex flex-col shrink-[4] justify-between items-center lg:items-start">
          <h2 className="font-serif font-bold text-2xl lg:text-5xl mb-8 leading-[1.8rem] lg:leading-[3.6rem]">
            ¿Y si convertimos la bondad en una actitud y no en una excepción?
          </h2>
          <Button onClick={handleButtonClick}>
            Conoce cómo te puedes vincular
          </Button>
        </div>
        <div className="videoBanner__player">
          <Link href="" onClick={handleModalClick}>
            <Image
              src="/video-thumbnail.png"
              alt="Video presentation"
              width={640}
              height={360}
            />
          </Link>
        </div>
      </div>
      {modalOpen && (
        <Modal isOpen={modalOpen} closeModal={closeModal}>
          <video controls autoPlay>
            <source
              src="/videos/video-presentation-selah.mp4"
              type="video/mp4"
            />
          </video>
        </Modal>
      )}
    </section>
  );
}

export default VideoBanner;
