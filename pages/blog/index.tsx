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
        <meta
          property="og:title"
          content="NOURISH YOUR MIND, BODY AND SOUL, THROUGHOUT PREGNANCY AND MOTHERHOOD."
        />
        <meta
          property="og:image"
          content="http://theheraapp.com/images/intro.jpg"
        />
        <meta
          name="twitter:image"
          content="http://theheraapp.com/images/intro.jpg"
        />
        <meta
          property="og:image:alt"
          content="NOURISH YOUR MIND, BODY AND SOUL, THROUGHOUT PREGNANCY AND MOTHERHOOD."
        />

        <meta property="og:type" content="product" />
        <meta property="og:description" content="the Hera blog" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        ></meta>
        <meta name="description" content="the Hera blog" />
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
