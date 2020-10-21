import React, {useState} from "react";

const Header = props => {
    const [inputName, setInputName] = useState('');
 
    const submitHandler = (event) => {
      event.preventDefault();
      props.onAddPlate(inputName)
      setInputName("")
    }
  return (
  <header className="header">
    <form onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder="My name is..." 
          id="submittedName"
          className="search" 
          value={inputName}
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

