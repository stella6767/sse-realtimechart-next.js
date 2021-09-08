import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import useUpdateEffect from "../store/hooks/useUpdateEffect";
import FooterMenu from "./../components/Footer_Menu";
import LineChart from "./../components/LineChart";

export default function Home() {
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);
  const [data9, setData9] = useState([]);
  const [data10, setData10] = useState([]);
  const [data11, setData11] = useState([]);
  const [data12, setData12] = useState([]);
  const [data13, setData13] = useState([]);
  const [data14, setData14] = useState([]);
  const [data15, setData15] = useState([]);
  const [data16, setData16] = useState([]);

  const [value, setValue] = useState(null);
  const [meventSource, msetEventSource] = useState(undefined);

  const [tv, setTV] = useState(null);
  const [mv, setMV] = useState(null);
  const [rr, setRR] = useState(null);
  const [spo2, setSPO2] = useState(null);
  const [rvs, setRVS] = useState(null);

  const [tv2, setTV2] = useState(null);
  const [mv2, setMV2] = useState(null);
  const [rr2, setRR2] = useState(null);
  const [spo22, setSPO22] = useState(null);

  const [tv3, setTV3] = useState(null);
  const [mv3, setMV3] = useState(null);
  const [rr3, setRR3] = useState(null);
  const [spo23, setSPO23] = useState(null);

  const [tv4, setTV4] = useState(null);
  const [mv4, setMV4] = useState(null);
  const [rr4, setRR4] = useState(null);
  const [spo24, setSPO24] = useState(null);

  const [tv5, setTV5] = useState(null);
  const [mv5, setMV5] = useState(null);
  const [rr5, setRR5] = useState(null);
  const [spo25, setSPO25] = useState(null);

  const [tv6, setTV6] = useState(null);
  const [mv6, setMV6] = useState(null);
  const [rr6, setRR6] = useState(null);
  const [spo26, setSPO26] = useState(null);

  const [tv7, setTV7] = useState(null);
  const [mv7, setMV7] = useState(null);
  const [rr7, setRR7] = useState(null);
  const [spo27, setSPO27] = useState(null);

  const [tv8, setTV8] = useState(null);
  const [mv8, setMV8] = useState(null);
  const [rr8, setRR8] = useState(null);
  const [spo28, setSPO28] = useState(null);

  const [tv9, setTV9] = useState(null);
  const [mv9, setMV9] = useState(null);
  const [rr9, setRR9] = useState(null);
  const [spo29, setSPO29] = useState(null);

  const [tv10, setTV10] = useState(null);
  const [mv10, setMV10] = useState(null);
  const [rr10, setRR10] = useState(null);
  const [spo210, setSPO210] = useState(null);

  const [tv11, setTV11] = useState(null);
  const [mv11, setMV11] = useState(null);
  const [rr11, setRR11] = useState(null);
  const [spo211, setSPO211] = useState(null);

  const [tv12, setTV12] = useState(null);
  const [mv12, setMV12] = useState(null);
  const [rr12, setRR12] = useState(null);
  const [spo212, setSPO212] = useState(null);

  const [tv13, setTV13] = useState(null);
  const [mv13, setMV13] = useState(null);
  const [rr13, setRR13] = useState(null);
  const [spo213, setSPO213] = useState(null);

  const [tv14, setTV14] = useState(null);
  const [mv14, setMV14] = useState(null);
  const [rr14, setRR14] = useState(null);
  const [spo214, setSPO214] = useState(null);

  const [tv15, setTV15] = useState(null);
  const [mv15, setMV15] = useState(null);
  const [rr15, setRR15] = useState(null);
  const [spo215, setSPO215] = useState(null);

  const [tv16, setTV16] = useState(null);
  const [mv16, setMV16] = useState(null);
  const [rr16, setRR16] = useState(null);
  const [spo216, setSPO216] = useState(null);

  // const [tv11, setTV11] = useState(null);
  // const [mv11, setMV11] = useState(null);
  // const [rr11, setRR11] = useState(null);
  // const [spo11, setSPO211] = useState(null);

  // const [filter11, setfilterData11] = useState(null);
  // const [filter10, setfilterData10] = useState(null);

  let eventSource = undefined;

  useEffect(() => {
    if (!listening) {
      eventSource = new EventSource("http://localhost:8088/sse"); //구독
      console.log("생성 이후: ", eventSource);
      msetEventSource(eventSource);

      //Custom listener
      eventSource.addEventListener("CPM0000", event => {
        const result = JSON.parse(event.data);
        setData(result);
        console.log("data1", result);
      });

      eventSource.addEventListener("CPM0001", event => {
        const result = JSON.parse(event.data);
        setData2(result);
        console.log("data2", result);
      });

      eventSource.addEventListener("CPM0002", event => {
        const result = JSON.parse(event.data);
        setData3(result);
        console.log("data3", result);
      });

      eventSource.addEventListener("CPM0003", event => {
        const result = JSON.parse(event.data);
        setData4(result);
        console.log("data4", result);
      });
      eventSource.addEventListener("CPM0004", event => {
        const result = JSON.parse(event.data);
        setData5(result);
        console.log("data5", result);
      });
      eventSource.addEventListener("CPM0005", event => {
        const result = JSON.parse(event.data);
        setData6(result);
        console.log("data6", result);
      });
      eventSource.addEventListener("CPM0006", event => {
        const result = JSON.parse(event.data);
        setData7(result);
        console.log("data7", result);
      });
      eventSource.addEventListener("CPM0007", event => {
        const result = JSON.parse(event.data);
        setData8(result);
        console.log("data8", result);
      });
      eventSource.addEventListener("CPM0008", event => {
        const result = JSON.parse(event.data);
        setData9(result);
        console.log("data9", result);
      });
      eventSource.addEventListener("CPM0009", event => {
        const result = JSON.parse(event.data);
        setData10(result);
        console.log("data10", result);
      });
      eventSource.addEventListener("CPM0010", event => {
        const result = JSON.parse(event.data);
        setData11(result);
        console.log("data11", result);
      });
      eventSource.addEventListener("CPM0011", event => {
        const result = JSON.parse(event.data);
        setData12(result);
        console.log("data12", result);
      });
      eventSource.addEventListener("CPM0012", event => {
        const result = JSON.parse(event.data);
        setData13(result);
        console.log("data13", result);
      });
      eventSource.addEventListener("CPM0013", event => {
        const result = JSON.parse(event.data);
        setData14(result);
        console.log("data14", result);
      });
      eventSource.addEventListener("CPM0014", event => {
        const result = JSON.parse(event.data);
        setData15(result);
        console.log("data15", result);
      });
      eventSource.addEventListener("CPM0015", event => {
        const result = JSON.parse(event.data);
        setData16(result);
        console.log("data16", result);
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

  const handleSseData = sseData => {
    // let firstValue = Object.values(sseData)[0];
    // console.log("sessionId", firstValue);
    const sid = sseData?.sid;
    console.log("sid", sid);
  };

  useUpdateEffect(() => {
    setMV(data[data.length - 5]);
    setTV(data[data.length - 1]);
    setRR(data[data.length - 4]);
    setSPO2(data[data.length - 2]);
    setRVS(data[data.length - 3]);
  }, [data]);

  useUpdateEffect(() => {
    setMV2(data2[data2.length - 5]);
    setTV2(data2[data2.length - 1]);
    setRR2(data2[data2.length - 4]);
    setSPO22(data2[data2.length - 2]);
  }, [data2]);

  useUpdateEffect(() => {
    setMV3(data3[data3.length - 5]);
    setTV3(data3[data3.length - 1]);
    setRR3(data3[data3.length - 4]);
    setSPO23(data3[data3.length - 2]);
  }, [data3]);

  useUpdateEffect(() => {
    setMV4(data4[data4.length - 5]);
    setTV4(data4[data4.length - 1]);
    setRR4(data4[data4.length - 4]);
    setSPO24(data4[data4.length - 2]);
  }, [data4]);

  useUpdateEffect(() => {
    setMV5(data5[data5.length - 5]);
    setTV5(data5[data5.length - 1]);
    setRR5(data5[data5.length - 4]);
    setSPO25(data5[data5.length - 2]);
  }, [data5]);

  useUpdateEffect(() => {
    setMV6(data6[data6.length - 5]);
    setTV6(data6[data6.length - 1]);
    setRR6(data6[data6.length - 4]);
    setSPO26(data6[data6.length - 2]);
  }, [data6]);

  useUpdateEffect(() => {
    setMV7(data7[data7.length - 5]);
    setTV7(data7[data7.length - 1]);
    setRR7(data7[data7.length - 4]);
    setSPO27(data7[data7.length - 2]);
  }, [data7]);

  useUpdateEffect(() => {
    setMV8(data8[data8.length - 5]);
    setTV8(data8[data8.length - 1]);
    setRR8(data8[data8.length - 4]);
    setSPO28(data8[data8.length - 2]);
  }, [data8]);

  useUpdateEffect(() => {
    setMV9(data9[data9.length - 5]);
    setTV9(data9[data9.length - 1]);
    setRR9(data9[data9.length - 4]);
    setSPO29(data9[data9.length - 2]);
  }, [data9]);

  useUpdateEffect(() => {
    setMV10(data10[data10.length - 5]);
    setTV10(data10[data10.length - 1]);
    setRR10(data10[data10.length - 4]);
    setSPO210(data10[data10.length - 2]);
  }, [data10]);

  useUpdateEffect(() => {
    setMV11(data11[data11.length - 5]);
    setTV11(data11[data11.length - 1]);
    setRR11(data11[data11.length - 4]);
    setSPO211(data11[data11.length - 2]);
  }, [data11]);

  useUpdateEffect(() => {
    setMV12(data12[data12.length - 5]);
    setTV12(data12[data12.length - 1]);
    setRR12(data12[data12.length - 4]);
    setSPO212(data12[data12.length - 2]);
  }, [data12]);

  useUpdateEffect(() => {
    setMV13(data13[data13.length - 5]);
    setTV13(data13[data13.length - 1]);
    setRR13(data13[data13.length - 4]);
    setSPO213(data13[data13.length - 2]);
  }, [data13]);

  useUpdateEffect(() => {
    setMV14(data14[data14.length - 5]);
    setTV14(data14[data14.length - 1]);
    setRR14(data14[data14.length - 4]);
    setSPO214(data14[data14.length - 2]);
  }, [data14]);

  useUpdateEffect(() => {
    setMV15(data15[data15.length - 5]);
    setTV15(data15[data15.length - 1]);
    setRR15(data15[data15.length - 4]);
    setSPO215(data15[data15.length - 2]);
  }, [data15]);

  useUpdateEffect(() => {
    setMV16(data16[data16.length - 5]);
    setTV16(data16[data16.length - 1]);
    setRR16(data16[data16.length - 4]);
    setSPO216(data16[data16.length - 2]);
  }, [data16]);

  //데이터 필터링
  // useUpdateEffect(() => {
  //   console.log("data: ", data);
  //   const filterData10 = data.filter(data => {
  //     return data.sid === "patient10_20210826_114616";
  //   });
  //   const filterData11 = data.filter(data => {
  //     return data.sid === "patient11_20210826_114616";
  //   });
  //   setfilterData10(filterData10);
  //   setfilterData11(filterData11);
  // }, [data]);
  // //filter10
  // useUpdateEffect(() => {
  //   setMV(filter10[filter10.length - 5]);
  //   setTV(filter10[filter10.length - 1]);
  //   setRR(filter10[filter10.length - 4]);
  //   setSPO2(filter10[filter10.length - 2]);
  // }, [filter10]);
  // //filter11
  // useUpdateEffect(() => {
  //   setMV11(filter11[filter11.length - 5]);
  //   setTV11(filter11[filter11.length - 1]);
  //   setRR11(filter11[filter11.length - 4]);
  //   setSPO211(filter11[filter11.length - 2]);
  // }, [filter11]);

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
            <LineChart
              patientData={data}
              MV={mv}
              TV={tv}
              RR={rr}
              SPO2={spo2}
              RVS={rvs}
            />
            <LineChart
              patientData={data2}
              MV={mv2}
              TV={tv2}
              RR={rr2}
              SPO2={spo22}
              RVS={rvs}
            />

            <LineChart
              patientData={data3}
              MV={mv3}
              TV={tv3}
              RR={rr3}
              SPO2={spo23}
              RVS={rvs}
            />

            <LineChart
              patientData={data4}
              MV={mv4}
              TV={tv4}
              RR={rr4}
              SPO2={spo24}
              RVS={rvs}
            />

            <LineChart
              patientData={data5}
              MV={mv5}
              TV={tv5}
              RR={rr5}
              SPO2={spo25}
              RVS={rvs}
            />

            <LineChart
              patientData={data6}
              MV={mv6}
              TV={tv6}
              RR={rr6}
              SPO2={spo26}
              RVS={rvs}
            />

            <LineChart
              patientData={data7}
              MV={mv7}
              TV={tv7}
              RR={rr7}
              SPO2={spo27}
              RVS={rvs}
            />

            <LineChart
              patientData={data8}
              MV={mv8}
              TV={tv8}
              RR={rr8}
              SPO2={spo28}
              RVS={rvs}
            />

            <LineChart
              patientData={data9}
              MV={mv9}
              TV={tv9}
              RR={rr9}
              SPO2={spo29}
              RVS={rvs}
            />

            <LineChart
              patientData={data10}
              MV={mv10}
              TV={tv10}
              RR={rr10}
              SPO2={spo210}
              RVS={rvs}
            />

            <LineChart
              patientData={data11}
              MV={mv11}
              TV={tv11}
              RR={rr11}
              SPO2={spo211}
              RVS={rvs}
            />

            <LineChart
              patientData={data12}
              MV={mv12}
              TV={tv12}
              RR={rr12}
              SPO2={spo212}
              RVS={rvs}
            />

            <LineChart
              patientData={data13}
              MV={mv13}
              TV={tv13}
              RR={rr13}
              SPO2={spo213}
              RVS={rvs}
            />

            <LineChart
              patientData={data14}
              MV={mv14}
              TV={tv14}
              RR={rr14}
              SPO2={spo214}
              RVS={rvs}
            />

            <LineChart
              patientData={data15}
              MV={mv15}
              TV={tv15}
              RR={rr15}
              SPO2={spo215}
              RVS={rvs}
            />
            <LineChart
              patientData={data16}
              MV={mv16}
              TV={tv16}
              RR={rr16}
              SPO2={spo216}
              RVS={rvs}
            />

            {/* <LineChart
              patientData={data}
              MV={tv11}
              TV={mv11}
              RR={rr11}
              SPO2={spo11}
            /> */}
          </div>
        </Content>
        <Footer>
          <FooterMenu></FooterMenu>
        </Footer>
      </Layout>
    </>
  );
}
