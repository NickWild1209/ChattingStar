import React, { useState } from "react";

import "../App.scss";
import * as HttpUser from "../http/HttpUser";

import { useHistory, useLocation } from "react-router-dom";

export const LogIn = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const tryLogIn = async () => {
    try {
      let resp = await HttpUser.tryLogIn(username, password);
      let token = resp.data.token;
      await localStorage.setItem("token_chattingstar", token);
      // localStorage.removeItem("token_chattingstar");
      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="logo-container">
        <img src="/assets/img/logo512.png" className="App-logo" alt="logo" />
      </div>

      <div className="content-bottom">
        <h1>Chatting Star</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            tryLogIn();
          }}
        >
          <a className="btn-transp-round" href="/signup">
            +
          </a>

          <input
            type="text"
            className="input-transp"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="input-transp"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn-transp">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
