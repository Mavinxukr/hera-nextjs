import { BlogPage } from "../../components/Wrappers/Blog/BlogPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";

function Blog(): JSX.Element {
  return (
    <>
      <Head>
        <title>HERA APP | Blog</title>
      </Head>
      <BlogPage />
    </>
  );
}

export default withLayout(Blog);
