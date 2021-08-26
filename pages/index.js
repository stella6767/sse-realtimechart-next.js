import { Button, Col, Row } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { memo, useState } from "react";
import { Global } from "./../components/style";
import FooterMenu from "./../components/Footer_Menu";
import LineChart from "./../components/LineChart";
import { useDispatch } from "react-redux";
import { testRequestAction } from "../store/reducers/test";
import { useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const Click = () => {
    dispatch(testRequestAction());
  };

  const { data } = useSelector(({ test }) => ({
    data: test.data,
  }));

  return (
    <>
      <Layout>
        <Button className="btn" onClick={Click}>
          Assign
        </Button>
        {data && <div style={{ color: "white" }}>{data.msg}</div>}
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
