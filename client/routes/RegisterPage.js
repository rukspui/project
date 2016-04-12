import React from 'react';
import Register from '../components/Register';
import { Link } from 'react-router';

export default class RegisterPage extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
            	<Link to="login">Login</Link> | <Link to="register">Register</Link>
				<Register />
			</div>
        );
    }
}
