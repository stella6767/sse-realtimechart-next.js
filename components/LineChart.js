import React, { useEffect, useState } from "react";
import { StyledFont, StyledLineCss, StyledCharjsLine } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { PatientRequestAction } from "./../store/reducers/patient";
import useUpdateEffect from "../store/hooks/useUpdateEffect";
const LineChart = props => {
  const { patientData, MV, TV, RR, SPO2 } = props;

  useUpdateEffect(() => {
    setMV(MV);
    setTV(TV);
    setRR(RR);
    setSPO2(SPO2);
  }, [MV, TV, RR, SPO2]);

  const [mv, setMV] = useState(null);
  const [tv, setTV] = useState(null);
  const [rr, setRR] = useState(null);
  const [spo2, setSPO2] = useState(null);

  //json object=> javascript object
  const data = {
    labels: [10, 20, 30, 40, 50, 60],
    datasets: [
      {
        data: [],
        fill: false,
        backgroundColor: "rgb(27, 27, 32)",
        borderColor: "rgb(50,197,255)",
      },
    ],
  };

  const options = {
    legend: false,
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            // grid line 설정
            display: false,
            drawBorder: false,
            color: "#3c3d40",
          },
        },
      ],
    },
  };

  return (
    <>
      <div
        className="LineChartWrapper"
        style={{
          display: "flex",
          height: "9rem",
        }}
      >
        <div className="LineClass">
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              border: "solid rgb(16, 16, 20)",
            }}
          >
            <p style={{ fontWeight: "bold" }}>bed1</p>

            <p>Age:{patientData[0]?.age}</p>
            <p>ID:{patientData[0]?.patientUserId}</p>
          </div>
          <div>
            <StyledLineCss>
              <p style={{ fontWeight: "bold", color: "white" }}>RVS</p>
              <StyledCharjsLine
                data={data}
                options={options}
                height={65}
              ></StyledCharjsLine>
              {/* <Line></Line> */}
            </StyledLineCss>
          </div>
        </div>
        <div className="LineData" style={{ width: "100%" }}>
          <div
            style={{
              backgroundColor: "red",
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Alarm Comment
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div className="LineDiv">
              <p
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {tv?.parame}
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  style={{
                    color: "rgb(183, 183, 183)",
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginBottom: "0px",
                    textAlign: "center",
                  }}
                >
                  {tv?.value}
                </p>

                <p
                  style={{
                    color: "rgb(183, 183, 183)",
                    fontWeight: "bold",
                    marginTop: "20%",
                  }}
                >
                  {mv?.parame}
                </p>
              </div>
            </div>
            <div className="LineDiv">
              <p
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {mv?.parame}
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginBottom: "0px",
                    textAlign: "center",
                  }}
                >
                  {mv?.value}
                </p>

                <p style={{ fontWeight: "bold", marginTop: "20%" }}>L/min</p>
              </div>
            </div>
            <div className="LineDiv">
              <p
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {rr?.parame}
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p
                  style={{
                    color: "rgb(50, 197, 255)",
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginBottom: "0px",
                    textAlign: "center",
                  }}
                >
                  {rr?.value}
                </p>

                <p
                  style={{
                    color: "rgb(50, 197, 255)",
                    fontWeight: "bold",
                    marginTop: "20%",
                  }}
                >
                  bpm
                </p>
              </div>
            </div>
          </div>
          <div
            className="LineBottomDiv"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                SPO2
              </p>
              {/* <span style={{ marginTop: "1rem", fontWeight: "bold" }}>2</span> */}
            </div>
            <div style={{ display: "flex", marginRight: "12%" }}>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "rgb(102, 255, 255)",
                }}
              >
                {spo2?.value}
              </p>
              <p
                style={{
                  marginTop: "40%",
                  marginLeft: "20%",
                  fontWeight: "bold",
                }}
              >
                %
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LineChart;
