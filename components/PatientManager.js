import { useEffect, useState } from "react";
import { useSelector } from "react-redux"; //useselector 를 통해서 리덕스 스토어의 상태에 접근할수 있다.
import { useDispatch } from "react-redux"; //dispatch는 액션을 발생시키는 내장함수.
import useUpdateEffect from "../store/hooks/useUpdateEffect";
import {
  patientByNameOrIdRequestAction,
  patientRequestAction,
} from "../store/reducers/patient"; //리듀서 호출

import { Button, InputBox, SelectBox } from "./style";

const PatientManager = () => {
  const dispatch = useDispatch(); //useDispatch 사용

  //const patients = useSelector((state) => state.patient.patients?.data);
  const patients = useSelector(state => state.patient.patients);

  const [searchWord, setSearchWord] = useState(null);
  const [selected, setSelected] = useState("patientUserId");

  useEffect(() => {
    console.log("환자리스트 출력");
    dispatch(patientRequestAction());
  }, []);

  useUpdateEffect(() => {
    console.log("patinets", patients);
  }, [patients]);

  const handleInput = e => {
    //console.log(e.target.name);
    console.log(e.target.value);
    setSearchWord(e.target.value);
  };

  const clickAssign = () => {
    console.log("searchWord", searchWord);
    console.log("searchType", selected);

    dispatch(patientByNameOrIdRequestAction(selected, searchWord));
    //searchWord에 아무것도 입력안하면 전체 출력
  };

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  return (
    <>
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
            <SelectBox
              onChange={handleSelect}
              value={selected}
              defaultValue={selected}
            >
              <option style={{ color: "white" }} value="patientUserId">
                PatientUserId
              </option>
              <option style={{ color: "white" }} value="name">
                Name
              </option>
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
                        <p>pid</p>
                      </th>
                      <th>
                        <p>patientUserId</p>
                      </th>
                      <th style={{ paddingRight: "1%" }}>firstName</th>
                      <th style={{ paddingRight: "1%" }}>lastName</th>
                      <th style={{ paddingRight: "2%" }}>Gender</th>
                      <th style={{ paddingRight: "2.5%" }}>Age</th>
                      <th style={{ paddingRight: "3%" }}>Height(cm)</th>
                      <th style={{ paddingRight: "5%" }}>Weight(kg)</th>
                      <th style={{ paddingRight: "3%" }}>
                        <p>Last Session</p>
                      </th>
                      <th style={{ paddingRight: "1%" }}>
                        <p>Comment</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ width: "100%", marginLeft: "0px" }}>
                    {patients?.data.map(patient => (
                      <tr>
                        <td>{patient?.pid}</td>
                        <td>{patient?.patientUserId}</td>
                        <td>{patient?.firstname}</td>
                        <td>{patient?.lastname}</td>

                        <td>{patient?.gender}</td>
                        <td>{patient?.age}</td>
                        <td>{patient?.height}</td>
                        <td>{patient?.weight}</td>
                        <td>
                          {patient?.lastSession == null
                            ? "Null"
                            : patient?.lastSession}
                        </td>
                        <td>{patient?.comment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientManager;
