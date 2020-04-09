import React from "react";

export const Profile = () => {
  return (
    <div className="w3-container w3-center">
      <div style={{ display: "inline-block" }}>
        <svg height="300px">
          <g>
            <rect
              x="50"
              y="20"
              rx="20"
              ry="20"
              width="150"
              height="150"
              style={{
                fill: "#00000000",
                stroke: "white",
                strokeWidth: 1,
                opacity: 0.5
              }}
            />
            <image
              x="100"
              y="100"
              href="/assets/img/star0.png"
              height="150"
              width="150"
              style={{
                opacity: 0.5
              }}
            />

            <image
              x="50"
              y="40"
              href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"
              height="80"
              width="80"
            />
            <text x="150" y="40" fill="white">
              Alex1209
            </text>
            <text x="150" y="60" fill="white">
              US
            </text>
            <text x="150" y="80" fill="white">
              29y. M
            </text>
            <text x="150" y="100" fill="white">
              Single
            </text>

            <text x="50" y="140" fill="white">
              <tspan x="50" y="140">
                You know, Elon Musk now
              </tspan>
              <tspan x="50" y="160">
                trying to send people to the Mars...
              </tspan>
            </text>
          </g>
        </svg>
        <br />
        <input className="input-transp" placeholder="username" />
        <br />
        <input className="input-transp" placeholder="email" />
        <br />
        <input className="input-transp" placeholder="password" />
        <br />
        <input className="input-transp" placeholder="country" />
        <br />
        <input type="date" className="input-transp" placeholder="birthday" />
        <br />
      </div>
    </div>
  );
};
