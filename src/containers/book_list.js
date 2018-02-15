import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // O que for retornado aqui será mostrado como props de BookList
    return {
        books: state.books
    };
}

// Tudo o que for retornado dessa função será transformado em props no container BookList
function mapDispatchToProps(dispatch) {
    // Sempre que selectBook for chamado, o resultado deverá ser passado para todos os reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);