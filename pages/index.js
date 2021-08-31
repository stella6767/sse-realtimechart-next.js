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
import useUpdateEffect from "../store/hooks/useUpdateEffect";

export default function Home() {
  const dispatch = useDispatch();
  //클릭이벤트 발생 시 dispatch를 통해서 reducer 폴더안에 test.js 에 있는 testRequestAction 액션 함수 실행
  useEffect(() => {
    dispatch(PatientRequestAction());
  }, [dispatch]);
  const StoreData = useSelector(state => state);
  const PatientData = StoreData.patient.data;
  console.log(PatientData);
  const patientDataMap =
    PatientData &&
    PatientData.map((patientdata, index) => {
      return <LineChart key={index} patientdata={patientdata}></LineChart>;
    });
  // const [listening, setListening] = useState(false);
  // const [data, setData] = useState([]);
  // const [value, setValue] = useState(null);
  // const [meventSource, msetEventSource] = useState(undefined);
  // let eventSource = undefined;
  // useEffect(() => {
  //   console.log("listening", listening);
  //   console.log("event", eventSource);

  //   if (!listening) {
  //     eventSource = new EventSource("http://bilabcsapi.lunalabs.net/sse"); //구독
  //     //eventSource = new EventSource("http://localhost:8088/sse"); //구독
  //     console.log("생성 이후: ", eventSource);
  //     msetEventSource(eventSource);

  //     //Custom listener
  //     // eventSource.addEventListener("Progress", (event) => {
  //     //   const result = JSON.parse(event.data);
  //     //   console.log("received:", result);
  //     //   setData(result)
  //     // });

  //     eventSource.onopen = event => {
  //       console.log("connection opened");
  //     };

  //     eventSource.onmessage = event => {
  //       console.log("result", event.data);
  //       setData(old => [...old, event.data]); //setData는 배열에서 새로운 데이터를 하나씩 추가
  //       setValue(event.data); //현재 들어온 값에 대한 데이터를 set 해줌
  //     };

  //     eventSource.onerror = event => {
  //       console.log(event.target.readyState);
  //       if (event.target.readyState === EventSource.CLOSED) {
  //         console.log("eventsource closed (" + event.target.readyState + ")");
  //       }
  //       eventSource.close();
  //     };
  //     setListening(true);
  //   }

  //   return () => {
  //     if (eventSource) {
  //       eventSource.close();
  //       console.log("eventsource closed");
  //     }
  //   };
  // }, []);

  // useUpdateEffect(() => {
  //   console.log("meventSource", meventSource);
  // }, [meventSource]);

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
