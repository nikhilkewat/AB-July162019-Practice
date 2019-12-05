import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Product from "../Product/Product";
import page2 from "./Page2/Page2"

export default class Client extends React.Component {
  render() {
    return (
      <div className="content">
        <div>
          <Link to="/client/product">Product</Link>
          <Link to="/client/page2">Page 2</Link>
          <Link to="/page3">Page 3</Link>
          </div>
        <div>
          <Route path="/client/product" exact component={Product}></Route>
          <Route path="/client/page2" exact component={page2}></Route>
           
          
        </div>
      </div>
    );
  }
}
 