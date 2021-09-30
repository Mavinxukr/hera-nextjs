import Image from "next/image";
import React, { useRef } from "react";
import { Htag } from "../Htag/Htag";
import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./PostSection.module.css";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Subtitle } from "../../service/posts.service";

export interface ISubtitle extends Subtitle {
  index: number;
  setIndex: (index: number) => void;
}

export const PostSection = ({
  setIndex,
  index,
  id,
  title,
  text,
  image,
}: ISubtitle): JSX.Element => {
  const section = useRef<HTMLDivElement | null>(null);

  const paragraphs = text.split(/[\r\n]+/g);

  useScrollPosition(() => {
    let position = null;

    if (section && section.current) {
      position = section.current.getBoundingClientRect();
    }

    if (position && position.top <= 1 && position.top + position.height >= 0) {
      setIndex(index + 1);
    }
  });

  return (
    <section ref={section} id={`section${id}`} className={styles.section}>
      <Htag className={styles.title} tag="h4">
        {`${index + 1}. ${title}`}
      </Htag>
      {paragraphs.map((paragraph, index) => (
        <Paragraph key={index} className={styles.text}>
          {paragraph.trim()}
        </Paragraph>
      ))}
      <Image
        unoptimized
        alt={title}
        className={styles.img}
        width={1352}
        height={832}
        src={image}
      ></Image>
    </section>
  );
};
