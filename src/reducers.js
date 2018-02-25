// Vendor
import { combineReducers } from "redux";
// Internal
import orderbook from "./OrderBook/reducer";
import sockets from "./Sockets/reducer";
import trades from "./Trades/reducer";

const reducers = combineReducers({
  orderbook,
  sockets,
  trades
});

export default reducers;
