import { ADD_SUB, ADD_SOCKET, ADD_RETRY } from './actions';

const defaultState = {
  channels: {},
  data: {},
  retries: 0
};

const trades = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SUB:
      return {
        ...state,
        channels: {
          ...state.channels,
          [action.payload.chanId]: action.payload
        },
        data: { ...state.data, [action.payload.chanId]: [] }
      };
    case ADD_SOCKET:
      return {
        ...state,
        socket: action.payload
      };
    case ADD_RETRY:
      return {
        ...state,
        retries: state.retries + 1
      };
    default:
      return state;
  }
};

export default trades;
