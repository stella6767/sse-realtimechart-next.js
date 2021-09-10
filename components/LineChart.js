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
const LineChart = (props) => {
  const date = new Date();

  const { mv, tv, rr, spo2, rvsArr } = props;
  const TIME_RANGE_IN_MILLISECONDS = 30 * 1000;

  const nameList = ["CPM0000"];
  const defaultDataList = nameList.map((name) => ({
    name: name,
    data: [],
  }));

  const [dataList, setDataList] = React.useState(defaultDataList);

  useUpdateEffect(() => {
    console.log("rvsArr", rvsArr);

    let copyArr = rvsArr.map((r) => {
      return (r = { x: date.getMilliseconds(), y: r });
    });
    console.log("copyArr", copyArr);
    //dataList[0].data?.concat(copyArr);

    interval(copyArr);
    //insertChartXY(rvsArr);
  }, [rvsArr]);

  const interval = (rvsArr) => {
    setDataList(
      dataList.map((val) => {
        return {
          name: val.name,
          data: insertChartXY(val.data, rvsArr),
        };
      })
    );
  };

  const removeItems = (arr, item) => {
    for (let i = 0; i < item; i++) {
      arr.shift();
    }
    return arr;
  };

  const insertChartXY = (xyData, rvsAr) => {
    if (dataList[0]?.data?.length === 15) {
      console.log("꽉 참");
      //return [...xyData.slice(0, 5)];
      return (xyData = xyData.filter((n, index) => {
        return index > 4;
      }));
    } else {
      console.log("여기서 rvs 배열 인덱스만큼 추가");
      return (xyData = xyData.concat(rvsAr));
      //return (xyData = rvsAr.concat(xyData));
    }
  };

  // const insertChartXY = (xyData, rvsAr) => {
  //   rvsAr.map((r) => {
  //     if (dataList[0]?.data?.length === 50) {
  //       console.log("꽉 참");
  //       //return [...xyData.slice(1)];
  //     } else {
  //       console.log("여기서 추가");
  //       return [
  //         ...xyData,
  //         {
  //           x: date.getSeconds(),
  //           y: r,
  //         },
  //       ];
  //     }
  //   });
  // };

  const check = () => {
    console.log("체크", dataList);
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
            <div onClick={check}>체크</div>
          </div>
          <div>
            <StyledLineCss>
              <p style={{ fontWeight: "bold", color: "white" }}>RVS</p>

              <RealTimeLineChart
                chartList={dataList}
                range={TIME_RANGE_IN_MILLISECONDS}
              />
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
                {spo2 <= 100 ? Math.floor(spo2) : "-"}
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
