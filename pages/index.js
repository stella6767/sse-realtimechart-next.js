import { Col, Row } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { memo, useState } from "react";
import { Global } from "./../components/style";
import FooterMenu from "./../components/Footer_Menu";
import LineChart from "./../components/LineChart";
export default function Home() {
  return (
    <>
      <Layout>
        <Content>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              height: "95%",
            }}
          >
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
            <LineChart></LineChart>
          </div>
        </Content>
        <Footer>
          <FooterMenu></FooterMenu>
        </Footer>
      </Layout>
    </>
  );
}
