import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import useUpdateEffect from "../store/hooks/useUpdateEffect";
import FooterMenu from "./../components/Footer_Menu";
import LineChart from "./../components/LineChart";

export default function Home() {
  const [listening, setListening] = useState(false);

  const [measureData, setMeasureData] = useState(null);
  const [meventSource, msetEventSource] = useState(undefined);

  const [tv, setTv] = useState(null);
  const [mv, setMv] = useState(null);
  const [rr, setRr] = useState(null);
  const [spo2, setSpo2] = useState(null);
  const [rvs, setRvs] = useState(null);

  // conset [isEnd, setIsEnd] = useState(false);

  let eventSource = undefined;

  useEffect(() => {
    if (!listening) {
      eventSource = new EventSource("http://localhost:8088/sse"); //구독
      console.log("생성 이후: ", eventSource);
      msetEventSource(eventSource);

      //Custom listener
      eventSource.addEventListener("CPM0000", event => {
        const result = JSON.parse(event.data);
        setMeasureData(result);
        //console.log("data1", result);
      });

      eventSource.onopen = event => {
        console.log("connection opened");
      };

      eventSource.onmessage = event => {
        console.log("result", event.data);
        setData(old => [...old, JSON.parse(event.data)]); //setData는 배열에서 새로운 데이터를 하나씩 추가
        //setValue(event.data); //현재 들어온 값에 대한 데이터를 set 해줌

        const sseData = JSON.parse(event.data);
        handleSseData(sseData);
      };

      eventSource.onerror = event => {
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

  useUpdateEffect(() => {
    // setMV(data[data.length - 5]);
    // setTV(data[data.length - 1]);
    // setRR(data[data.length - 4]);
    // setSPO2(data[data.length - 2]);
    //setRVS(data[data.length - 3]);

    console.log("처음 오는 데이터배열", measureData);

    const parame = measureData?.parame;

    switch (parame) {
      case "mv":
        setMv(...mv, ...measureData?.value);
        break;
      case "rr":
        setRr(...rr, ...measureData?.value);
        break;
      case "rvs":
        setRvs(...rvs, ...measureData?.value);
        break;
      case "spo2":
        setSpo2(...spo2, ...measureData?.value);
        break;
      case "tv":
        setTv(...tv, ...measureData?.value);
        break;
    }

    //    setIsEnd(true);

    //setRVS(data?.value);
  }, [measureData]);

  useUpdateEffect(() => {
    console.log("mv", mv);
  }, [mv]);

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
            <LineChart mv={mv} tv={tv} rr={rr} spo2={spo2} rvs={rvs} />
          </div>
        </Content>
        <Footer>
          <FooterMenu></FooterMenu>
        </Footer>
      </Layout>
    </>
  );
}
