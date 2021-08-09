import { TermsPage } from "../../components/Wrappers/Terms/TermsPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";

function Terms(): JSX.Element {
  return (
    <>
      <Head>
        <title>HERA APP | Terms</title>
      </Head>
      <TermsPage />
    </>
  );
}

export default withLayout(Terms);
