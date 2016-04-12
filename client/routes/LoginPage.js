import React from 'react';
import Register from '../components/Register';
import Login from '../components/Login';
import { Link } from 'react-router';

export default class LoginPage extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
            	<Link to="login">Login</Link> | <Link to="register">Register</Link>
                <Login />
			</div>
        );
    }
}
