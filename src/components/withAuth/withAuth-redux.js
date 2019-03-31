import withAuth from './withAuth-view'
import { connect } from 'react-redux';
import {compose} from "redux";

const mapStateToProps = function(state) {
    return {
        username: state.auth.username,
        loggedIn: state.auth.loggedIn
    }
}

export default compose(
    connect(mapStateToProps),
    withAuth
);