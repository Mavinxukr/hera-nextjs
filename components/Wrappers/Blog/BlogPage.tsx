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
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Baby Development",
    },
    {
      id: 3,
      name: "Baby Names",
    },
    {
      id: 4,
      name: "Multiples",
    },
    {
      id: 5,
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
            href={"/blog/qwe"}
            img={"/BlogPeeview.png"}
            date="Add 13 May 2021"
            title="Baby Names"
          />
          <BlogPreview
            href={"/qwe"}
            img={"/BlogPeeview.png"}
            date="Add 13 May 2021"
            title="Baby Names"
          />
          <BlogPreview
            href={"/blog/qwe"}
            img={"/BlogPeeview.png"}
            date="Add 13 May 2021"
            title="Baby Names"
          />
          <BlogPreview
            href={"/blog/qwe"}
            img={"/BlogPeeview.png"}
            date="Add 13 May 2021"
            title="Baby Names"
          />
          <BlogPreview
            href={"/blog/qwe"}
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
