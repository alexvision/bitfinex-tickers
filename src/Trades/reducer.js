import { ADD_TRADES } from "./actions";
const defaultState = {
  data: []
};

const buildData = (state, payload) => {
  if (Array.isArray(payload)) {
    return [...state.data, ...payload];
  }
  return [...state.data, payload];
};

const trades = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TRADES:
      return { ...state, data: buildData(state, action.payload) };
    default:
      return state;
  }
};

export default trades;
