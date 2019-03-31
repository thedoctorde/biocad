import App from './app-view'
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
    return {
        username: state.auth.username,
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(App);