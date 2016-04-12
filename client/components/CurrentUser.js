import React from 'react';
import { hashHistory } from 'react-router'
import { getCurrentUser, logOut } from '../services/auth';

let proceedAfterLogout = () => {
    hashHistory.push('/login');
};

export default class CurrentUser extends React.Component {
    constructor() {
        super();
        this.state = { userEmail: getCurrentUser() };
    }
    logout() {
        logOut(proceedAfterLogout);
    }
    render() {
        return (
            <div className="current-user">
                <p>Logged in as {this.state.userEmail}</p>
                <button onClick={this.logout.bind(this)}>Logout</button>
            </div>);
    }
}
