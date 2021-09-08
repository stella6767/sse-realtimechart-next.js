import React, { useState } from "react";
// import folder from "./../imgs/folder.png";
// import heartbeat from "./../imgs/heartbeat.png";
// import setting from "./../imgs/settings.png";
// import user from "./../imgs/user.png";
import PatientManager from "./PatientManager";
import {
  FolderOutlined,
  UserOutlined,
  HeartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

//import Image from "next/image";

const Footer_Menu = () => {
  const [PopupState, setPopupState] = useState(false);
  return (
    <>
      {PopupState ? (
        <div className="Popup">
          <PatientManager></PatientManager>
        </div>
      ) : (
        <div></div>
      )}
      <div className="FooterMenuWrapper">
        <div className="FooterMenu">
          <div className="FooterMenuImg">
            <UserOutlined
              style={{ color: "white", fontSize: "50px" }}
              onClick={() => {
                setPopupState(() => !PopupState);
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
            2021.08.03 14:38:22
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer_Menu;
