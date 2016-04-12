import React from 'react';
import appConfig from '../configs/appConfig';
import $ from 'jquery';

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            year: ''
        };
    }
    updateEmail(e) {
        this.setState({ email: e.target.value });
    }
    updateFirstName(e) {
        this.setState({ firstName: e.target.value });
    }
    updateLastName(e) {
        this.setState({ lastName: e.target.value });
    }
    updatePassword(e) {
        this.setState({ password: e.target.value });
    }
    updateYear(e) {
        this.setState({ year: e.target.value });
    }
    registerUser(e) {
        e.preventDefault();

        let payLoad = {
            email: this.state.email.trim(),
            firstName: this.state.firstName.trim(),
            lastName: this.state.lastName.trim(),
            password: this.state.password.trim(),
            year: this.state.year.trim(),
        }

        let requestObject = $.ajax({
                type: 'POST',
                url: `${appConfig.serverUrl}users`,
                cache: false,
                data: payLoad
            })
            .done(() => {
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    year: ''
                });
            })
            .fail((resp) => {
                throw new Error('Ceva crapasi');
            });
    }
    render() {
        return (
            <div className="register-form">
	        	<h1>Register</h1>
	            <form name="registerForm" onSubmit={this.registerUser.bind(this)}>
	        		<label htmlFor="email">Email</label>
	        		<input name="email" value={this.state.email} onChange={this.updateEmail.bind(this)}/>
	        		<label htmlFor="firstName">First name</label>
	        		<input name="firstName" value={this.state.firstName} onChange={this.updateFirstName.bind(this)}/>
	        		<label htmlFor="lastName">Last name</label>
	        		<input name="lastName" value={this.state.lastName} onChange={this.updateLastName.bind(this)}/>
	        		<label htmlFor="password">Password</label>
	        		<input name="password" value={this.state.password} onChange={this.updatePassword.bind(this)}/>
	        		<label htmlFor="year">Year</label>
	        		<input name="year" value={this.state.year} onChange={this.updateYear.bind(this)}/>
	        		<input type="submit" value="Register!"/>
	        	</form>
        	</div>
        );
    }
}
