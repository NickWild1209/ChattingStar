import React from "react";

import "../App.scss";

import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  // Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import { fakeAuth } from "../modules/fakeAuth.js";

export const LogIn = () => {
  // const [isBusy, setIsBusy] = useState();

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  const onClickLogIn = async e => {
    // setIsBusy(true);
    try {
      await login();
    } catch (err) {
      console.log(err);
    }
    // setIsBusy(false);
  };

  const onClickSignUp = e => {
    console.log("signup");
  };

  return (
    <div>
      <video className="video-background" preload="auto" autoPlay loop muted>
        <source src="/assets/video/starfield.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="logo-container">
        <a href="/home" style={{ zIndex: 500 }}>
          <img src="/assets/img/logo512.png" className="App-logo" alt="logo" />
        </a>
      </div>

      <div className="content-bottom">
        <h1>Chatting Star</h1>

        <button className="btn-transp-round" onClick={onClickSignUp}>
          +
        </button>

        <input
          type="text"
          className="input-transp"
          placeholder="userid/email"
        ></input>
        <input
          type="password"
          className="input-transp"
          placeholder="password"
        ></input>

        <button className="btn-transp" onClick={onClickLogIn}>
          Log In
        </button>
      </div>
    </div>
  );
};
