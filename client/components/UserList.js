import React from 'react';
import $ from 'jquery';
import appConfig from '../configs/appConfig';
import UserListEntry from '../components/UserListEntry';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }
    getUsers() {
        this.serverRequest = $.ajax({
            type: 'GET',
            url: `${appConfig.serverUrl}users`,
            cache: false,
            dataType: 'json',
            success: (result) => {
                this.setState({
                    users: result
                });
            },
            error: (result) => {
                throw new Error ('Ceva crapasi');
            }
        });

    }
    render() {
        return (
            <div className="user-container">
                <button onClick={this.getUsers.bind(this)}>SHOW USERS</button>
                <div className="user-container__list">
                    {this.state.users.map((item) =>{return <UserListEntry key={item._id} entry={item}/>})}
                </div>
            </div>
        );
    }
};