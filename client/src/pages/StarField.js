import React from "react";
import "../App.scss";

import { ChatPanel } from "../components/ChatPanel";
import { StarPanel } from "../components/StarPanel";
import { AuthButton } from "../components/AuthButton";

export const StarField = () => {
  return (
    <div>
      {/* <video className="video-background" preload="auto" autoPlay loop muted>
        <source src="/assets/video/starfield.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video> */}
      <AuthButton style={{ position: "fixed", left: "200px" }} />
      <div className="panel-ad-bg"></div>
      <div className="panel-star-bg"></div>
      <div className="panel-chat-bg"></div>

      <ChatPanel />
      <StarPanel />
    </div>
  );
};
