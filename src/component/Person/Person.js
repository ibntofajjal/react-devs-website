import React from "react";

import "./Person.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const Person = (props) => {
  const { name, img, position, address, sellery, exp } = props.developer;
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  return (
    <>
      <div className="row g-4">
        <div className="col card-body text-center">
          <div className="card h-100">
            <div className="img">
              <img src={img} className="card-img-top img-fluid" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6 className="card-text text-danger">
                <b>
                  <i>{position}</i>
                </b>
              </h6>
              <p className="card-text">
                <b>Address:</b> {address}
              </p>
              <p className="card-text">
                <b>Experience:</b> {exp}
              </p>
              <p className="card-text">
                <b>Salary:</b> {sellery}
              </p>
              <button
                onClick={() => props.addToCountHandler(props.developer)}
                className="btn btn-primary"
              >
                {plusIcon} Add To Count
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Person;
