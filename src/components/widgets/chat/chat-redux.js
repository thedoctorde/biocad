import {Chat as ChatContainer} from './chat-container'
import {connect} from 'react-redux';


const mapStateToProps = function (state) {
    return {
        username: state.auth.username,
    }
}

const Chat = connect(mapStateToProps)(ChatContainer);
export {Chat};
