import React, { memo } from "react";
import { Line, Chart } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import dynamic from "next/dynamic";
import { useRef } from "react";
import StreamingPlugin from "chartjs-plugin-streaming";
import { useEffect } from "react";
import useUpdateEffect from "../store/hooks/useUpdateEffect";
import { useState } from "react";

// const StreamingPlugin = dynamic(() => import("chartjs-plugin-streaming"), {
//   ssr: false,
// });

Chart.register(StreamingPlugin);

const StreamingChart = memo((props) => {
  const { eventSource, d } = props; //data

  const chart = useRef(null);
  const [bool, setbool] = useState(false);
  const [rvsArr, setRvsArr] = useState(null);
  const [dataX, setDataX] = useState();

  const data = {
    datasets: [
      {
        //label: "Dataset 2",
        //backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(11, 333, 235)",
        cubicInterpolationMode: "monotone",
        //fill: true,
        data: [],
      },
    ],
  };

  useEffect(() => {
    //Custom listener
    eventSource?.addEventListener(d, (event) => {
      const result = JSON.parse(event.data);
      //console.log("처음 오는 데이터", result);
      //clasfy(result);
      //setResultData(result);
    });
  }, []);

  const onReceive = (r) => {
    console.log("r", r, "datax", dataX);
    // append the new data to the existing chart data
    data.datasets[0].data.push({
      x: dataX,
      y: r,
    });

    // update chart datasets keeping the current animation
    chart.current.update("quiet");
  };

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
    //interval(rvsArr);
    //onReceive(rvsArr);
  }, [bool]);

  const options = {
    scales: {
      x: {
        type: "realtime",
        realtime: {
          duration: 600, //작을 수록 밀리세컨드 반영
          refresh: 1000, // onRefresh callback will be called every 1000 ms
          delay: 3000, // delay of 1000 ms, so upcoming values are known before plotting a line
          pause: false, // chart is not paused
          ttl: undefined, // data will be automatically deleted as it disappears off the chart
          frameRate: 30, // data points are drawn 30 times every second
          onRefresh: (chart) => {
            console.log("chart", chart.data.datasets);
            chart.data.datasets.forEach((dataset) => {
              dataset.data.push({
                x: new Date().getMilliseconds(),
                y: Math.random() * 10,
              });
            });
          },
        },
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} ref={chart} />
    </>
  );
});

export default StreamingChart;
