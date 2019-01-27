import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom"

import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div className="container clear-top">
              <AppHeader />
              <AppMain />
            </div>
            <AppFooter />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
