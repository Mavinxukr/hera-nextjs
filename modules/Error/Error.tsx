import Image from "next/image";
import React from "react";
import { Htag } from "../../components/Htag/Htag";
import { Container } from "../Container/Container";
import styles from "./Error.module.css";

export const Error = (): JSX.Element => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404</h1>
        <Htag tag="h4" align="center" className={styles.subtitle}>
          SORRY! PAGE NOT FOUND
        </Htag>
        <Image src={"/404.png"} width={760} height={569} />
      </div>
    </Container>
  );
};
