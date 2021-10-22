import "chartjs-adapter-luxon";
import StreamingPlugin from "chartjs-plugin-streaming";
import React, { memo, useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import useUpdateEffect from "../store/hooks/useUpdateEffect";

Chart.register(StreamingPlugin);

const StreamingChart = memo((props) => {
  const { bool, dataX, rvsArr, d } = props; //data

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

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
    console.log("chartInstance", chartInstance);

    // append the new data to the existing chart data
    chartInstance.data.datasets[index].data.push({
      x: dataX,
      y: r,
    });

    chartInstance.update("quiet");
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
