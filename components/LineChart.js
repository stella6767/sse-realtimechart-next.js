import React, { useEffect, useState } from "react";
import { StyledFont, StyledLineCss, StyledCharjsLine } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { PatientRequestAction } from "./../store/reducers/patient";
import useUpdateEffect from "../store/hooks/useUpdateEffect";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import RealTimeLineChart from "./RealTimeLineChart";
const LineChart = props => {
  const date = new Date();

  const { mv, tv, rr, spo2, rvs } = props;

  const TIME_RANGE_IN_MILLISECONDS = 30 * 1000;
  const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 500;

  const [splitArr, setSplitArr] = useState(null);
  //const splitArr = RVS?.value.split("^").map(Number);
  // const splitArr = null;

  useEffect(() => {
    setSplitArr(rvs?.split("^").map(Number));
    // console.log("default", dataList);
  }, []);

  useUpdateEffect(() => {
    console.log("rvs", rvs);
    setSplitArr(rvs?.split("^").map(Number));
  }, [rvs]);

  //  const PatientList = [RVS?.patientUserId];
  // const defaultDataList = PatientList.map(PatientID => ({
  //   PatientID: PatientID,
  //   data: [],
  // }));

  // const [dataList, setDataList] = useState(defaultDataList);

  // useUpdateEffect(() => {
  //   //console.log("check1", RVS);

  //   //5개씩 체인지가 되겠네, 덮어씌어지겠네...
  //   setSplitArr(RVS?.value.split("^").map(Number));

  //   console.log("default", dataList);
  //   console.log("splitArray", splitArr);

  //   interval();
  // }, [dataList, RVS]);

  // const interval = () => {
  //   setDataList(
  //     dataList.map(val => {
  //       return {
  //         PatientID: val.PatientID,
  //         data: insertChartXY(val.data),
  //       };
  //     })
  //   );
  // };

  const insertChartXY = data => {
    if (dataList[0]?.data.length === 50) {
      return [...data.slice(1)];
    } else {
      return [
        ...data,
        {
          x: date.getSeconds(),
          y: splitArr?.[Math.floor(Math.random() * 3)],
        },
      ];
    }
  };

  return (
    <>
      <div
        className="LineChartWrapper"
        style={{
          display: "flex",
          height: "9rem",
        }}
      >
        <div className="LineClass">
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              border: "solid rgb(16, 16, 20)",
            }}
          >
            <p style={{ fontWeight: "bold" }}>bed1</p>
            {/* 
            <p>Age:{patientData[0]?.age}</p>
            <p>ID:{patientData[0]?.patientUserId}</p> */}
          </div>
          <div>
            {/* <StyledLineCss>
              <p style={{ fontWeight: "bold", color: "white" }}>RVS</p>
              {defaultDataList && (
                <RealTimeLineChart
                  dataList={dataList}
                  range={TIME_RANGE_IN_MILLISECONDS}
                ></RealTimeLineChart>
              )}
            </StyledLineCss> */}
          </div>
        </div>
        <div className="LineData" style={{ width: "100%" }}>
          <div
            style={{
              backgroundColor: "red",
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Alarm Comment
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div className="LineDiv">
              <div
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                <p style={{ fontSize: "17px" }}>TV</p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  style={{
                    color: "rgb(183, 183, 183)",
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginBottom: "0px",
                  }}
                >
                  {tv <= 2000 ? Math.round(tv) : "-"}
                </p>
                <p
                  style={{
                    color: "rgb(183, 183, 183)",
                    fontWeight: "bold",
                    marginTop: "20%",
                  }}
                >
                  mL
                </p>
              </div>
            </div>
            <div className="LineDiv">
              <p
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                <p style={{ fontSize: "17px" }}>MV</p>
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginBottom: "0px",
                    textAlign: "center",
                  }}
                >
                  {mv <= 100 ? Math.round(mv * 10) / 10 : "-"}
                </p>

                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "20%",
                  }}
                >
                  L/min
                </p>
              </div>
            </div>
            <div className="LineDiv">
              <p
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                <p style={{ fontSize: "17px" }}>RR</p>
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  style={{
                    color: "rgb(50, 197, 255)",
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginBottom: "0px",
                    textAlign: "center",
                  }}
                >
                  {rr <= 100 ? Math.round(rr) : "-"}
                </p>

                <p
                  style={{
                    color: "rgb(50, 197, 255)",
                    fontWeight: "bold",
                    marginTop: "20%",
                  }}
                >
                  bpm
                </p>
              </div>
            </div>
          </div>
          <div
            className="LineBottomDiv"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                SPO
              </p>
              <span
                style={{
                  marginTop: "1rem",
                  fontWeight: "bold",
                  fontSize: "17px",
                }}
              >
                2
              </span>
            </div>
            <div style={{ display: "flex", marginRight: "12%" }}>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "rgb(102, 255, 255)",
                }}
              >
                {spo2?.value <= 100 ? Math.floor(spo2?.value) : "-"}
              </p>
              <p
                style={{
                  marginTop: "30%",
                  marginLeft: "10%",
                  fontWeight: "bold",
                }}
              >
                %
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LineChart;
