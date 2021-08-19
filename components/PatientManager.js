import React from "react";
import { SelectBox, InputBox, Button, ColorP } from "./style";

const PatientManager = () => {
  return (
    <>
      <div className="modal__background">
        <div
          className="modal"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "rgb(48, 48, 52)",
            }}
          >
            <div
              className="header"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "6rem",
              }}
            >
              <h1 style={{ color: "white" }}>Patient Manager</h1>
              <SelectBox>
                <option style={{ color: "white" }}>ID</option>
              </SelectBox>
              <InputBox></InputBox>
              <Button className="btn">New</Button>
              <Button className="btn">Delete</Button>
              <Button className="btn">Edit</Button>
              <Button className="btn">Assign</Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
              }}
            >
              <div
                style={{
                  width: "85%",
                  backgroundColor: "rgb(48, 48, 52)",
                  borderRadius: "5%",
                }}
              >
                <div className="tableWrapper">
                  <table
                    width="95%"
                    style={{
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last Session</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Height(cm)</th>
                        <th>Weight(kg)</th>
                      </tr>
                    </thead>
                    <tr className="Patient_list">
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr className="Patient_list">
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr className="Patient_list">
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr className="Patient_list">
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr className="Patient_list">
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr className="Patient_list">
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr className="Patient_list">
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr className="Patient_list">
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr className="Patient_list">
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientManager;
