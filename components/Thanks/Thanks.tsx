import React from "react";
import { Htag } from "../Htag/Htag";
import { Logo } from "../Logo/Logo";
import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./Thanks.module.css";

export const Thanks = () => {
  return (
    <>
      <Logo />
      <Htag align="center" tag="h3" className={styles.title}>
        Thank you!
      </Htag>
      <Paragraph align="center" className={styles.text}>
        You successfully subscribed on HERA newsletter!
      </Paragraph>
    </>
  );
};
