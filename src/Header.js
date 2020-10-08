import React, {useState} from "react";

const Header = (props) => {
    const [inputName, setInputName] = useState ( {submittedName: ''} )
 
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
      value={inputName.submittedName}
      onChange = {setInputName}
      />
      <input type="submit" 
      value="Create License Plate" 
      onClick={submitHandler}/>
    </aside>
  </header>
    );
};
export default Header;

/* 
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input 
            type="text" 
            id="title" 
            value={inputState.title} 
            onChange={event => {
              const newTitle = event.target.value;
                setInputState(prevInputState => ({
                  title:newTitle, 
                  amount: prevInputState.amount
                  })
                )} 
            }/>
*/