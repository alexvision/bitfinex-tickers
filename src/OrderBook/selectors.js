import { get } from "lodash";

const getOrderBook = state =>
  get(state, "orderbook.data", { ask: [], bid: [] });

export { getOrderBook };
