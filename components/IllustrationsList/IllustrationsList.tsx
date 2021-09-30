import React from "react";
import Image from "next/image";
import { illustrations } from "./illustrations";
import styles from "./IllustrationsList.module.css";

export const IllustrationsList = (): JSX.Element => {
  return (
    <div className={styles["illustrations__images"]}>
      <ul className={styles["illustrations__list"]}>
        {illustrations.map((i, index) => (
          <li key={index} className={styles["illustrations__item"]}>
            <Image
              width={206}
              height={245}
              src={i.src}
              alt={i.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
