import React, { Component } from "react";
import Header from "./components/Header/index.js";
import Main from "./components/Main/index.js";
import Footer from "./components/Footer/index.js";

import "./styles/style.css"

class App extends Component {
   render() {
    return (
      <>
        <div className="">
          <Header/> 
          <Main/>
          <Footer year={new Date().getFullYear()}/>
        </div>
      </>
      );
   }
}
export default App;
