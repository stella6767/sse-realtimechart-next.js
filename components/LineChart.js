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
      data: [0, 60, 20, 60, 30, 60],
      fill: false,
      backgroundColor: "rgb(50,197,255)",
      borderColor: "rgb(50,197,255)",
    },
  ],
};

const options = {
  legend: {
    display: false,
  },
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
      style={{
        display: "flex",
        height: "15.5rem",
      }}
    >
      <div className="LineClass">
        <div
          style={{
            color: "white",
            display: "flex",
            width: "30rem",
            justifyContent: "space-between",
            border: "solid rgb(50,197,255)",
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
              height={80}
            ></StyledCharjsLine>
            {/* <Line></Line> */}
          </StyledLineCss>
        </div>
      </div>
      <div className="LineData" style={{ width: "30rem" }}>
        <div
          style={{
            backgroundColor: "red",
            width: "100%",
            fontSize: "19px",
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <StyledFont style={{ fontSize: "40px" }}>
                <p
                  style={{
                    color: "rgb(183, 183, 183)",
                    fontWeight: "bold",
                  }}
                >
                  198
                </p>
              </StyledFont>
              <UnitP>ml</UnitP>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <StyledFont style={{ fontSize: "40px", fontWeight: "bold" }}>
                <p>21</p>
              </StyledFont>
              <UnitP>L/min</UnitP>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <StyledFont style={{ fontSize: "40px" }}>
                <p
                  style={{
                    color: "rgb(50, 197, 255)",
                    fontWeight: "bold",
                  }}
                >
                  17
                </p>
              </StyledFont>
              <UnitP>bpm</UnitP>
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
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            SPO2
          </p>
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "rgb(102, 255, 255)",
              }}
            >
              98
            </p>
            <UnitP>%</UnitP>
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
