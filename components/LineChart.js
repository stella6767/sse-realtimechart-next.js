import React, { useEffect, useState, useCallback } from "react";
import { StyledFont, StyledLineCss, StyledCharjsLine } from "./style";
import useUpdateEffect from "../store/hooks/useUpdateEffect";
import RealTimeLineChart from "./RealTimeLineChart";
const LineChart = (props) => {
  //let timestamp = +new Date();
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
    eventSource?.addEventListener(d, (event) => {
      const result = JSON.parse(event.data);
      //console.log("처음 오는 데이터", result);
      clasfy(result);
      setResultData(result);
    });
  }, []);
  const nameList = [d];
  const defaultDataList = nameList.map((name) => ({
    name: name,
    data: [],
  }));

  const [dataList, setDataList] = React.useState(defaultDataList);
  const clasfy = (measureData) => {
    switch (measureData?.parame) {
      case "mv":
        setMv(measureData?.value);
        break;
      case "rr":
        setRr(measureData?.value);
        break;
      case "rvs":
        console.log(
          "start:",
          measureData?.startTime,
          "end:",
          measureData?.endTime,
          "rvs:",
          measureData?.value
        );
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
            setbool((bool) => !bool);
          } else if (index === 1) {
            setDataX(
              +new Date(
                20 +
                  measureData?.endTime.split("-")?.[0] +
                  " " +
                  measureData?.endTime.split("-")?.[1]
              )
            );
            setbool((bool) => !bool);
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
  }, [bool]);

  const interval = (r) => {
    setDataList(
      dataList?.map((val) => {
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
        return index > 1000;
      }));
    } else {
      console.log("X,Y:", dataList);

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
          <div className="patientInfoDiv">
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
          <div className="AlarmCommentDiv">Alarm Comment</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div className="LineDiv">
              <div className="tvText">
                <p>TV</p>
              </div>
              <div className="tvFlexDiv">
                <p className="tvValue">
                  {0 <= tv && tv <= 2000 ? Math.round(tv) : "-"}
                </p>
                <p className="tvTextMl">mL</p>
              </div>
            </div>
            <div className="LineDiv">
              <p className="mvText">MV</p>
              <div className="mvFlexDiv">
                <p className="mvValue">
                  {0 <= mv && mv <= 100 ? Math.round(mv * 10) / 10 : "-"}
                </p>

                <p className="mvTextLmin">L/min</p>
              </div>
            </div>
            <div className="LineDiv">
              <p className="rrText">RR</p>
              <div className="rrFlexDiv">
                <p className="rrValue">
                  {0 <= rr && rr <= 100 ? Math.round(rr) : "-"}
                </p>
                <p className="rrBpm">bpm</p>
              </div>
            </div>
          </div>
          <div className="LineBottomDiv">
            <div className="Spo2Text" style={{ display: "flex" }}>
              <span>SpO</span>
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

            <div className="Spo2FlexDiv">
              <p className="Spo2Value">
                {0 <= spo2 && spo2 <= 100 ? Math.floor(spo2) : "-"}
              </p>
              <p className="Spo2Percent">%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(LineChart);
