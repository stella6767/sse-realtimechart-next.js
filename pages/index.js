import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import useUpdateEffect from "../store/hooks/useUpdateEffect";
import FooterMenu from "./../components/Footer_Menu";
import LineChart from "./../components/LineChart";

export default function Home() {
  const [listening, setListening] = useState(false);

  const [meventSource, msetEventSource] = useState(null);

  const [tv, setTv] = useState(null);
  const [mv, setMv] = useState(null);
  const [rr, setRr] = useState(null);
  const [spo2, setSpo2] = useState(null);

  const [rvsArr, setRvsArr] = useState(null);

  let eventSource = undefined;

  useEffect(() => {
    if (!listening) {
      eventSource = new EventSource("http://localhost:8088/sse"); //구독
      console.log("생성 이후: ", eventSource);
      msetEventSource(eventSource);

      //Custom listener
      eventSource.addEventListener("CPM0000", (event) => {
        const result = JSON.parse(event.data);

        console.log("처음 오는 데이터", result);

        clasfy(result);
      });

      eventSource.onopen = (event) => {
        console.log("connection opened");
      };

      eventSource.onmessage = (event) => {
        console.log("result", event.data);
        setData((old) => [...old, JSON.parse(event.data)]); //setData는 배열에서 새로운 데이터를 하나씩 추가
        //setValue(event.data); //현재 들어온 값에 대한 데이터를 set 해줌

        const sseData = JSON.parse(event.data);
        handleSseData(sseData);
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

  const clasfy = (measureData) => {
    switch (measureData?.parame) {
      case "mv":
        setMv(measureData?.value);
        break;
      case "rr":
        setRr(measureData?.value);
        break;
      case "rvs":
        setRvsArr(measureData?.value.split("^").map(Number));
        break;
      case "spo2":
        setSpo2(measureData?.value);
        break;
      case "tv":
        setTv(measureData?.value);
        break;
    }
  };

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
            <LineChart mv={mv} tv={tv} rr={rr} spo2={spo2} rvsArr={rvsArr} />
          </div>
        </Content>
        <Footer>
          <FooterMenu></FooterMenu>
        </Footer>
      </Layout>
    </>
  );
}
