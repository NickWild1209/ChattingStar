import React from "react";
import { useHistory, useLocation } from "react-router-dom";
export const AuthButton = () => {
  let history = useHistory();

  return (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          localStorage.removeItem("token_chattingstar");

          history.replace({ pathname: "/" });
          window.location.reload();
        }}
      >
        Sign out
      </button>
    </p>
  );
};
