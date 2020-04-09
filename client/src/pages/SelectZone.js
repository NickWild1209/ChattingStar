import React, { Component } from "react";
import { CStar } from "../modules/CStar";

export default class SelectZone extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  componentDidMount() {
    this.moveIt();
  }

  moveIt() {
    let element = document.getElementById("xx");
    let y = Number(element.getAttributeNS(null, "cy")) + 0.5;
    element.setAttributeNS(null, "cy", y);
    setTimeout(() => this.moveIt(), 16);
    // this.setState({ y });
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          background: "transparent",
          position: "fixed",
          left: "0",
          top: "0",
        }}
      >
        <h1>SelectZone</h1>
        <div className="row">
          <div className="col-sm-2 w3-teal">
            <h2>Google Ads here.</h2>
          </div>
          <div className="col-sm-8 w3-center">
            <h2>Select your zone.</h2>

            <svg
              style={{
                width: "800px",
                height: "800px",
                display: "inline-block",
                border: "3px solid red",
              }}
            >
              <g>
                <circle
                  id="xx"
                  cx="80"
                  cy="80"
                  r="40"
                  style={{ stroke: "#006600", fill: "#00cc00" }}
                />
                <image
                  x="0"
                  y="0"
                  href="/assets/img/star0.png"
                  height="150"
                  width="150"
                  style={{
                    opacity: 0.5,
                  }}
                />
              </g>
            </svg>
          </div>
          <div className="col-sm-2 w3-green">
            <h2>Your account info here.</h2>
          </div>
        </div>
      </div>
    );
  }
}
