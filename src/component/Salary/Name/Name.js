import React from "react";

const Name = (props) => {
  const { name } = props.name;
  return (
    <div>
      <h6>‣ {name}</h6>
    </div>
  );
};

export default Name;
