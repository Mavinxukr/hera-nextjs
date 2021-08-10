import { BlogPreviewProps } from "./BlogPreview.props";
import styles from "./BlogPreview.module.css";
import AppleIcon from "./apple.svg";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { Htag } from "../Htag/Htag";

export const BlogPreview = ({
  img,
  date,
  title,
  className,
  href,
  ...props
}: BlogPreviewProps): JSX.Element => {
  return (
    <section className={cn(styles.card, className)}>
      <Link href={href}>
        <a>
          <Image width={760} height={572} className={styles.image} src={img} />
        </a>
      </Link>
      <span className={styles.date}>{date}</span>
      <Link href={href}>
        <a>
          <Htag tag="h4">{title}</Htag>
        </a>
      </Link>
    </section>
  );
};
