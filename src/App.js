// import React, { Component } from "react";
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import Home from "./pages/Home";
import Header from "./components/Header/index.js";
import Main from "./components/Main/index.js";
import Footer from "./components/Footer/index.js";

import "./styles/style.css"
// import { Routes } from "react-router";


  function App() {

    // const { movieItems } = data;
    // const [cartItems, setCartItems] = useState([]);

    return (
      <div>
          {/* <Routes> */}
            
              <Header /> 
              <Main/> 
              <Footer year={new Date().getFullYear()}/>
              
                  {/* <Route exact path="/" component={Home} /> */}
              
            

      </div>
      );
   }

export default App;
