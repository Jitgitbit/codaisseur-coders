import React from "react";

const Developer = props => {
  console.log(this.props.dev)
  return (
    <div>
      <h2>{props.dev.name}</h2>
      <h3>{props.dev.email}</h3>
    </div>
  );
};

export default Developer;