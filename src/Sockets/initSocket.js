// Internal
import { addBook } from '../OrderBook/actions';
import { addSubscription } from './actions';
import { addTrades } from '../Trades/actions';
import { getChannelName } from './selectors';

const initSocket = ({ dispatch, getState }) => {
  const socket = new WebSocket('wss://api.bitfinex.com/ws/2');

  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'book',
        symbol: 'ETHUSD'
      })
    );
    socket.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'trades',
        symbol: 'tETHUSD'
      })
    );
  };
  socket.onmessage = event => {
    const data = JSON.parse(event.data);
    if (data.event) {
      switch (data.event) {
        case 'subscribed':
          return dispatch(addSubscription(data));
        default:
          break;
      }
    }
    const state = getState();
    const [id, ...payload] = data;
    const channel = getChannelName(state, id);

    // TODO: handle the heartbeat properly
    if (payload[0] === 'hb') {
      return;
    }
    switch (channel) {
      case 'trades':
        return dispatch(addTrades(payload));
      case 'book':
        return dispatch(addBook(payload));
      default:
        break;
    }
  };

  return socket;
};

export default initSocket;
