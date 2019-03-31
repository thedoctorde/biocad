import Login from './login-view'
import { connect } from 'react-redux';
import { loginTry } from '../../../store/auth/actions'


const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username, password) => {
            dispatch(loginTry(username, password))
        }
    }
}

const LoginReduxed = connect(null, mapDispatchToProps)(Login);

export default LoginReduxed