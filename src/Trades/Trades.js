// Vendor
import React from 'react';

// Styles
import './Trades.css';

// TODO: Filter out duplicates vs adding index
const Row = ({ id, time, amount, price }, index) => {
  // could use moment for something prettier here
  const date = new Date(time);
  const dateString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return (
    <tr key={`${id}-${index}`}>
      <td>{dateString}</td>
      <td>{price}</td>
      <td>{amount}</td>
    </tr>
  );
};

class Trades extends React.Component {
  render() {
    const { trades } = this.props;
    return (
      <section>
        <table className="Trades">
          <caption>Trades</caption>
          <thead>
            <tr>
              <td className="Trades-header">Time</td>
              <td className="Trades-header">Price</td>
              <td className="Trades-header">Amount</td>
            </tr>
          </thead>
          <tbody>{trades.map(Row)}</tbody>
        </table>
      </section>
    );
  }
}

export default Trades;
