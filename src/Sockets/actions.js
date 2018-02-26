const ADD_SUB = 'ADD_SUB';
const ADD_RETRY = 'ADD_RETRY';

const addSubscription = payload => ({
  type: ADD_SUB,
  payload
});

const incrementRetry = () => ({ type: ADD_RETRY });

export { ADD_SUB, ADD_RETRY, addSubscription, incrementRetry };
