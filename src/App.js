import React, {useState} from "react";
import PlatesList from "./PlatesList.js";
import Header from "./Header.js";

const App = () => {
  const [userAddedPlates, setUserAddedPlates] = useState(["Bort", "Waylon"]);

  const addPlate = (plate) => {
    const newPlates = [plate, ...userAddedPlates];
    setUserAddedPlates({plates: newPlates})
  };

  
  const removeNameHandler = plateId => {
      setUserAddedPlates (prevPlates => 
       prevPlates.filter(plate => plate.id !==plateId));
     };


  return (
   <div className="App">
      <Header onAddPlate ={addPlate}/>
      <PlatesList plates ={userAddedPlates} removeName= {removeNameHandler}/>
   </div>
);
}

export default App;
