import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { PostPage } from "../../components/Wrappers/Post/PostPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";
import { PostProps } from "../../interface/post.interface";

function Post({ post }: PostProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{`HERA APP | ${post.title}`}</title>
      </Head>
      <PostPage post={post} />
    </>
  );
}

export default withLayout(Post);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = ["/blog/qwe"];

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

  try {
    const post = {
      preview: "/BlogPeeview.png",
      title: "11 Questions To Ask Yourself When Choosing A Baby Name",
      article: [
        {
          id: 1,
          title: "What’s my style?",
          text: `The first thing expectant parents will want to figure out is if they gravitate toward names that are unusual and interesting or classic and popular.\n
            “I ask my clients to begin by observing name styles even before they need to choose ― listen in stores, restaurants and parks as parents call to their children,” Suzanne said. “I ask parents to pay attention to their own visceral reaction to name styles and ask, ‘Am I drawn to contemporary names like Beckett and Harper? Do I feel more comfortable with familiar classics like Elizabeth or William?’”\n
            Linda Rosenkrantz and Pamela Redmond Satran of Nameberry said parents should ask themselves if they want a name that has won universal approval or one that is more unusual. “Ask, ‘Have I considered the disadvantages of both ― having a name that might be shared with several classmates, or one that is difficult to recognize, spell and pronounce?’” the Nameberry founders wrote in an email. “The sweet spot is familiar but not epidemic, distinctive but not outlandish.”`,
          img: "/parent.png",
        },
        {
          id: 2,
          title: "Just how popular is this name I like?",
          text: `The first thing expectant parents will want to figure out is if they gravitate toward names that are unusual and interesting or classic and popular.\n

            “I ask my clients to begin by observing name styles even before they need to choose ― listen in stores, restaurants and parks as parents call to their children,” Suzanne said. “I ask parents to pay attention to their own visceral reaction to name styles and ask, ‘Am I drawn to contemporary names like Beckett and Harper? Do I feel more comfortable with familiar classics like Elizabeth or William?’”\n

            Linda Rosenkrantz and Pamela Redmond Satran of Nameberry said parents should ask themselves if they want a name that has won universal approval or one that is more unusual. “Ask, ‘Have I considered the disadvantages of both ― having a name that might be shared with several classmates, or one that is difficult to recognize, spell and pronounce?’” the Nameberry founders wrote in an email. “The sweet spot is familiar but not epidemic, distinctive but not outlandish.”`,
          img: "/family.png",
        },
      ],
    };

    return {
      props: {
        post,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
