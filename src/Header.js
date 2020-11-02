import React, {useState} from "react";

const Header = props => {
    const [inputName, setInputName] = useState('');
 
    const submitHandler = (event) => {
      event.preventDefault();
      props.onAddPlate(inputName)
      setInputName("")
    }

    const emptyStringHandler = () => {
      if (inputName === '') {
      alert ('Please enter a name') 
      return;
      }
      else if (inputName == true) 
    {inputName}
    } 

  return (
  <header className="header">
    <form onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder="My name is..." 
          id="submittedName"
          className="search" 
          value= {emptyStringHandler}
          //event handler for typing name in field
          onChange = {event=> {
            setInputName (event.target.value)
          }}
        />
        <input type="submit" 
          value="Create License Plate" />
      </form>
  </header>
    );
}
export default Header;


