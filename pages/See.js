import React from "react";
import RealTimeLineChart from "../components/RealTimeLineChart";

const TIME_RANGE_IN_MILLISECONDS = 30 * 1000;
const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 1000;
const ADDING_DATA_RATIO = 0.8;

function See() {
  const nameList = ["a", "b", "c"];
  const defaultDataList = nameList.map((name) => ({
    name: name,
    data: [],
  }));
  const [dataList, setDataList] = React.useState(defaultDataList);

  React.useEffect(() => {
    const addDataRandomly = (data) => {
      if (Math.random() < 1 - ADDING_DATA_RATIO) {
        return data;
      }
      return [
        ...data,
        {
          x: new Date(),
          y: data.length * Math.random(),
        },
      ];
    };
    const interval = setInterval(() => {
      setDataList(
        dataList.map((val) => {
          return {
            name: val.name,
            data: addDataRandomly(val.data),
          };
        })
      );
    }, ADDING_DATA_INTERVAL_IN_MILLISECONDS);

    return () => clearInterval(interval);
  });

  const check = () => {
    console.log("체크", dataList);
  };

  return (
    <>
      <div onClick={check} style={{ background: "white" }}>
        체크
      </div>

      <div>
        <RealTimeLineChart
          chartList={dataList}
          range={TIME_RANGE_IN_MILLISECONDS}
        />
      </div>
    </>
  );
}

export default See;
