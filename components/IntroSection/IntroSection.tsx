import styles from "./IntroSection.module.css";
import { IntroSectionProps } from "./IntroSection.props";
import { Htag } from "../Htag/Htag";
import { Paragraph } from "../Paragraph/Paragraph";
import Image from "next/image";
import cn from "classnames";

export const IntroSection = ({
  title,
  text,
  img,
  reverse = false,
}: IntroSectionProps): JSX.Element => {
  return (
    <section className={cn(styles.section, { [styles.reverse]: reverse })}>
      <div className={styles["section__info"]}>
        <Htag className={styles["section__title"]} tag="h2">
          {title}
        </Htag>
        <Paragraph>{text}</Paragraph>
      </div>
      <div className={styles["section__image"]}>
        {reverse ? (
          <>
            <img
              className={cn(
                styles["section__img"],
                styles["section__img--left"]
              )}
              src="/svg/circles.svg"
              alt="circles"
            />
            <img
              className={cn(
                styles["section__img"],
                styles["section__img--right"]
              )}
              src="./svg/dotted.svg"
              alt="dotted"
            />
          </>
        ) : (
          <>
            <img
              className={cn(
                styles["section__img"],
                styles["section__img--left"]
              )}
              src="./svg/dotted.svg"
              alt="dotted"
            />
            <img
              className={cn(
                styles["section__img"],
                styles["section__img--right"]
              )}
              src="/svg/circles.svg"
              alt="circles"
            />
          </>
        )}

        <Image
          width={410}
          height={466}
          priority
          quality={100}
          className={styles["section__preview"]}
          src={img}
          alt={title}
        />
      </div>
    </section>
  );
};
