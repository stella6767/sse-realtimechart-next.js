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
              backgroundColor: "rgb(96,96,96)",
              height: "50rem",
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
                marginTop: "70px",
              }}
            >
              <div
                style={{
                  width: "90%",
                  backgroundColor: "rgb(96,96,96)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "28rem",
                    backgroundColor: "rgb(64, 64, 64)",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-around",
                    overflow: "auto",
                  }}
                >
                  <table
                    width="95%"
                    style={{
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Last Session</th>
                      <th>Gender</th>
                      <th>Age</th>
                      <th>Height(cm)</th>
                      <th>Weight(kg)</th>
                    </tr>
                    <tr
                      style={{
                        backgroundColor: " rgb(96,96,96)",

                        borderRadius: "10px",
                      }}
                    >
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr
                      style={{
                        backgroundColor: " rgb(96,96,96)",
                      }}
                    >
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr
                      style={{
                        backgroundColor: " rgb(96,96,96)",
                      }}
                    >
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr
                      style={{
                        backgroundColor: " rgb(96,96,96)",
                      }}
                    >
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr
                      style={{
                        backgroundColor: " rgb(96,96,96)",
                      }}
                    >
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr
                      style={{
                        backgroundColor: " rgb(96,96,96)",
                      }}
                    >
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr
                      style={{
                        backgroundColor: " rgb(96,96,96)",
                      }}
                    >
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr
                      style={{
                        backgroundColor: " rgb(96,96,96)",
                      }}
                    >
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                      <td>asdfasd</td>
                    </tr>
                    <tr
                      style={{
                        backgroundColor: " rgb(96,96,96)",
                      }}
                    >
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
