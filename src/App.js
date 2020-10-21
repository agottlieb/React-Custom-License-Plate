import React, {useState, useEffect} from "react";
import PlatesList from "./PlatesList.js";
import Header from "./Header.js";

const App = () => {
  const [userAddedPlates, setUserAddedPlates] = useState(["Bort", "Waylon"]);

  const addPlate = (plate) => {
    const newPlates = [plate, ...userAddedPlates];
    setUserAddedPlates(newPlates)
    // useEffect( () => {
    //   window.localStorage.setItem('plate', plate)
    // })
  };

  const removeNameHandler = (clickedIndex) => {
      const filterCallback = (_, index) => index !==clickedIndex;
      const newPlates = setUserAddedPlates(filterCallback);
      setUserAddedPlates(newPlates);
     };

//Saved items in local storage to show up when app renders
 

//Handler to saving items to local storage
//     const saveLocal = useEffect( () => {window.localStorage.setItem('plate', plate)})
  
// };

  return (
   <div className="App">
      <Header onAddPlate ={addPlate}/>
      <PlatesList plates ={userAddedPlates} removeName= {removeNameHandler}/>
   </div>
);
}

export default App;
