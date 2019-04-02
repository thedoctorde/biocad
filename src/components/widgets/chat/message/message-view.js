import React from 'react'
import PropTypes from 'prop-types';

export class Message extends React.Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        const { username, text } = this.props;

        return (
            <div>
                <span>{ username }</span>
                <span>{ text }</span>
            </div>
        )
    }

}