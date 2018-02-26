import { get } from 'lodash';

const getChannels = state => get(state, 'sockets.channels');

const getChannelName = (state, id) =>
  get(getChannels(state), `[${id}].channel`);

const getChannelSymbol = (state, id) =>
  get(getChannels(state), `[${id}].symbol`);

const getRetries = state => get(state, 'sockets.retries');

export { getChannelName, getChannels, getChannelSymbol, getRetries };
