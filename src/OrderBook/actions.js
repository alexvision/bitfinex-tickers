// Vendor
import { get } from "lodash";

const ADD_BOOK = "ADD_BOOK";

const transformPayload = payload => {
  if (get(payload, "[0].length") && payload[0].length > 3) {
    return payload[0].map(val => transformPayload([val]));
  }
  const [price, count, amount] = payload[0];
  return { price, count, amount };
};

const addBook = payload => ({
  type: ADD_BOOK,
  payload: transformPayload(payload)
});

export { ADD_BOOK, addBook };
