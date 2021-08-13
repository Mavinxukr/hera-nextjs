import { BlogPage } from "../../components/Wrappers/Blog/BlogPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";
import { BlogProps } from "../../interface/blog.interface";

import { GetServerSideProps } from "next";
// import axios from "axios";
import blogs from "../../components/Wrappers/Blog/blogs";

function Blog({ posts }: BlogProps): JSX.Element {
  return (
    <>
      <Head>
        <title>HERA APP | Blog</title>
      </Head>
      <BlogPage posts={posts} />
    </>
  );
}

export default withLayout(Blog);

export const getServerSideProps: GetServerSideProps<BlogProps> = async () => {
  try {
    // const resposne = await axios.get("/get-posts", query);
    // const posts = await resposne.data;
    const posts = blogs;
    return {
      props: {
        posts,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
