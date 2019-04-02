import React from 'react'
import PropTypes from 'prop-types';
import {Message} from './message'
import {MessageForm} from './message-form'

export class Chat extends React.Component {
    static propTypes = {
        messages: PropTypes.array.isRequired,
        onSendMessage: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired,
    };

    render() {
        const {messages} = this.props;
        return (
            <div>
                <div className={"message-list"}>
                    {
                        messages.map(message => {
                            return <Message key={message.time} username={message.username} text={message.text}/>
                        })
                    }
                </div>
                <MessageForm onSubmit={this.props.onSendMessage} username={this.props.username}/>
            </div>
        )
    }
}