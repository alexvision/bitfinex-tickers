// Vendor
import React from "react";

// TODO: Filter out duplicates vs adding index
const Row = ({ id, time, amount, price }, index) => {
  // could use moment for something prettier here
  const date = new Date(time);
  const dateString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return (
    <tr key={`${id}-${index}`}>
      <td>{dateString}</td>
      <td>{amount}</td>
      <td>{price}</td>
    </tr>
  );
};

class Trades extends React.Component {
  render() {
    const { trades } = this.props;
    return (
      <section>
        <table>
          <caption>Trades</caption>
          <thead>
            <tr>
              <td>Time</td>
              <td>Price</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>{trades.map(Row)}</tbody>
        </table>
      </section>
    );
  }
}

export default Trades;
