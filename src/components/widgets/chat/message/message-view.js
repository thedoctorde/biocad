import React from 'react'
import PropTypes from 'prop-types';
import "./message.css"

export class Message extends React.Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        const { username, text } = this.props;

        return (
            <div className="message">
                <span className="message__user">{ username }</span>
                <span className="message__text">{ text }</span>
            </div>
        )
    }

}