// Vendor
import { sortedIndexBy } from "lodash";
// Internal
import { ADD_BOOK } from "./actions";

// TODO: come back and look to see if we can store this in a heap or a better datastructure
const defaultState = {
  data: { ask: [], bid: [] }
};

const buildData = (state, payload) => {
  const splitPayload = {
    ask: [],
    bid: []
  };
  if (Array.isArray(payload)) {
    payload.forEach(val => {
      if (val.amount < 0) {
        splitPayload.ask.push(val);
      } else {
        splitPayload.bid.push(val);
      }
    });
    splitPayload.ask.sort((a, b) => a - b);
    splitPayload.bid.sort((a, b) => b - a);
    return splitPayload;
  }
  const toInsert = payload.amount > 0 ? "ask" : "bid";
  const index = sortedIndexBy(state.data[toInsert], payload, val => val.price);
  const arr = [
    ...state.data[toInsert].slice(0, index),
    payload,
    ...state.data[toInsert].slice(index, 25) // There are issues with this trim, but should be ok for a POC
  ];

  return {
    ...state.data,
    [toInsert]: arr
  };
};

const orderbook = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, data: buildData(state, action.payload) };
    default:
      return state;
  }
};

export default orderbook;
