import React, { Component } from 'react';

export default class Chart extends Component {


    componentDidMount() {
        // fetch('/api/secret')
        //     .then(res => res.text())
        //     .then(res => this.setState({message: res}));
    }

    render() {
        return (
            <div>
                <h1>Secret</h1>
                <p></p>
            </div>
        );
    }
}