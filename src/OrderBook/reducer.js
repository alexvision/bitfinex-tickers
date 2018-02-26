// Vendor
import { get, sortedIndexBy } from 'lodash';
// Internal
import { ADD_BOOK } from './actions';

const MAX_DEPTH = 50;
// TODO: come back and look to see if we can store this in a heap or a better datastructure
const defaultState = {
  data: { ask: [], bid: [] }
};

const formatInitialData = payload => {
  const splitPayload = { ask: [], bid: [] };
  payload.forEach(val => {
    if (!val.count) return;
    if (val.amount < 0) {
      splitPayload.ask.push(val);
    } else {
      splitPayload.bid.push(val);
    }
  });
  splitPayload.ask.sort((a, b) => b.price - a.price);
  splitPayload.bid.sort((a, b) => a.price - b.price);
  return splitPayload;
};

//  TODO: Write tests, this is a fiddly function and needs coverage
const updateData = (state, payload, toInsert) => {
  const existing = state.data[toInsert];
  const index = sortedIndexBy(existing, payload, 'price');
  // In the case of a zero, then we want to remove the order at that price
  if (payload.count === 0) {
    // This method doesn't return negative for not found, so we need to ensure
    // the value is actually a match at 0 before removing it
    if (index === 0) {
      if (existing[index].price === payload.price) {
        return existing.slice(1, MAX_DEPTH);
      }
      return existing;
    }
    return [
      ...existing.slice(0, index),
      ...existing.slice(index + 1, MAX_DEPTH)
    ];
  }
  // If there is already a value at the same price we will drop that one out
  // and insert the new one
  if (get(existing, `[${index}].price`) === payload.price) {
    return [
      ...existing.slice(0, index),
      payload,
      ...existing.slice(index - 1, MAX_DEPTH)
    ];
  }
  return [
    ...existing.slice(0, index),
    payload,
    ...existing.slice(index, MAX_DEPTH)
  ]; // There are issues with these trims, but should be ok for a POC
};

const buildData = (state, payload) => {
  if (Array.isArray(payload)) {
    return formatInitialData(payload);
  }

  const toInsert = payload.amount > 0 ? 'ask' : 'bid';
  const arr = updateData(state, payload, toInsert);
  return {
    ...state.data,
    [toInsert]: arr
  };
};

const orderbook = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const data = buildData(state, action.payload);
      return { ...state, data };
    default:
      return state;
  }
};

export default orderbook;
