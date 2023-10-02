import React, { useState } from 'react';
import './App.css';
import MainDash from './components/Pages/MainDash';
// import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Customers from './components/Pages/Customers';
import Products from './components/Pages/Products'

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSidebarClick = (option) => {
    setSelectedOption(option);
  };

  const pageComponents = {
    Customers: <Customers />,
    Dashboard: <MainDash />,
    Products: <Products />,
    // Add more components as needed
  };

  return (
    <div className="App">
      <div className="AppGlass">
      <Sidebar onMenuItemSelect={handleSidebarClick} />
       {selectedOption && pageComponents[selectedOption.heading]}
      {/* <RightSide /> */}
      </div>
    </div>
  );
}

export default App;
