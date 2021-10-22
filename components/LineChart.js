import React, { useEffect, useState, useCallback } from "react";
import { StyledFont, StyledLineCss, StyledCharjsLine } from "./style";
import useUpdateEffect from "../store/hooks/useUpdateEffect";
import RealTimeLineChart from "./RealTimeLineChart";
import StreamingChart from "./StreamingChart";
import { Chart } from "chart.js";
//import "chartjs-adapter-luxon";
import StreamingPlugin from "chartjs-plugin-streaming";
import { useRef } from "react";
Chart.register(StreamingPlugin);

const LineChart = (props) => {
  const chartConfig = {
    type: "line",
    data: {
      datasets: [
        {
          //label: "Dataset 2",
          //backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgb(11, 333, 235)",
          cubicInterpolationMode: "monotone",
          spanGaps: true,
          pointRadius: 0,
          //fill: true,
          data: [],
        },
      ],
    },
    options: {
      spanGaps: true,
      parsing: false,
      animation: false, // disable animations

      datasets: {
        line: {
          pointRadius: 0, // disable for all `'line'` datasets
        },
      },
      elements: {
        point: {
          radius: 0, // default to disabled in all datasets
        },
        line: {
          tension: 0, // disables bezier curves
        },
      },
      scales: {
        x: {
          type: "realtime",
          realtime: {
            duration: 1000, //작을 수록 밀리세컨드 반영
            // refresh: 50, // onRefresh callback will be called every 1000 ms
            delay: 1000, // delay of 1000 ms, so upcoming values are known before plotting a line
            pause: false, // chart is not paused
            ttl: undefined, // data will be automatically deleted as it disappears off the chart
            //frameRate: 10, // data points are drawn 30 times every second
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        streaming: {
          frameRate: 10, // chart is drawn 5 times every second
        },
      },
      yAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
      interaction: {
        intersect: false,
      },
    },
  };

  //let timestamp = +new Date();
  const [tv, setTv] = useState(null);
  const [mv, setMv] = useState(null);
  const [rr, setRr] = useState(null);
  const [spo2, setSpo2] = useState(null);
  const [rvsArr, setRvsArr] = useState(null);
  const [bool, setbool] = useState(false);
  const [dataX, setDataX] = useState(false);

  const { d, eventSource } = props;

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const [ResultData, setResultData] = useState(null);

  useEffect(() => {
    //console.log("d", d);
    //Custom listener
    eventSource?.addEventListener(d, (event) => {
      const result = JSON.parse(event.data);
      //console.log("처음 오는 데이터", result);
      clasfy(result);
      setResultData(result);
    });
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
        // console.log(
        //   "start:",
        //   measureData?.startTime,
        //   "end:",
        //   measureData?.endTime,
        //   "rvs:",
        //   measureData?.value
        // );
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
            // onReceive(
            //   Number(r),
            //   +new Date(
            //     20 +
            //       measureData?.startTime.split("-")?.[0] +
            //       " " +
            //       measureData?.startTime.split("-")?.[1]
            //   )
            // );
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

            // console.log("??");
            // onReceive(
            //   Number(r),
            //   +new Date(
            //     20 +
            //       measureData?.startTime.split("-")?.[0] +
            //       " " +
            //       measureData?.startTime.split("-")?.[1]
            //   )
            // );
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

  useEffect(() => {
    if (!chartContainer) return;

    const ctx = chartContainer.current.getContext("2d");

    const newChartInstance = new Chart(ctx, chartConfig);
    setChartInstance(newChartInstance);

    // if (chartContainer && chartContainer.current) {
    //   const newChartInstance = new Chart(chartContainer.current, chartConfig);
    //   setChartInstance(newChartInstance);
    // }
  }, [chartContainer]);

  useUpdateEffect(() => {
    //interval(rvsArr);
    onReceive(rvsArr);
    //console.log("bool", bool);
  }, [bool]);

  const onReceive = (r) => {
    if (!chartInstance) return;

    console.log("r", r, "datax", dataX, "d", d);

    let index = d.substr(6, 1);

    console.log("index", index);
    //console.log("chartInstance", chartInstance);

    // append the new data to the existing chart data
    chartInstance.data.datasets[0].data.push({
      x: dataX,
      y: r,
    });

    // chartInstance.data.datasets[1].data.push({
    //   x: dataX,
    //   y: r,
    // });

    chartInstance.update("quiet");
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
              {/* <StreamingChart bool={bool} dataX={dataX} rvsArr={rvsArr} d={d} /> */}

              <canvas
                className={"stream" + d}
                ref={chartContainer}
                width={480}
                height={100}
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
