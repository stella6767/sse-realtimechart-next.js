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
                marginTop: "5rem",
              }}
            >
              <h1 style={{ color: "white" }}>Patient Manager</h1>
              <SelectBox>
                <option style={{ color: "white" }}>ID</option>
              </SelectBox>
              <InputBox></InputBox>
              <Button className="btn">Assign</Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "6rem",
                marginBottom: "5rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(48, 48, 52)",
                  borderRadius: "10%",
                }}
              ></div>
              <div className="tableWrapper">
                <div className="tableWrapper_inTable">
                  <table>
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
                    <tbody>
                      <tr>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                      </tr>
                      <tr>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                      </tr>
                      <tr>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                      </tr>
                      <tr>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                      </tr>
                      <tr>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                      </tr>
                      <tr>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                      </tr>
                      <tr>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                      </tr>
                      <tr>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                      </tr>
                      <tr>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                      </tr>
                      <tr>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                        <td>Data</td>
                      </tr>
                    </tbody>
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
