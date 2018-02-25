// Vendor
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Internal
import "./index.css";
import App from "./App/App";
import initSocket from "./Sockets/initSocket";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Keep this as a variable so we could fire updates if we need to.
const socket = initSocket(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
