// Vendor
import { connect } from "react-redux";

// Internal
import Trades from "./Trades";
import { getLatestTrades } from "./selectors";

const mapStateToProps = state => {
  const trades = getLatestTrades(state);
  return { trades };
};

export default connect(mapStateToProps)(Trades);
