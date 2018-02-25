// Vendor
import { connect } from "react-redux";

// Internal
import OrderBook from "./OrderBook";
import { getOrderBook } from "./selectors";

const mapStateToProps = state => {
  const orderbook = getOrderBook(state);
  return { orderbook };
};

export default connect(mapStateToProps)(OrderBook);
