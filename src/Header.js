import React, {useState} from "react";

const Header = (props) => {
    const [inputName, setInputName] = useState ({submittedName: ''})

  return (
  <header className="header">
    <h1>Custom License Plate Printer</h1>
    <aside>
      <input type="text" 
      placeholder="My name is..." 
      className="search" 
      value={inputName.submittedName}
      onChange ={setInputName}/>
      <input type="submit" value="Create License Plate" />
    </aside>
  </header>
    );
};
export default Header;
