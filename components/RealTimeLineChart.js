import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default props => {
  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      animations: {
        easing: "linear",
        dynamicAnimation: {
          speed: 500,
        },
      },
    },
    tooltip: {
      x: {
        format: "yyyy/MM/dd HH:mm:ss.f",
      },
    },
    xaxis: {
      type: "datetime",
      range: props.range,
    },
    yaxis: {
      labels: {
        formatter: val => val.toFixed(0),
      },
      title: { text: "Value" },
    },
  };
  return (
    <ReactApexChart
      type="line"
      options={options}
      series={props.dataList}
      width={480}
      height={130}
    />
  );
};