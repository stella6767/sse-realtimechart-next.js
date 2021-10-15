// import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// // const ReactApexChart = dynamic(() => import("react-apexcharts"), {
// //   ssr: false,
// // });

// const RealTimeLineChart = props => {
//   const { chartList, range } = props;

//   const [chartOptions, setChartOptions] = useState();

//   useEffect(() => {
//     chartList[0]?.data?.map((Data, index) => {
//       setChartOptions({
//         chart: {
//           type: "spline",
//           animation: Highcharts.svg, // don't animate in old IE
//           marginRight: 10,
//           width:480,
//           height:110,
//           events: {
//             load: function () {
//               //매초마다 업데이트 될수 있도록 setinterval 실행
//               var series = this.series[0];
//               setInterval(function () {
//                 var x = new Date().getTime(), //현재시간
//                   y = Math.random();
//                 series.addPoint([x, y], true, true); //
//                 console.log("High Chart x,y", x, y);
//               }, 100);
//             },
//           },
//         },
//         title: {
//           text: undefined,
//         },
//         xAxis: {
//           type: "datetime",
//           tickPixelInterval: 100,
//           maxZoom: range,
//         },
//         yAxis: {
//           title: {
//             text: undefined,
//           },
//           minPadding: 0.2,
//           maxPadding: 0.2,
//         },
//         legend: {
//           enabled: false,
//         },
//         series: {
//           data: chartList[0]?.data,
//         },
//       });
//     });
//     console.log("chart", chartOptions);
//   }, [chartList]);

//   return (
//     <div className="App">
//       <div>
//         <HighchartsReact highcharts={Highcharts} options={chartOptions} />
//       </div>
//     </div>
//   );
// };

// export default RealTimeLineChart;


import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RealTimeLineChart = props => {
  const { chartList, range } = props;
  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      animations: {
        easing: "linear",
        dynamicAnimation: {
          speed: 100,
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

