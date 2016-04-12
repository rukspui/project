import React from 'react';

export default class UserListEntry extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="user-container__user">
				<p>{this.props.entry.firstName} {this.props.entry.lastName}</p>
			</div>
        );
    }
}