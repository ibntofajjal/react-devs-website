import React, { useEffect, useState } from "react";
import Person from "../Person/Person";
import Salary from "../Salary/Salary";
import "./Developer.css";
const Developer = () => {
  const [developers, setDevelopers] = useState([]);
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch(`./developers.JSON`)
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  const addToCountHandler = (developer) => {
    const newCount = [...detail, developer];
    setDetail(newCount);
  };
  return (
    <div className="container">
      <div className="developer">
        <div className="developer-side">
          {developers.map((developer) => (
            <Person
              key={developer.key}
              developer={developer}
              addToCountHandler={addToCountHandler}
            ></Person>
          ))}
        </div>

        <div className="developer-salary">
          <Salary detail={detail}></Salary>
        </div>
      </div>
    </div>
  );
};

export default Developer;
