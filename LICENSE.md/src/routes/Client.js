import React, {Component} from 'react';

import Header from '../components/Header';

export default class Client extends Component {
    render() {
        const { location } = this.props;
        return (
            <div>
                <Header location={ location }/>
                <h1>My Client App </h1>
            </div>
        );
    }
}