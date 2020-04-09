import React, { useState, useRef } from "react";
import { Avatar } from "../components/Avatar";
import CountrySeletor from "../components/CountrySeletor";
import ReCAPTCHA from "react-google-recaptcha";

import { useHistory, useLocation } from "react-router-dom";

import * as HttpUser from "../http/HttpUser";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("US");
  const [gender, setGender] = useState(0);
  const [age, setAge] = useState(25);
  let history = useHistory();
  let location = useLocation();

  const onSubmitForm = async (event) => {
    event.preventDefault();

    const recaptchaValue = recaptchaRef.current.getValue();

    if (!recaptchaValue) return alert("Verify you are not a robot, please.");
    let obj = { username, password, country, gender, age };
    try {
      let resp = await HttpUser.trySignUp(obj);
      let token = resp.data.token;
      await localStorage.setItem("token_chattingstar", token);
      // localStorage.removeItem("token_chattingstar");
      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
    } catch (err) {
      console.log(err);
    }
  };

  const recaptchaRef = useRef();

  const onChangeRecaptcha = (value) => {
    console.log("recaptcha ", value);
  };

  return (
    <form className="container" onSubmit={onSubmitForm}>
      <div className="row">
        <div className="col">
          <Avatar />

          <div className="mt-3">
            <div>Username</div>
            <input
              type="text"
              className="input-transp"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <div>Password</div>
            <input
              type="password"
              className="input-transp"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <CountrySeletor
              value={country}
              onChange={(country) => setCountry(country)}
            />
          </div>
          <div className="mt-3">
            <div style={{ display: "inline-block" }}>
              <div>Age</div>
              <input
                type="number"
                className="input-transp-sm"
                placeholder="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div style={{ display: "inline-block", marginLeft: "10px" }}>
              <div>Gender</div>
              <select
                className="input-transp-sm w3-black"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value={0}>Male</option>
                <option value={1}>Female</option>
                <option value={2}>Other</option>
              </select>
            </div>
          </div>
          <div className="mt-3">
            <ReCAPTCHA
              sitekey="6LcyhucUAAAAAKyGU-pG8fvZPM3ic9Iev4uSZgbi"
              ref={recaptchaRef}
              onChange={onChangeRecaptcha}
              theme="dark"
            />
          </div>

          <div className="mt-5">
            <button type="submit" className="btn-transp">
              Sign up
            </button>
          </div>
        </div>

        <div className="col">
          <h1 className="w3-center">HELP</h1>
        </div>
      </div>
    </form>
  );
};
