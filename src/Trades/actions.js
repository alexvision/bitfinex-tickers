const ADD_TRADES = 'ADD_TRADES';
const RESET_TRADES = 'RESET_TRADES';

const transformPayload = payload => {
  if (payload.length && Array.isArray(payload[0])) {
    return payload[0].map(val => transformPayload(['init', val]));
  }
  const [id, time, amount, price] = payload[1];
  return { id, time, amount, price };
};

const addTrades = payload => ({
  type: ADD_TRADES,
  payload: transformPayload(payload)
});

const resetTrades = () => ({ type: RESET_TRADES });

export { ADD_TRADES, RESET_TRADES, addTrades, resetTrades };
