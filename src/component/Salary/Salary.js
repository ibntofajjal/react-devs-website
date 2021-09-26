import React from "react";
import "./Salary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Name from "./Name/Name";
const Salary = (props) => {
  const { detail } = props;

  let total = 0;
  for (const developer of detail) {
    total += developer.sellery;
  }

  const moneyIcon = <FontAwesomeIcon icon={faDollarSign} />;
  const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />;
  return (
    <div>
      <div className="salary-container">
        <h5>
          {checkIcon} SELECT : {props.detail.length}
        </h5>
        <h5>
          '{moneyIcon} TOTAL : {total}
        </h5>{" "}
        <hr />
        <h5>➤ SELECTED DEVELOPER </h5>
        {detail.map((name) => (
          <Name name={name}></Name>
        ))}
      </div>
    </div>
  );
};

export default Salary;
