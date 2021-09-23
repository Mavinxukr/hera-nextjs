import { BlogPreviewProps } from "./BlogPreview.props";
import styles from "./BlogPreview.module.css";
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
}: BlogPreviewProps): JSX.Element => {
  return (
    <li className={cn(styles.card, className)}>
      <Link href={href}>
        <a aria-label={title}>
          <Image
            width={760}
            height={572}
            alt={title}
            className={styles.image}
            src={img}
          />
        </a>
      </Link>
      <span className={styles.date}>Add {date}</span>
      <Link href={href}>
        <a className={styles.link}>
          <Htag tag="h4">{title}</Htag>
        </a>
      </Link>
    </li>
  );
};
