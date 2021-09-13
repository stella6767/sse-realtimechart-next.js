import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import useUpdateEffect from "../store/hooks/useUpdateEffect";
import FooterMenu from "./../components/Footer_Menu";
import LineChart from "./../components/LineChart";

export default function Home() {
  const [listening, setListening] = useState(false);
  const [meventSource, msetEventSource] = useState(null);
  let eventSource = undefined;

  useEffect(() => {
    if (!listening) {
      eventSource = new EventSource("http://localhost:8088/sse"); //구독
      console.log("생성 이후: ", eventSource);
      msetEventSource(eventSource);

      eventSource.onopen = event => {
        console.log("connection opened");
      };

      eventSource.onmessage = event => {
        console.log("result", event.data);
        setData(old => [...old, JSON.parse(event.data)]); //setData는 배열에서 새로운 데이터를 하나씩 추가
        //setValue(event.data); //현재 들어온 값에 대한 데이터를 set 해줌

        const sseData = JSON.parse(event.data);
        //handleSseData(sseData);
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

  const [deviceArr, setDeviceArr] = useState([
    "CPM0000",
    "CPM0001",
    "CPM0002",
    "CPM0003",
    "CPM0004",
    "CPM0005",
    "CPM0006",
    "CPM0007",
    "CPM0008",
    "CPM0009",
    "CPM0010",
    "CPM0011",
    "CPM0012",
    "CPM0013",
    "CPM0014",
    "CPM0015",
  ]);

  return (
    <>
      <Layout>
        <Content>
          {meventSource && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                width: "100%",
                height: "95%",
              }}
            >
              {/* <LineChart mv={mv} tv={tv} rr={rr} spo2={spo2} rvsArr={rvsArr} /> */}

              {deviceArr.map((d, index) => (
                <LineChart key={index} d={d} eventSource={meventSource} />
              ))}
            </div>
          )}
        </Content>
        <Footer>
          <FooterMenu></FooterMenu>
        </Footer>
      </Layout>
    </>
  );
}
