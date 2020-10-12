import React, {useState} from "react";
import PlatesList from "./PlatesList.js";
import Header from "./Header.js";

const App = () => {
  const [userAddedPlates, setUserAddedPlates] = useState([]);

  const addPlateHandler = plate => {
    setUserAddedPlates(prevPlates => [...prevPlates, { id: Math.random().toString(), ...plate } 
    ]);
  }
  
  
  return (
   <div className="App">
      <Header onAddPlate ={addPlateHandler}/>
      <PlatesList plates ={userAddedPlates} />
   </div>
);
}

export default App;
