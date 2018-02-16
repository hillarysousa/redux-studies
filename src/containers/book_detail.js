import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Selecione um livro.</div>
        }
        return (
            <div>
                <h3>Details for:</h3>
                <h5>{this.props.book.title}</h5>
                <h6>Pages: {this.props.book.pages}</h6>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);