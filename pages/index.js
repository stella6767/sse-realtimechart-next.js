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
        <Global />
        <Content>
          <Row>
            <Col xs={1} sm={1} md={2} lg={2} xl={3}></Col>
            <Col xs={22} sm={22} md={20} lg={20} xl={19}>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
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
            </Col>
            <Col xs={1} sm={1} md={2} lg={2} xl={3}></Col>
          </Row>
        </Content>
        <Footer>
          <FooterMenu></FooterMenu>
        </Footer>
      </Layout>
    </>
  );
}
