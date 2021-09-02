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
import _ from "lodash";

export default function Home() {
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const [meventSource, msetEventSource] = useState(undefined);

  const [tv, setTV] = useState(null);
  const [mv, setMV] = useState(null);
  const [rr, setRR] = useState(null);
  const [spo2, setSPO2] = useState(null);

  let eventSource = undefined;
  useEffect(() => {
    console.log("listening", listening);
    console.log("event", eventSource);

    if (!listening) {
      //eventSource = new EventSource("http://bilabcsapi.lunalabs.net/sse"); //구독
      eventSource = new EventSource("http://localhost:8088/sse"); //구독
      console.log("생성 이후: ", eventSource);
      msetEventSource(eventSource);

      //Custom listener
      // eventSource.addEventListener("Progress", (event) => {
      //   const result = JSON.parse(event.data);
      //   console.log("received:", result);
      //   setData(result)
      // });

      eventSource.onopen = (event) => {
        console.log("connection opened");
      };

      eventSource.onmessage = (event) => {
        console.log("result", event.data);
        setData((old) => [...old, JSON.parse(event.data)]); //setData는 배열에서 새로운 데이터를 하나씩 추가
        //setValue(event.data); //현재 들어온 값에 대한 데이터를 set 해줌

        handleSseData(JSON.parse(event.data));
      };

      eventSource.onerror = (event) => {
        console.log(event.target.readyState);
        if (event.target.readyState === EventSource.CLOSED) {
          console.log("eventsource closed (" + event.target.readyState + ")");
        }
        eventSource.close();
      };
      setListening(true);
    }

    return () => {
      if (eventSource) {
        eventSource.close();
        console.log("eventsource closed");
      }
    };
  }, []);

  const handleSseData = (sseData) => {
    let firstKey = Object.keys(sseData)[0];
    let firstValue = Object.values(sseData)[0];

    let anotherFirst = Object.values(sseData)[0];

    let first = _.findIndex(sseData, function (data) {
      return data.sid;
    });
    console.log("sessionId", firstKey);
    console.log("sessionId", firstValue);
  };

  useUpdateEffect(() => {
    setMV(data[data.length - 5]);
    setTV(data[data.length - 1]);
    setRR(data[data.length - 4]);
    setSPO2(data[data.length - 2]);
  }, [data]);

  useUpdateEffect(() => {
    console.log("data: ", data);
  }, [data]);

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
            {data && (
              <LineChart
                patientData={data}
                MV={mv}
                TV={tv}
                RR={rr}
                SPO2={spo2}
              />
            )}
          </div>
        </Content>
        <Footer>
          <FooterMenu></FooterMenu>
        </Footer>
      </Layout>
    </>
  );
}
