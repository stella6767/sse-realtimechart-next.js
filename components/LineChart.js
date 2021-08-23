import React from "react";

import {
  StyledAlarmCommentDiv,
  StyledFont,
  StyledLineCss,
  StyledAlarmSpo2Div,
  StyledCharjsLine,
  UnitP,
} from "./style";

const data = {
  labels: ["10", "20", "30", "40", "50", "60"],
  datasets: [
    {
      data: [60, 100, 80, 120, 100, 120],
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

const LineChart = () => (
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
          <p>Age:18</p>
          <p>ID:Patient1</p>
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
              TV
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <StyledFont>
                <p style={{ color: "rgb(183, 183, 183)" }}>198</p>
              </StyledFont>
              <UnitP
                style={{
                  color: "rgb(183, 183, 183)",
                  marginTop: "20%",
                  fontWeight: "bold",
                }}
              >
                ml
              </UnitP>
            </div>
          </div>
          <div className="LineDiv">
            <p
              style={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              MV
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <StyledFont>
                <p>21</p>
              </StyledFont>
              <UnitP style={{ marginTop: "20%", fontWeight: "bold" }}>
                L/min
              </UnitP>
            </div>
          </div>
          <div className="LineDiv">
            <p
              style={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              RR
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <StyledFont>
                <p
                  style={{
                    color: "rgb(50, 197, 255)",
                    fontWeight: "bold",
                  }}
                >
                  17
                </p>
              </StyledFont>
              <UnitP
                style={{
                  color: "rgb(50, 197, 255)",
                  marginTop: "20%",
                  fontWeight: "bold",
                }}
              >
                bpm
              </UnitP>
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
              SPO
            </p>
            <span style={{ marginTop: "1rem", fontWeight: "bold" }}>2</span>
          </div>
          <div style={{ display: "flex", marginRight: "12%" }}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "rgb(102, 255, 255)",
              }}
            >
              98
            </p>
            <UnitP
              style={{
                marginTop: "40%",
                marginLeft: "20%",
                fontWeight: "bold",
              }}
            >
              %
            </UnitP>
          </div>
        </div>
      </div>
    </div>

    {/* <Styledflex className="1">
      <StyledLineCss className="2">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            border: 'solid rgb(50,197,255)',
            color: 'white',
            //height: '40px',
          }}
        >
          <p>Bed1</p>
          <p>Age:18</p>
          <p>ID:patient1</p>
        </div>
        <div className="header">
          <h1
            className="title"
            style={{
              color: 'white',
              marginBottom: '0px',
            }}
          >
            RVS
          </h1>
        </div>
        <Line data={data} options={options} />
      </StyledLineCss>
      <StyledAlarmflex className="check">
        <div
          style={{
            width: '10%',
            backgroundColor: 'red',
            textAlign: 'center',
            fontSize: '23px',
            fontWeight: 'bold',
            height: '40px',
          }}
        >
          Alarm Comment
        </div>
        <StyledAlarmCommentDiv className="3">
          <StyledFont>TV</StyledFont>
          <StyledFont>
            <p
              style={{
                color: 'rgb(183, 183, 183)',
                fontSize: '40px',
                textAlign: 'cetner',
              }}
            >
              198
            </p>
          </StyledFont>
        </StyledAlarmCommentDiv>
        <StyledAlarmCommentDiv className="4">
          <StyledFont>MV</StyledFont>
          <StyledFont>
            <p
              style={{
                color: 'rgb(255,255,255)',
                fontSize: '40px',
                textAlign: 'cetner',
              }}
            >
              21
            </p>
          </StyledFont>
        </StyledAlarmCommentDiv>
        <StyledAlarmCommentDiv>
          <StyledFont>RR</StyledFont>
          <StyledFont>
            <p
              style={{
                color: 'rgb(50,197,255)',
                fontSize: '40px',
                textAlign: 'cetner',
              }}
            >
              17
            </p>
          </StyledFont>
        </StyledAlarmCommentDiv>
        <StyledAlarmCommentDiv
          style={{
            width: '100%',
            height: '3rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <StyledFont>SPO2</StyledFont>
          <StyledFont style={{ display: 'flex' }}>
            <p
              style={{
                color: 'rgb(102, 255, 255)',
                marginBottom: '0px',
                textAlign: 'cetner',
              }}
            >
              98
            </p>
            <p>%</p>
          </StyledFont>
        </StyledAlarmCommentDiv>
      </StyledAlarmflex>
    </Styledflex> */}
  </>
);

export default LineChart;
