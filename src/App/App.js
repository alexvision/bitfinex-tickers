import React, { Component } from 'react';
import './App.css';
import OrderBook from '../OrderBook/Container';
import Trades from '../Trades/Container';

class App extends Component {
  render() {
    return (
      <section>
        <button>BREAK WEBSOCKETS!</button>
        <div className="App">
          <OrderBook />
          <Trades />
        </div>
      </section>
    );
  }
}

export default App;
