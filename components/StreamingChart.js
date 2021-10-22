import "chartjs-adapter-luxon";
import StreamingPlugin from "chartjs-plugin-streaming";
import React, { memo, useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import useUpdateEffect from "../store/hooks/useUpdateEffect";

const chartConfig = {
  type: "line",
  data: {
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
  },
  options: {
    scales: {
      x: {
        type: "realtime",
        realtime: {
          duration: 6000, //작을 수록 밀리세컨드 반영
          delay: 3000, // delay of 1000 ms, so upcoming values are known before plotting a line
          pause: false, // chart is not paused
          ttl: undefined, // data will be automatically deleted as it disappears off the chart
          frameRate: 30, // data points are drawn 30 times every second
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

Chart.register(StreamingPlugin);

const StreamingChart = memo((props) => {
  const { eventSource, d } = props; //data

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const [bool, setbool] = useState(false);
  const [rvsArr, setRvsArr] = useState(null);
  const [dataX, setDataX] = useState();

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  useEffect(() => {
    //Custom listener
    eventSource?.addEventListener(d, (event) => {
      const result = JSON.parse(event.data);
      //console.log("처음 오는 데이터", result);
      clasfy(result);
      //setResultData(result);
    });
  }, []);

  const onReceive = (r) => {
    console.log("r", r, "datax", dataX);
    // append the new data to the existing chart data
    chartInstance.data.datasets[0].data.push({
      x: dataX,
      y: r,
    });

    chartInstance.update("quiet");
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
    onReceive(rvsArr);
  }, [bool]);

  const check = () => {
    console.log("check", chartInstance.data.datasets[0].data);
  };

  return (
    <>
      {/* <button onClick={check} /> */}
      {/* <Line data={data} options={options} ref={chartContainer} /> */}
      <canvas
        className="streamCanvas"
        ref={chartContainer}
        width={480}
        height={100}
      />
    </>
  );
});

export default StreamingChart;
