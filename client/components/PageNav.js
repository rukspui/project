import React from 'react';
import { Link } from 'react-router'

export default class PageNav extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }
    handleClick(event) {
        this.setState({ count: ++this.state.count });
    }
    render() {
        return (
            <div className="nav">
                <Link to="pagina">Pagina</Link> | <Link to={`alta-pagina/${this.state.count}`} onClick={this.handleClick.bind(this)}>Alta pagina</Link>
            </div>
        );
    }
};
