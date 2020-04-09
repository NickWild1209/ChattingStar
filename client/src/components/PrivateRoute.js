import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import * as HttpUser from "../http/HttpUser";

export default class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthed: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.check();
  }

  async check() {
    this.setState({ isLoading: true });
    let token = localStorage.getItem("token_chattingstar");

    if (token) {
      try {
        let resp = await HttpUser.checkToken(token);
        this.setState({ isAuthed: true, isLoading: false });
      } catch (err) {
        console.log(err);
        this.setState({ isAuthed: false, isLoading: false });
      }
    } else {
      this.setState({ isAuthed: false, isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) return <div className="w3-black">loading</div>;

    return (
      <Route
        {...this.props.rest}
        render={({ location }) =>
          this.state.isAuthed ? (
            this.props.children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
}
