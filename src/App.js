import React, {useState, useEffect} from "react";
import PlatesList from "./PlatesList.js";
import Header from "./Header.js";

function getDefaultState() {
  const savedNames = window.localStorage.getItem('savedNames')
  if (savedNames) {
    return JSON.parse(savedNames)
  }
  return ["Bort", "Waylon"]
}

const App = () => {
const savedNames = getDefaultState()

const [userAddedPlates, setUserAddedPlates] = useState(savedNames)

  //Saved items in local storage (componentDidUpdate) 
  //second value is called so it only runs when userAddedPlates is updated
  useEffect( () => {
    const savedNames =JSON.stringify(userAddedPlates)
     window.localStorage.setItem('savedNames', savedNames)
    }, [userAddedPlates])  

  const addPlate = (plate) => {
    const newPlates = [plate, ...userAddedPlates];
    setUserAddedPlates(newPlates)
  };

  //"value" is never called but needs to be defined in order to get to index (a second variable)
     const removeNameHandler = (clickedIndex) => {
      const filteredValues = userAddedPlates.filter((value, index) => {
        return index !== clickedIndex
      })
      setUserAddedPlates(filteredValues);
    };   


  return (
   <div className="App">
      <Header onAddPlate ={addPlate}/>
      <PlatesList plates ={userAddedPlates} removeName= {removeNameHandler}/>
   </div>
);
}

export default App;
