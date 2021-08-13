import Head from "next/head";
import React from "react";
import { Error } from "../modules/Error/Error";
import { Header } from "../modules/Header/Header";
import { withLayout } from "../modules/Layout";

export function Error404(): JSX.Element {
  return (
    <>
      <Head>
        <title>{`HERA APP | 404`}</title>
      </Head>
      <Header></Header>
      <Error />
    </>
  );
}

export default withLayout(Error404);
