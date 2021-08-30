import { Button, Col, Row } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { memo, useState, useEffect } from "react";
import { Global } from "./../components/style";
import FooterMenu from "./../components/Footer_Menu";
import LineChart from "./../components/LineChart";
import { useDispatch } from "react-redux";
import { testRequestAction } from "../store/reducers/test";
import { PatientRequestAction } from "./../store/reducers/patient";
import { useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  //클릭이벤트 발생 시 dispatch를 통해서 reducer 폴더안에 test.js 에 있는 testRequestAction 액션 함수 실행
  useEffect(() => {
    dispatch(PatientRequestAction());
  }, [dispatch]);
  const StoreData = useSelector(state => state);
  const PatientData = StoreData.patient.data;
  const patientDataMap =
    PatientData &&
    PatientData.map((patientdata, index) => {
      return <LineChart key={index} patientdata={patientdata}></LineChart>;
    });
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
            {patientDataMap}
          </div>
        </Content>
        <Footer>
          <FooterMenu></FooterMenu>
        </Footer>
      </Layout>
    </>
  );
}
