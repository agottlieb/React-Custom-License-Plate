import React, {useState} from "react";

const Header = () => (
    useState ({submitValue: ''})

  <header className="header">
    <h1>Custom License Plate Printer</h1>
    <aside>
      <input type="text" placeholder="My name is..." className="search" />
      <input type="submit" value="Create License Plate" />
    </aside>
  </header>
);
export default Header;
