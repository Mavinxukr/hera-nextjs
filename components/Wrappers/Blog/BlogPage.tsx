import { Header } from "../../../modules/Header/Header";
import { BlogPreview } from "../../BlogPreview/BlogPreview";
import { BlogsList } from "../../BlogsList/BlogsList";
import { Container } from "../../../modules/Container/Container";
import { Subscribe } from "../../Subscribe/Subscribe";
import { Pagination } from "../../Pagination/Pagination";
import styles from "./BlogPage.module.css";
import { Search } from "../../Search/Search";
import { BlogTabs } from "../../BlogTabs/BlogTabs";

export const BlogPage = (): JSX.Element => {
  const tabs = [
    {
      name: "All",
    },
    {
      name: "Baby Development",
    },
    {
      name: "Baby Names",
    },
    {
      name: "Multiples",
    },
    {
      name: "Baby Symptoms ",
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <div className={styles.navigation}>
          <BlogTabs tabs={tabs} />
          <Search changeHandle={(ev) => console.log(ev.target.value)} />
        </div>
        <BlogsList>
          <BlogPreview
            href={"/"}
            img={"/BlogPeeview.png"}
            date="Add 13 May 2021"
            title="Baby Names"
          />
          <BlogPreview
            href={"/"}
            img={"/BlogPeeview.png"}
            date="Add 13 May 2021"
            title="Baby Names"
          />
          <BlogPreview
            href={"/"}
            img={"/BlogPeeview.png"}
            date="Add 13 May 2021"
            title="Baby Names"
          />
          <BlogPreview
            href={"/"}
            img={"/BlogPeeview.png"}
            date="Add 13 May 2021"
            title="Baby Names"
          />
          <BlogPreview
            href={"/"}
            img={"/BlogPeeview.png"}
            date="Add 13 May 2021"
            title="Baby Names"
          />
        </BlogsList>
        <div className={styles.paginationWrapper}>
          <Pagination
            initialPage={1}
            forcePage={2}
            pageCount={10}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
          />
        </div>

        <Subscribe />
      </Container>
    </>
  );
};
