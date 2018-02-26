const ADD_SUB = 'ADD_SUB';
const ADD_SOCKET = 'ADD_SOCKET';
const ADD_RETRY = 'ADD_RETRY';

const addSubscription = payload => ({
  type: ADD_SUB,
  payload
});

const addSocket = payload => ({
  type: ADD_SOCKET,
  payload
});

const incrementRetry = () => ({ type: ADD_RETRY });

export {
  ADD_SUB,
  ADD_SOCKET,
  ADD_RETRY,
  addSubscription,
  addSocket,
  incrementRetry
};
