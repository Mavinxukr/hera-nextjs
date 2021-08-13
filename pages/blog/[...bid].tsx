import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { PostPage } from "../../components/Wrappers/Post/PostPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";
import { IPostItem, PostProps } from "../../interface/post.interface";
import blogs from "../../components/Wrappers/Blog/blogs";
import { useRouter } from "next/router";
import { Loading } from "../../modules/Loading/Loading";

function Post({ post }: PostProps): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{`HERA APP | ${post?.title}`}</title>
      </Head>
      <PostPage post={post} />
    </>
  );
}

export default withLayout(Post);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = blogs.map((post: IPostItem) => post.path);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { bid } = params;

  try {
    const post = blogs.filter((p: IPostItem) => String(p._id) === bid?.[0]);

    if (post.length === 0) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          post: post[0],
        },
      };
    }
  } catch {
    return {
      notFound: true,
    };
  }
};
