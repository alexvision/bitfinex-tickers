import { get } from "lodash";

const getChannelName = (state, id) =>
  get(state, `sockets.channels[${id}].channel`);

export { getChannelName };
