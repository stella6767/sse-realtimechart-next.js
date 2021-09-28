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

  const [i, setIndex] = useState(null);

  useEffect(() => {
    console.log("환자리스트 출력");
    dispatch(patientRequestAction());
  }, []);

  useUpdateEffect(() => {
    console.log("patinets", patients.data.lastSession);
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
                ID
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
                      <th>ID</th>
                      <th style={{ paddingLeft: "2%" }}>Name</th>
                      <th style={{ paddingLeft: "3%" }}>Last Session</th>
                      <th style={{ paddingLeft: "3%" }}>Gender</th>
                      <th style={{ paddingLeft: "2.1%" }}>Age</th>
                      <th style={{ paddingLeft: "1.5%" }}>Height(cm)</th>
                      <th>Weight(kg)</th>
                    </tr>
                  </thead>
                  <tbody style={{ width: "100%", marginLeft: "0px" }}>
                    {patients?.data.map((patient, index) => (
                      <tr>
                        <td
                          onClick={() => {
                            setIndex(index);
                          }}
                          className={index === i ? "Active" : ""}
                        >
                          {patient?.patientUserId}
                        </td>
                        <td
                          onClick={() => {
                            setIndex(index);
                          }}
                          className={index === i ? "Active" : ""}
                        >
                          {patient?.firstname + patient?.lastname}
                        </td>
                        <td
                          onClick={() => {
                            setIndex(index);
                          }}
                          className={index === i ? "Active" : ""}
                        >
                          {patient?.lastSession == null
                            ? "2021.09.14"
                            : patient?.lastSession
                                .split("_")[1]
                                .substring(0, 4) +
                              "." +
                              patient?.lastSession
                                .split("_")[1]
                                .substring(4, 6) +
                              "." +
                              patient?.lastSession
                                .split("_")[1]
                                .substring(6, 9)}
                        </td>
                        <td
                          onClick={() => {
                            setIndex(index);
                          }}
                          className={index === i ? "Active" : ""}
                        >
                          {patient?.gender}
                        </td>
                        <td
                          onClick={() => {
                            setIndex(index);
                          }}
                          className={index === i ? "Active" : ""}
                        >
                          {patient?.age}
                        </td>
                        <td
                          onClick={() => {
                            setIndex(index);
                          }}
                          className={index === i ? "Active" : ""}
                        >
                          {patient?.height}
                        </td>
                        <td
                          onClick={() => {
                            setIndex(index);
                          }}
                          className={index === i ? "Active" : ""}
                        >
                          {patient?.weight}
                        </td>
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
