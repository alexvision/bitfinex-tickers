import React, { Component } from 'react';
import './App.css';
import OrderBook from '../OrderBook/Container';
import Trades from '../Trades/Container';

class App extends Component {
  render() {
    const { socket } = this.props;
    return (
      <section>
        <button onClick={() => socket.onclose('error', new Error('foo'))}>
          BREAK WEBSOCKETS!
        </button>
        <div className="App">
          <OrderBook />
          <Trades />
        </div>
      </section>
    );
  }
}

export default App;
