import React, { useState } from "react";
import $ from "jquery";
import "./Avatar.scss";

export const Avatar = (props) => {
  const [buffer, setBuffer] = useState();
  // const [file, setFile] = useState(null);

  const onChangeAvatar = (event) => {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      // setFile(file);
      const fr = new FileReader();
      fr.onloadend = (e) => {
        let buf = e.target.result;
        setBuffer(buf);
      };
      fr.readAsDataURL(file);
    }
  };

  return (
    <div className="avatar-wrapper" onClick={(e) => $(".file-upload").click()}>
      <i
        className="avatar-icon fa fa-user"
        style={{ display: buffer ? "none" : "block" }}
      />
      <img
        src={buffer}
        style={{ width: "100%", height: "100%", zIndex: "10" }}
        alt="User"
      />
      <input
        className="file-upload"
        type="file"
        accept="image/*"
        onChange={onChangeAvatar}
      />
    </div>
  );
};
