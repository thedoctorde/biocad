import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default function withAuth(ComponentToProtect) {
    return class extends Component {
        render() {
            const {loggedIn} = this.props;
            if (!loggedIn) {
                return <Redirect to="/login"/>;
            }
            return (
                <>
                    <ComponentToProtect {...this.props} />
                </>
            );
        }
    }
}