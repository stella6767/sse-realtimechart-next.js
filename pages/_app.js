import Head from "next/head";
import React from "react";
import wrapper from "../store/configureStore";
import "../styles/globals.css";

const BilabFront = ({ Component }) => (
  <>
    <Head>
      <title>BilabFront</title>
    </Head>
    <Component />
  </>
);

export default wrapper.withRedux(BilabFront);
