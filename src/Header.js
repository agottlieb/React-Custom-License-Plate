import React, {useState} from "react";

const Header = props => {
    const [inputName, setInputName] = useState('');
    const [error, setError] = useState('');
 
    const submitHandler = (event) => {
      event.preventDefault();
      if (inputName === '') {
        setError('Please enter a value') 
        return;
      } 
      props.onAddPlate(inputName)
      setInputName("")
      setError("")
    }

  return (
  <header className="header">
    <form onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder="My name is..." 
          id="submittedName"
          className="search" 
          value= {inputName}
          //event handler for typing name in field
          onChange = {event=> {
            setInputName (event.target.value)
          }}
        />
        <input type="submit" 
          value="Create License Plate" 
          className="button"/>
        <div className ="error"> {error} </div>   
      </form>    
  </header>
    );
}
export default Header;


