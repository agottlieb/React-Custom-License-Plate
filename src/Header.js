import React, {useState} from "react";

const Header = props => {
    const [inputName, setInputName] = useState('');
 
    const submitHandler = event => {
      event.preventDefault();
      props.onAddPlate({inputName})
    }
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
      //target is input field, value returns data at cursor position
      onChange = {event=> {
        setInputName (event.target.value)
      }}
      />
      <input type="submit" 
      value="Create License Plate" 
      onSubmit={submitHandler}/>
    </aside>
  </header>
    );
}
export default Header;

