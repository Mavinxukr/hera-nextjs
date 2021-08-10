import React from "react";
import ReactPaginate from "react-paginate";
import { IPaginate } from "./Pagination.props";
import cn from "classnames";
import styles from "./Pagination.module.css";
import ArrowLeft from "../../public/svg/arrow-left.svg";
import ArrowRight from "../../public/svg/arrow-right.svg";

export const Pagination: React.FC<IPaginate> = ({
  marginPagesDisplayed,
  pageRangeDisplayed,
  pageCount,
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(className, styles.pagination)}>
      <ReactPaginate
        {...props}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCount}
        previousLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        breakClassName={styles.breakClassName}
        breakLinkClassName={styles.breakLinkClassName}
        containerClassName={styles.containerClassName}
        pageClassName={styles.pageClassName}
        pageLinkClassName={styles.pageLinkClassName}
        activeClassName={styles.activeClassName}
        activeLinkClassName={styles.activeLinkClassName}
        previousClassName={styles.previousClassName}
        nextClassName={styles.nextClassName}
        previousLinkClassName={styles.previousLinkClassName}
        nextLinkClassName={styles.nextLinkClassName}
        disabledClassName={styles.disabledClassName}
      />
    </div>
  );
};
