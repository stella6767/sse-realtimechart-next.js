import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RealTimeLineChart = (props) => {
  const { chartList, range } = props;

  // const series = [
  //   {
  //     chartList: chartList.slice(),
  //   },
  // ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      animations: {
        easing: "linear",
        dynamicAnimation: {
          enabled: true,
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
      range: range,
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        //max:YData,
        formatter: function (val) {
          return val;
        },
      },
      //title: { text: "Value" },
    },
    tooltip: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    colors: ["#32C5FF"],
  };

  return (
    <ReactApexChart
      type="line"
      options={options}
      series={chartList}
      width={480}
      height={110}
    />
  );
};

export default RealTimeLineChart;
