const ADD_TRADES = "ADD_TRADES";

const transformPayload = payload => {
  if (payload.length && Array.isArray(payload[0])) {
    return payload[0].map(val => transformPayload(["init", val]));
  }
  // Strip out this catch
  if (Array.isArray(payload[1])) {
    const [id, time, amount, price, ...rest] = payload[1];
    return { id, time, amount, price };
  }
  console.error("fallthrough", payload);
};

const addTrades = payload => ({
  type: ADD_TRADES,
  payload: transformPayload(payload)
});

export { ADD_TRADES, addTrades };
