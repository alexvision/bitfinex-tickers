// Vendor
import React from "react";

// Styles
import "./OrderBook.css";

const Row = ({ amount, count, price }, index) => (
  <tr key={`${amount}-${index}`}>
    <td>{count}</td>
    <td>{amount}</td>
    <td>{price}</td>
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
            <td>Price</td>
          </tr>
        </thead>
        <tbody>{orderbook.bid.map(Row)}</tbody>
      </table>
      <table>
        <caption>Order Book: Ask</caption>
        <thead>
          <tr>
            <td>Count</td>
            <td>Amount</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>{orderbook.ask.map(Row)}</tbody>
      </table>
    </section>
  );
};

export default OrderBook;
