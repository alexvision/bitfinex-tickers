// Vendor
import { get, takeRight } from "lodash";

const getTrades = state => get(state, "trades.data", []);

const getLatestTrades = (state, last = 50) =>
  takeRight(getTrades(state), last).reverse();

export { getTrades, getLatestTrades };
