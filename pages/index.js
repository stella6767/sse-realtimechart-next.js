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
import HashMap from "hashmap";

export default function Home() {
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const [meventSource, msetEventSource] = useState(undefined);

  const [tv, setTV] = useState(null);
  const [mv, setMV] = useState(null);
  const [rr, setRR] = useState(null);
  const [spo2, setSPO2] = useState(null);
  const [rvs, setRVS] = useState(null);

  const [data2, setData2] = useState([]);

  let eventSource = undefined;

  let map = new HashMap();

  const [patientData, setPatientData] = useState({
    sid: null,
    patientUserId: null,
    valueUnit: null,
    mv: null,
    rr: null,
    rvs: null,
    age: null,
  });

  useEffect(() => {
    console.log("listening", listening);
    console.log("event", eventSource);

    if (!listening) {
      //eventSource = new EventSource("http://bilabcsapi.lunalabs.net/sse"); //구독
      eventSource = new EventSource("http://localhost:8088/sse"); //구독
      console.log("생성 이후: ", eventSource);
      msetEventSource(eventSource);

      //Custom listener
      // eventSource.addEventListener("patient10_20210826_114616", (event) => {
      //   const result = JSON.parse(event.data);
      //   console.log("custom received:", result);
      //   //setData(result)

      //   const sid = JSON.parse(event.data)?.sid;
      //   //hashmap에 데이터를 넣는다.
      //   console.log("sid", sid);
      // });

      eventSource.onopen = (event) => {
        console.log("connection opened");
      };

      eventSource.onmessage = (event) => {
        console.log("result", event.data);
        setData((old) => [...old, JSON.parse(event.data)]); //setData는 배열에서 새로운 데이터를 하나씩 추가
        //setValue(event.data); //현재 들어온 값에 대한 데이터를 set 해줌

        handleSseData(JSON.parse(event.data));

        const parseData = JSON.parse(event.data);
        const sid = parseData?.sid;
        //map.set(sid, addHashMap(JSON.parse(event.data)));

        const patientData2 = {
          patientUserId: parseData?.patientUserId,
          mv: parseData?.parame,
          rr: parseData?.parame,
          rvs: parseData?.parame,
          age: parseData?.age,
        };

        const obj = { ...patientData, ...parseData }; //덮어씌우기

        console.log("obj", obj);

        handleUpdate(obj?.patientUserId, obj);

        // const modifiedArray = data2.map((item) =>
        //   item?.patientUserId !== obj?.patientUserId
        //     ? { ...item, ...obj2 } // id 가 일치하지 않으면, 새 객체를 만들고, 기존의 내용을 집어넣고 원하는 값 덮어쓰기
        //     : item
        // ); // 바꿀 필요 없는것들은 그냥 기존 값 사용

        // const modifiedArray = data2.filter((item) => {
        //   return item?.patientUserId !== obj?.patientUserId;
        // });

        // console.log("modifiedArray", modifiedArray);

        const objb = { ...patientData, patientData };

        //setPatientData((old) => ({ ...old, ...obj }));
        setPatientData(obj);
        // setData2([...data2, ...modifiedArray]);

        //map.set(sid, "sss");
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

  const handleUpdate = (id, data) => {
    console.log("id: ", id);
    console.log("daataaa: ", data);

    setData2({
      data2: data2.map(
        (info) =>
          id === info?.id
            ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
            : info // 기존의 값을 그대로 유지
      ),
    });
  };

  useUpdateEffect(() => {
    console.log("data2: ", data2);
    //   console.log("patientData", patientData);
  }, [data2]);

  const checkMapData = () => {
    console.log("map: ", map.get("patient10_20210826_114616"));
  };

  const handleSseData = (sseData) => {
    let firstKey = Object.keys(sseData)[0];
    let firstValue = Object.values(sseData)[0];

    let parame = sseData?.parame;

    let first = _.findIndex(sseData, function (data) {
      return data.sid;
    });
    console.log("sessionId", firstKey);
    console.log("sessionId", firstValue);

    switch (parame) {
      case "mv":
        setMV(sseData);
        break;
      case "tv":
        setTV(sseData);
        break;
      case "rvs":
        setRVS(sseData);
        break;
      case "rr":
        setRR(sseData);
        break;
      case "spo2":
        setSPO2(sseData);
        break;

      default:
        break;
    }

    // setTV();
    // setRR();
    // setSPO2();
  };

  useUpdateEffect(() => {
    console.log("data: ", data);
  }, [data]);

  return (
    <>
      <Layout>
        <Content>
          <button onClick={checkMapData}>체크</button>
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
