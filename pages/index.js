import { Button, Col, Row } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { memo, useState } from "react";
import { Global } from "./../components/style";
import FooterMenu from "./../components/Footer_Menu";
import LineChart from "./../components/LineChart";
import { useDispatch } from "react-redux";
import { testRequestAction } from "../store/reducers/test";

export default function Home() {
  const dispatch = useDispatch();
  const Click = () => {
    dispatch(testRequestAction());
  };
  return (
    <>
      <Layout>
        <Button className="btn" onClick={Click}>
          Assign
        </Button>
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
