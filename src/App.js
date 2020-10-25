import React, {useState} from "react";
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

  //value is never called but needs to be defined in order to get to index (a second variable)
     const removeNameHandler = (clickedIndex) => {
      const filteredValues = userAddedPlates.filter((value, index) => {
        return index !== clickedIndex
      })
      
      setUserAddedPlates(filteredValues);
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
