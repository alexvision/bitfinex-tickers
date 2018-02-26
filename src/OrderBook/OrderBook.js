// Vendor
import React from 'react';

// Styles
import './OrderBook.css';

const LeftRow = ({ amount, count, price, total }, index) => (
  <tr key={`${amount}-${index}`}>
    <td>{count}</td>
    <td>{amount}</td>
    <td>{total}</td>
    <td>{price}</td>
  </tr>
);

const RightRow = ({ amount, count, price, total }, index) => (
  <tr key={`${amount}-${index}`}>
    <td>{price}</td>
    <td>{total}</td>
    <td>{amount}</td>
    <td>{count}</td>
  </tr>
);

const OrderBook = ({ orderbook }) => {
  return (
    <section className="OrderBook">
      <table>
        <caption>Order Book: Bid</caption>
        <thead>
          <tr>
            <td>Count</td>
            <td>Amount</td>
            <td>Total</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>{orderbook.bid.map(LeftRow)}</tbody>
      </table>
      <table>
        <caption>Order Book: Ask</caption>
        <thead>
          <tr>
            <td>Price</td>
            <td>Total</td>
            <td>Amount</td>
            <td>Count</td>
          </tr>
        </thead>
        <tbody>{orderbook.ask.map(RightRow)}</tbody>
      </table>
    </section>
  );
};

export default OrderBook;
