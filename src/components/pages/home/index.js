import React, { Component } from 'react';

import {Chat} from '../../widgets/chat'

export default class Home extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <h1>Main page</h1>
                <Chat/>
            </div>
        );
    }
}