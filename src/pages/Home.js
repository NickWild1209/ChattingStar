import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import "../App.scss";

export const Home = () => {
  return (
    <div>
      <video className="video-background" autoPlay loop muted>
        <source src="/assets/video/starfield.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="panels">
        <div className="panel-ad"></div>
        <div className="panel-main"></div>
        <div className="panel-chat"></div>
      </div>
    </div>
  );
};
