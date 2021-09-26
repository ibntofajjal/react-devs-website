import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="total-sellery">
          <h1>Developer's Total Salary: $50 Million</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
