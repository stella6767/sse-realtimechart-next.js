import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import withReduxSaga from "next-redux-saga";
import "../styles/globals.css";

import wrapper from "../store/configureStore";

const BilabFront = ({ Component }) => (
  <>
    <Head>
      <title>BilabFront</title>
    </Head>
    <Component />
  </>
);

// BilabFront.propTypes = {
//   Component: PropTypes.elementType.isRequired,
// };

export function reportWebVitals(metric) {
  console.log(metric);
}

export default wrapper.withRedux(withReduxSaga(BilabFront));
