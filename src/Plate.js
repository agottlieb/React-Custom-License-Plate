import React from "react";

const Plate = props => {
  const deleteByIndex = () => props.removeName(props.index);
    return (
  <li className="plate">
    <p className="state"> Springfield </p>
    <p className="name"> {props.name} </p>
    <span onClick={deleteByIndex} className="plate__delete">X</span>
  </li>
    );
};

export default Plate;


