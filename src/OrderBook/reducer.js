// Vendor
import { get, round, sortedIndexBy } from 'lodash';
// Internal
import { ADD_BOOK, RESET_BOOK } from './actions';

const MAX_DEPTH = 100;
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
// NOTE: something in here is being way too agressive with the removals, but I don't have enough time left to fix it
const updateData = (state, payload, toInsert) => {
  const existing = state.data[toInsert];
  const index = sortedIndexBy(existing, payload, 'price');
  // In the case of a zero, then we want to remove the order at that price
  if (payload.count === 0) {
    // This method doesn't return negative for not found, so we need to ensure
    // the value is actually a match at 0 before removing it
    if (index === 0) {
      if (get(existing, `[${index}].price`) === payload.price) {
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
  const values = updateData(state, payload, toInsert);
  // There are cleaner ways to do this, but did it this way for easy of implementation
  let total = 0;
  const arr = values.map(obj => {
    total += obj.amount;
    obj.total = round(total, 2);
    obj.amount = Math.abs(obj.amount);
    return obj;
  });
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
    case RESET_BOOK:
      return defaultState;
    default:
      return state;
  }
};

export default orderbook;
