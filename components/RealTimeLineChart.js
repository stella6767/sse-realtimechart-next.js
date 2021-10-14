import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

const RealTimeLineChart = props => {
  const { chartList, range } = props;

  const [chartOptions, setChartOptions] = useState();

  useEffect(() => {
    chartList[0]?.data?.map((Data, index) => {
      setChartOptions({
        chart: {
          type: "spline",
          width: 480,
          height: 110,
        },
        title: {
          text: undefined,
        },
        xAxis: {
          type: "datetime",
          tickPixelInterval: 100,
          maxZoom: range,
        },
        yAxis: {
          title: {
            text: undefined,
          },
          minPadding: 0.2,
          maxPadding: 0.2,
        },
        legend: {
          enabled: false,
        },
        series: {
          data: chartList[0]?.data,
        },
      });
    });
    console.log("chart", chartOptions);
  }, [chartList]);

  return (
    <div className="App">
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default RealTimeLineChart;
