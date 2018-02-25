import { ADD_SUB } from "./actions";

const defaultState = {
  channels: {},
  data: {}
};

const trades = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SUB:
      return {
        channels: {
          ...state.channels,
          [action.payload.chanId]: action.payload
        },
        data: { ...state.data, [action.payload.chanId]: [] }
      };
    default:
      return state;
  }
};

export default trades;
