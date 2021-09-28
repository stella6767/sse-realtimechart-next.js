import React, { useState, useEffect, useRef } from "react";
// import folder from "./../imgs/folder.png";
// import heartbeat from "./../imgs/heartbeat.png";
// import setting from "./../imgs/settings.png";
// import user from "./../imgs/user.png";
import PatientManager from "./PatientManager";
import moment from "moment";
import {
  FolderOutlined,
  UserOutlined,
  HeartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

//import Image from "next/image";

const Footer_Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    const myInterval = () => {
      const now = String(new Date().getTime());

      // now의 마지막 3자리는 1초 이하의 milliseconds를 나타낸다.
      const nowMilliseconds = Number(now.substring(now.length - 3));
      const nNextSleep = 1000 - nowMilliseconds;

      setTimeout(() => {
        setTimer(moment().format("YYYY-MM-DD hh:mm:ss"));
        myInterval(); // 재귀호출
      }, nNextSleep);
    };

    myInterval();
  }, []);
  return (
    <>
      {isOpen && (
        <>
          <div
            className="modal__background"
            onClick={() => setOpen(false)}
          ></div>
          <PatientManager></PatientManager>
        </>
      )}
      <div className="FooterMenuWrapper">
        <div className="FooterMenu">
          <div className="FooterMenuImg">
            <UserOutlined
              style={{ color: "white", fontSize: "50px" }}
              onClick={() => {
                setOpen(() => !isOpen);
              }}
            />
          </div>
          <div className="FooterMenuImg">
            <HeartOutlined style={{ color: "white", fontSize: "50px" }} />
          </div>
          <div className="FooterMenuImg">
            <FolderOutlined style={{ color: "white", fontSize: "50px" }} />
          </div>
          <div style={{ marginRight: "3rem" }} className="FooterMenuImg">
            <SettingOutlined style={{ color: "white", fontSize: "50px" }} />
          </div>
        </div>
        <div className="TimeDiv">
          <p
            style={{
              fontSize: "40px",
              textAlign: "center",
              color: "white",
            }}
          >
            {timer}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer_Menu;
