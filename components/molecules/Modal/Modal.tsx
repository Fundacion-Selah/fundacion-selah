"use client";
import { Button } from "@/components/atoms";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

function Modal({ children, isOpen, closeModal }: ModalProps) {
  return (
    <>
      {isOpen &&
        createPortal(
          <>
            <div className="modal fixed top-0 left-0 w-screen h-screen z-40 bg-neutral-800 opacity-50"></div>
            <div className="fixed rounded flex flex-col min-w-fit overflow-hidden p-5 bg-zinc-800 inset-y-32 inset-x-12 z-50">
              <h2>Modal</h2>
              <Button onClick={closeModal}>Close</Button>
              {children}
            </div>{" "}
          </>,
          document.body
        )}
    </>
  );
}

export default Modal;
