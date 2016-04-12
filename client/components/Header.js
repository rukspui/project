import React from 'react';
import CurrentUser from '../components/CurrentUser';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="page-header">
                <CurrentUser/>
                <h1>Cheatsheet!</h1>
                <p>The app that helps you pass exams</p>
            </div>);
    }
}