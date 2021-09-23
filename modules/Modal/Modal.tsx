import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import cn from "classnames";
import { ModalContext } from "../../context/MadalContext";

export const Modal = (): JSX.Element | null => {
  const [isWindow, setIsWindow] = useState(false);
  const modalContext = useContext(ModalContext);
  const [modal, setModal] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let portal: HTMLDivElement | null = null;
      portal = document.createElement("div");
      portal.classList.add("portal");
      document.body.appendChild(portal);

      setModal(portal);
      setIsWindow(true);
      setTimeout(() => {
        setOpen(true);
      }, 100);
    }

    document.body.style.overflow = "hidden";

    return () => {
      const portal = document.body.querySelector(".portal");
      document.body.style.overflow = "auto";
      if (portal) {
        document.body.removeChild(portal);
      }
    };
  }, []);

  const clickHandler = (event: React.SyntheticEvent<HTMLDivElement>) => {
    const { type } = event.currentTarget.dataset;

    if (type === "denied") {
      setOpen(false);
      setClose(true);
      setTimeout(() => {
        modalContext.close();
      }, 300);
    }
  };

  if (!isWindow && !modal) {
    return null;
  }

  return modal
    ? createPortal(
      <div
        className={cn(styles.modal, {
          [styles.open]: open,
          [styles.close]: close,
        })}
      >
        <div
          className={cn(styles.overlay)}
          data-type="denied"
          onClick={(ev) => clickHandler(ev)}
        >
          <div className={styles.window}>{modalContext.content}</div>
        </div>
      </div>,
      modal
    )
    : null;
};
