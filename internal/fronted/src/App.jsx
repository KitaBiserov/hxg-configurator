import "./App.css";
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Categories from "./components/Categories";
import EquipmentBlock from "./components/EquipmentBlock";
import Sceleton from "./components/EquipmentBlock/Sceleton";
import logo from "./assets/img/logo.png";
import CalculationBlock from "./components/CalculationBlock";
import Vendors from "./components/Vendors";
import Sort from "./components/Sort";
import NavigationButtons from "./components/NavigationButtons";
import axios from "axios";

import Home from "./pages/Home";
import ServerConfigurator from "./pages/ServerConfigurator";


function App() {
  
  return (
    <div className="wrapper">
      <div className="grid-header">
        <div className="container-logo">
          <img width="200" src={logo} alt="logo"></img>
        </div>
        
          <div className="container-horizontal-header">
            <h4>VENDORS</h4>
          </div>
          <div className="container-empty"></div>
          <div className="container-horizontal-header">
            <Vendors />
          </div>
          
        </div>
        <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/server-configurator" element={ServerConfigurator} />
     
       </Routes>
      <div className="grid-footer">
      <button><a href="http://localhost:3000/server-configurator"></a></button>
      </div>
    </div>
  );
}

export default App;
