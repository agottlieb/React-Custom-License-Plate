import React from "react";
import Plate from "./Plate.js";

const PlatesList = props => {
  const renderPlate = (name, index) => (
    <Plate 
      className="plates-list"
      name={name}
      key={name}
      removeName={props.removeName}
      index={index}
    />
  );
    const PlateElements = props.plates.map(renderPlate);
    return <main> {PlateElements} </main>

};

export default PlatesList;
