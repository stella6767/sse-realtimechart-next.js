import React, { useEffect, useState } from "react";
import { StyledFont, StyledLineCss, StyledCharjsLine } from "./style";
import useUpdateEffect from "../store/hooks/useUpdateEffect";
import RealTimeLineChart from "./RealTimeLineChart";

const LineChart = props => {
  let timestamp = +new Date();
  const [tv, setTv] = useState(null);
  const [mv, setMv] = useState(null);
  const [rr, setRr] = useState(null);
  const [spo2, setSpo2] = useState(null);
  const [rvsArr, setRvsArr] = useState(null);
  const [bool, setbool] = useState(false);
  const [dataX, setDataX] = useState();
  const { d, eventSource } = props;
  const TIME_RANGE_IN_MILLISECONDS = 30000;
  const [ResultData, setResultData] = useState(null);
  useEffect(() => {
    //Custom listener
    eventSource?.addEventListener(d, event => {
      const result = JSON.parse(event.data);
      //console.log("처음 오는 데이터", result);
      clasfy(result);
      setResultData(result);
    });
  }, []);
  const nameList = [d];
  const defaultDataList = nameList.map(name => ({
    name: name,
    data: [],
  }));

  const [dataList, setDataList] = React.useState(defaultDataList);
  const clasfy = measureData => {
    switch (measureData?.parame) {
      case "mv":
        setMv(measureData?.value);
        break;
      case "rr":
        setRr(measureData?.value);
        break;
      case "rvs":
        measureData?.value.split("^").map((r, index) => {
          setRvsArr(Number(r));
          if (index === 0) {
            setDataX(
              +new Date(
                20 +
                  measureData?.startTime.split("-")?.[0] +
                  " " +
                  measureData?.startTime.split("-")?.[1]
              )
            );
            setbool(bool => !bool);
          } else if (index === 1) {
            setDataX(
              +new Date(
                20 +
                  measureData?.endTime.split("-")?.[0] +
                  " " +
                  measureData?.endTime.split("-")?.[1]
              )
            );
            setbool(bool => !bool);
          }
        });
        break;
      case "spo2":
        setSpo2(measureData?.value);
        break;
      case "tv":
        setTv(measureData?.value);
        break;
    }
  };

  useUpdateEffect(() => {
    interval(rvsArr);
    // console.log(dataList);
    // console.log(bool);
    // console.log(
    //   "start",
    //   +new Date(
    //     20 +
    //       ResultData?.startTime.split("-")?.[0] +
    //       " " +
    //       ResultData?.startTime.split("-")?.[1]
    //   )
    // );
    // console.log(
    //   "end",
    //   +new Date(
    //     20 +
    //       ResultData?.endTime.split("-")?.[0] +
    //       " " +
    //       ResultData?.endTime.split("-")?.[1]
    //   )
    // );
  }, [bool]);

  const interval = r => {
    setDataList(
      dataList?.map(val => {
        return {
          name: val.name,
          data: insertChartXY(val.data, r),
        };
      })
    );
  };

  const insertChartXY = (xyData, r) => {
    if (dataList[0]?.data?.length === 2000) {
      return (xyData = xyData.filter((n, index) => {
        return index > 1500;
      }));
    } else {
      return [
        ...xyData,
        {
          x: dataX,
          y: r,
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

            <p>Age:{ResultData?.age}</p>
            <p>ID:{ResultData?.patientUserId}</p>
          </div>
          <div>
            <StyledLineCss>
              <p style={{ fontWeight: "bold", color: "white" }}>RVS</p>

              <RealTimeLineChart
                chartList={dataList}
                range={TIME_RANGE_IN_MILLISECONDS}
                //YData={YmapBig}
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
                  {0 <= tv && tv <= 2000 ? Math.round(tv) : "-"}
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
                  fontSize: "17px",
                }}
              >
                MV
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
                  {0 <= mv && mv <= 100 ? Math.round(mv * 10) / 10 : "-"}
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
                  fontSize: "17px",
                }}
              >
                RR
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
                  {0 <= rr && rr <= 100 ? Math.round(rr) : "-"}
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
              <span
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "25px",
                }}
              >
                SpO
              </span>
              <span
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "15px",
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
                {0 <= spo2 && spo2 <= 100 ? Math.floor(spo2) : "-"}
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
