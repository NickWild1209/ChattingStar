import React, { useState } from "react";

import { CStar } from "../modules/CStar";

export const StarPanel = () => {
  const [star0, setStar0] = useState(new CStar(300, 100));

  const moveStar = (i, dx, dy) => {
    let star = new CStar(star0.x + dx, star0.y + dy);
    setStar0(star);
  };

  document.onkeydown = evt => {
    switch (evt.keyCode) {
      case 38: //up
        moveStar(0, 0, -5);
        break;
      case 40: //down
        moveStar(0, 0, 5);
        break;
      case 39: //right
        moveStar(0, 5, 0);
        break;
      case 37: //left
        moveStar(0, -5, 0);
        break;

      default:
        break;
    }
  };

  return (
    <svg className="star-panel">
      <g id="xx">
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
      <use id="yy" x={star0.x} y={star0.y} href="#xx" />
      <use x="600" y="250" href="#xx" />
      <use x="100" y="300" href="#xx" />
      <use x="400" y="600" href="#xx" />
    </svg>
  );
};
