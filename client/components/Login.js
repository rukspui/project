import React from 'react';
import $ from 'jquery';

import { logIn } from '../services/auth';
import { hashHistory } from 'react-router'

let proceedAfterLogin = () => {
    hashHistory.push('/pagina');
};

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            hidden: ''
        };
    }
    setHidden(e) {
        this.setState({ hidden: 'true'});
    }
    updateEmail(e) {
        this.setState({ email: e.target.value });
    }
    updatePassword(e) {
        this.setState({ password: e.target.value });
    }
    loginUser(e) {
        e.preventDefault();

        if (!this.state.email || !this.state.password) {
            throw new Error('email and password are required');
        }

        logIn(this.state.email, this.state.password, proceedAfterLogin, this.setHidden.bind(this));
    }
    render() {
        const hidden = this.state.hidden ? '' : 'hidden';

        return (
            <div className="register-form">
                <h1>Login</h1>
                <form name="registerForm" onSubmit={this.loginUser.bind(this)}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" value={this.state.email} onChange={this.updateEmail.bind(this)}/>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" value={this.state.password} onChange={this.updatePassword.bind(this)}/>
                    <input type="submit" value="Login"/>
                </form>
                <label className={ hidden }>Username or password wrong!</label>
            </div>
        );
    }
}
