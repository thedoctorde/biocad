import React from "react";
import PropTypes from 'prop-types';
import './message-form.css'

export class MessageForm extends React.Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        message: ''
    };

    onSubmit = (event) => {
        event.preventDefault();
        const {message} = this.state;
        this.props.onSubmit(message);
        this.setState({
            message: '',
        })
    };

    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <form className={"message-form"}
                  onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="message"
                    placeholder="Enter your message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    required
                />
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}