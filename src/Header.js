import React, {useState} from "react";

const Header = (props) => {
    const [inputName, setInputName] = useState ( '' )
 
    const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
  <header className="header">
    <h1>Custom License Plate Printer</h1>
    <aside>
      <input 
      type="text" 
      placeholder="My name is..." 
      id= "submittedName"
      className="search" 
      value={inputName}
      //event target is input field, value returns data at cursor position
      onChange = {event=>setInputName (event.target.value)
      }
      />
      <input type="submit" 
      value="Create License Plate" 
      onClick={submitHandler}/>
    </aside>
  </header>
    );
};
export default Header;

