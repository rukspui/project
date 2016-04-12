var React = require('react');

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNav from '../components/PageNav';

var AltaPagina = React.createClass({
    render: function() {
        var content;
        switch (this.props.params.count) {
            case '0':
                content = <img src='images/ba-esti-nebun.png' />;
                break;
            case '1':
                content = 'Nu serios, chiar merge.';
                break;
            case '2':
                content = 'Daca nu ma crezi, intreaba-l pe baiatul ala din fata de vorbeste mult.';
                break;
            case '15':
                content = 'In ciuda aparentelor, nu castigi nimic daca dai click de multe ori.';
                break;
            default:
                content = 'Perseverenta e totusi o calitate.'
        }
        return (
            <div className="page-container">
            <Header />
            <PageNav />
            <p>{ content }</p>
            <Footer />
            </div>);
    }
});

module.exports = AltaPagina;
