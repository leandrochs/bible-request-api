import React, { Component } from "react";
import { CreateUser } from "./CreateUser";
import { OldUser } from "./OldUser";

export class Login extends Component {
  render() {
    return (
      <div>
        <CreateUser />
        <OldUser />
      </div>
    )
  }
}