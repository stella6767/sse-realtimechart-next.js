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
        //label: "Dataset 1",
        //backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(11, 333, 235)",
        cubicInterpolationMode: "monotone",
        //fill: true,
        data: [],
      },
      {
        //label: 'Dataset 2',
        //backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: "rgb(54, 162, 235)",
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
  const { bool, dataX, rvsArr, d } = props; //data

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }

    return () => {
      newChartInstance.destroy();
    };
  }, [chartContainer]);

  useUpdateEffect(() => {
    //interval(rvsArr);
    onReceive(rvsArr);
    console.log("bool", bool);
  }, [bool]);

  const onReceive = (r) => {
    //4번    //2번
    console.log("r", r, "datax", dataX, "d", d);

    let index = d.substr(6, 1);

    console.log("index", index);
    console.log("chartInstance", chartInstance);

    // append the new data to the existing chart data
    chartInstance.data.datasets[index].data.push({
      x: dataX,
      y: r,
    });

    //chartInstance.update("quiet");
  };

  const check = () => {
    console.log("check", chartInstance.data.datasets[0].data);
  };

  return (
    <>
      <button onClick={check} />
      <canvas
        className={"stream" + d}
        ref={chartContainer}
        width={480}
        height={100}
      />
    </>
  );
});

export default StreamingChart;
