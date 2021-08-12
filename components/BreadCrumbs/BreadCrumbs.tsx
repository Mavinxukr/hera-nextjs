import Link from "next/link";
import React from "react";
import { CrumbProps, CrumbsProps } from "./BreadCrumbs.props";
import styles from "./BreadCrumbs.module.css";

export const BreadCrumbs = ({ crumbs }: CrumbsProps): JSX.Element => {
  return (
    <ul className={styles.crumbs}>
      {crumbs.map((crumb: CrumbProps, index) => {
        return index + 1 === crumbs.length ? (
          <li key={crumb.id} className={styles.crumb}>
            {crumb.name}
          </li>
        ) : (
          <li key={crumb.id} className={styles.crumb}>
            <Link href={crumb.path}>
              <a className={styles.link}>{crumb.name}</a>
            </Link>
            <span className={styles.split}>/</span>
          </li>
        );
      })}
    </ul>
  );
};
