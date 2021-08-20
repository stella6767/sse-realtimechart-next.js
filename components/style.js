import { Line } from "react-chartjs-2";
import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

`;

// export const StyledP = styled.p`
//   color: white;
//   margin-bottom: 0px;
// `;

// export const RvsHeader = styled.div`
//   width: 100%;
//   height: 40px;
//   display: flex;
// `;

export const StyledCharjsLine = styled(Line)`
  display: block;
  box-sizing: border-box;
`;

export const Styledflex = styled.div`
  display: flex;
  margin: 100px;
`;
export const StyledLineCss = styled.div`
  width: 30rem;
  margin-bottom: 20rem;
  margin-top: 0px;
  margin-left: 0px;
  color: white;
`;
export const StyledAlarmflex = styled.div`
  display: flex;
  //width: 100%;
  flex-wrap: wrap;
`;
export const StyledAlarmCommentDiv = styled.div`
  background: rgb(96, 96, 96);
  border: solid rgb(50, 197, 255);
  width: 10rem;
  height: 5rem;
  color: white;
`;
export const StyledFont = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 0px;
  text-align: center;
`;
export const StyledAlarmSpo2Div = styled.div`
  background: rgb(96, 96, 96);
  border: solid rgb(50, 197, 255);
  width: 30rem;
  height: 3rem;
  color: white;
`;
export const UnitP = styled.p`
  margin-top: 20%;
`;
export const ColorP = styled.p`
  color: white;
  margin-top: 2rem;
`;
export const FooterMenu = styled.div`
  width: 80%;
  height: 4rem;
  display: flex;
  background-color: rgb(64, 64, 64);
  border-top: solid rgb(50, 197, 255);
  justify-content: flex-end;
  .img:hover {
    opacity: 0.2;
    cursor: pointer;
  }
`;

export const TimeDiv = styled.div`
  width: 20%;
  height: 4rem;
  border-top: solid rgb(50, 197, 255);
  border-left: solid rgb(50, 197, 255);
`;

export const SelectBox = styled.select`
  width: 10rem;
  height: 3rem;
  border-radius: 10px;
  background-color: rgb(27, 27, 32);
  border: 0;
  outline: 0;
  color: white;
`;

export const InputBox = styled.input`
  width: 25rem;
  height: 3rem;
  border-radius: 10px;
  background-color: rgb(27, 27, 32);
  box-shadow: none;
  border: 0;
  outline: 0;
  color: white;
`;

export const Button = styled.button`
  width: 15rem;
  height: 3rem;
  border-radius: 10px;
  background-color: rgb(71, 71, 76);
  font-size: 20px;
  color: white;
  border: 0;
  outline: 0;
  .btn:hover {
    cursor: pointer;
    background-color: black;
  }
`;
