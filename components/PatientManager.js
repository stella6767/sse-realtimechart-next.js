import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useUpdateEffect from "../store/hooks/useUpdateEffect";
import { patientRequestAction } from "../store/reducers/patient";
import { Button, InputBox, SelectBox } from "./style";

const PatientManager = () => {
  const dispatch = useDispatch();

  //const patients = useSelector((state) => state.patient.patients?.data);
  const patients = useSelector((state) => state.patient.patients);

  const [searchWord, setSearchWord] = useState(null);

  useEffect(() => {
    console.log("환자리스트 출력");
    dispatch(patientRequestAction());
  }, []);

  useUpdateEffect(() => {
    console.log("patinets", patients);
  }, [patients]);

  const handleInput = (e) => {
    //console.log(e.target.name);
    console.log(e.target.value);
    setSearchWord(e.target.value);
  };

  const clickAssign = () => {
    console.log("searchWord", searchWord);
  };

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
                <option style={{ color: "white" }} value="ID" />
                <option style={{ color: "white" }} value="Name" />
              </SelectBox>
              <InputBox
                //name="searchWord"
                type="text"
                // value={null}
                onChange={handleInput}
              />
              <Button className="btn" onClick={clickAssign}>
                Assign
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "6rem",
                marginBottom: "7rem",
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
                        <th>
                          <p style={{ marginLeft: "50px" }}>ID</p>
                        </th>
                        <th>
                          <p style={{ marginLeft: "40px" }}>Name</p>
                        </th>
                        <th>
                          <p style={{ marginLeft: "30px" }}>Last Session</p>
                        </th>
                        <th>
                          <p>Gender</p>
                        </th>
                        <th>Age</th>
                        <th>Height(cm)</th>
                        <th>Weight(kg)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients?.data.map((patient) => (
                        <tr>
                          <td>{patient?.pid}</td>
                          <td>{patient?.firstname}</td>
                          <td>
                            {patient?.lastSession == null
                              ? "Null"
                              : patient?.lastSession}
                          </td>
                          <td>{patient?.gender}</td>
                          <td>{patient?.age}</td>
                          <td>{patient?.height}</td>
                          <td>{patient?.weight}</td>
                        </tr>
                      ))}
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
