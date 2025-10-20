"use client";
import { Button } from "@/components/atoms";
import { useEffect } from "react";
import { ReactPortal } from "..";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

function Modal({ children, isOpen, closeModal }: ModalProps) {
  // close modal on esc key
  useEffect(() => {
    const closeOnEscKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? closeModal() : null;
    document.body.addEventListener("keydown", closeOnEscKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscKey);
    };
  }, [closeModal]);

  // prevent scroll on modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isOpen) return null;

  return (
    <ReactPortal>
      <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-neutral-800 opacity-50"></div>
      <div className="fixed rounded-[1rem] grid grid-cols-1 grid-rows-[80%_10.5rem] lg:grid-rows-[1fr_3.5rem] overflow-hidden bg-gradient-blue inset-y-6 lg:inset-y-12 inset-x-6 lg:inset-x-12 z-50 place-items-center">
        <div className="modal__content">{children}</div>
        <div className="modal__actions ">
          <Button onClick={closeModal}>
            Cerrar
          </Button>
        </div>
      </div>{" "}
    </ReactPortal>
  );
}

export default Modal;
