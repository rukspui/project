import React from 'react';
import UserList from '../components/UserList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNav from '../components/PageNav';

export default class Pagina extends React.Component {
    constructor(props) {
    	super(props);
    }
    render() {
        return (
            <div className="page-container">
                <Header />
                <PageNav />
				<h2>This is the home page!</h2>
				<UserList />
                <Footer />
			</div>
        );
    }
};