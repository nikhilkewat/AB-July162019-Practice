import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Login from "./component/Login/Login";

import Client from "./component/Client";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
          
            <Route path="/" exact component={Login}></Route>
            <Route path="/client" component={Client}/>
           
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
