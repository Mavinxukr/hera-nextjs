import { TermsPage } from "../../components/Wrappers/Terms/TermsPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";

function Terms(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="description" content="the Hera terms and conditions" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        ></meta>
        <title>HERA APP | Terms</title>
      </Head>
      <TermsPage />
    </>
  );
}

export default withLayout(Terms);
