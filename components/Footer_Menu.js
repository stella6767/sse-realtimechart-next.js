// import { Image } from "antd";
import React, { useState } from "react";
// import folder from "./../imgs/folder.png";
// import heartbeat from "./../imgs/heartbeat.png";
// import setting from "./../imgs/settings.png";
import user from "./../imgs/user.png";

const Footer_Menu = () => {
  const [PopupState, setPopupState] = useState(false);
  return (
    <>
      {PopupState ? (
        <div className="Popup">{/* <PatientManager></PatientManager> */}</div>
      ) : (
        <div></div>
      )}
      <div className="FooterMenuWrapper">
        <div className="FooterMenu">
          <div className="FooterMenuImg">
            {/* <Image
              src={user}
              alt="userImage"
              width={50}
              height={50}
              onClick={() => {
                setPopupState(() => !PopupState);
              }}
            ></Image> */}
          </div>
          <div className="FooterMenuImg">
            {/* <Image
              src={heartbeat}
              alt="userHeartBeat"
              width={50}
              height={50}
            ></Image> */}
          </div>
          <div className="FooterMenuImg">
            {/* <Image src={folder} alt="folderImg" width={50} height={50}></Image> */}
          </div>
          <div style={{ marginRight: "3rem" }} className="FooterMenuImg">
            {/* <Image
              src={setting}
              alt="settingImg"
              width={50}
              height={50}
            ></Image> */}
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
