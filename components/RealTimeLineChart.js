import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RealTimeLineChart = props => {
  const { chartList, range, YData } = props;
  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      animations: {
        easing: "linear",
        dynamicAnimation: {
          speed: 200,
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
      tickAmount: 5,
      //max: YData,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
      title: { text: "Value" },
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
