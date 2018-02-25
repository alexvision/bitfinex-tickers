import React, { Component } from "react";
import "./App.css";
import OrderBook from "../OrderBook/Container";
import Trades from "../Trades/Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrderBook />
        <Trades />
      </div>
    );
  }
}

export default App;
