import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputText from "./InputText";

class SuperiorNavigation extends Component {
  render() {
    const { typedText, getBywordApi } = this.props;

    return (
      <div className="d-flex justify-content-between align-items-center">
        <InputText typedText={ typedText } getBywordApi={ getBywordApi } />
        <Link to="/login" >Login</Link>
      </div>
    )
  }
}

export default SuperiorNavigation;
