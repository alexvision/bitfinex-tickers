const ADD_SUB = "ADD_SUB";

const addSubscription = payload => ({
  type: ADD_SUB,
  payload
});

export { ADD_SUB, addSubscription };
