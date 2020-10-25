import React, {useState, useEffect} from "react";
import PlatesList from "./PlatesList.js";
import Header from "./Header.js";

const App = () => {
  //savedNames is function so it is only rendered when useState is rendered the first time
  const savedNames = () => window.localStorage.getItem(JSON.parse('savedNames') )|| ""

  const [userAddedPlates, setUserAddedPlates] = useState(["Bort", "Waylon"], savedNames)

  //Saved items in local storage to show up when app renders 
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
