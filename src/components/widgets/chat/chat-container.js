import React from 'react'
import {Chat as ChatView} from './chat-view'
import chatService from "../../../services/chat";


export class Chat extends React.Component {

    constructor(props) {
        super(props);
        chatService.Init();
    }

    state = {
        messages: []
    };

    onSendMessage = (username, text) => {
        chatService.Send(username, text)
    };

    onMessageReceive = (self) => (evt) => {
        let data = JSON.parse(evt.data);
        let messages = [...this.state.messages, data];
        self.setState({
            messages
        })
    };

    componentDidMount() {
        chatService.SubscribeOnMessageReceive(this.onMessageReceive(this));
    }


    render() {
        const {username} = this.props;
        const {messages} = this.state;
        return (
            <>
                <ChatView
                    messages={messages}
                    onSendMessage={this.onSendMessage}
                    username={username}
                />
            </>
        )
    }

    componentWillUnmount() {
        chatService.Destroy()
    }
}