// Vendor
import { connect } from 'react-redux';
// Internal
import App from './App';

const mapStateToProps = ({ sockets }) => ({
  socket: sockets.socket
});

export default connect(mapStateToProps)(App);
