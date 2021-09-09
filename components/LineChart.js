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
  const { patientData, MV, TV, RR, SPO2, RVS } = props;
  const data = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  useUpdateEffect(() => {
    setMV(MV);
    setTV(TV);
    setRR(RR);
    setSPO2(SPO2);
    setRVS(RVS);
  }, [MV, TV, RR, SPO2, RVS]);

  const [mv, setMV] = useState(null);
  const [tv, setTV] = useState(null);
  const [rr, setRR] = useState(null);
  const [spo2, setSPO2] = useState(null);
  const [rvs, setRVS] = useState(null);
  const [options, setObject] = useState(null);
  const [series, setseries] = useState(null);

  const TIME_RANGE_IN_MILLISECONDS = 30 * 1000;
  const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 1000;
  const ADDING_DATA_RATIO = 0.8;

  const nameList = ["a"];
  const defaultDataList = nameList.map(name => ({
    name: name,
    data: [],
  }));
  const [dataList, setDataList] = useState(defaultDataList);
  React.useEffect(() => {
    const addDataRandomly = data => {
      if (Math.random() < 1 - ADDING_DATA_RATIO) {
        return data;
      }
      return [
        ...data,
        {
          x: new Date(),
          y: data.length * Math.random(),
        },
      ];
    };
    const interval = setInterval(() => {
      setDataList(
        dataList.map(val => {
          return {
            name: val.name,
            data: addDataRandomly(val.data),
          };
        })
      );
    }, ADDING_DATA_INTERVAL_IN_MILLISECONDS);

    return () => clearInterval(interval);
  });

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

            <p>Age:{patientData[0]?.age}</p>
            <p>ID:{patientData[0]?.patientUserId}</p>
          </div>
          <div>
            <StyledLineCss>
              <p style={{ fontWeight: "bold", color: "white" }}>RVS</p>
              {defaultDataList && (
                <RealTimeLineChart
                  dataList={dataList}
                  range={TIME_RANGE_IN_MILLISECONDS}
                ></RealTimeLineChart>
              )}
            </StyledLineCss>
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
                <p style={{ fontSize: "17px" }}>{tv?.parame}</p>
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
                  {tv?.value <= 2000 ? Math.round(tv?.value) : "-"}
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
                <p style={{ fontSize: "17px" }}>{mv?.parame}</p>
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
                  {mv?.value <= 100 ? Math.round(mv?.value * 10) / 10 : "-"}
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
                <p style={{ fontSize: "17px" }}>{rr?.parame}</p>
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
                  {rr?.value <= 100 ? Math.round(rr?.value) : "-"}
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
