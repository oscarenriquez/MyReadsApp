import React from "react";
import PropTypes from 'prop-types'
import Book from "./Book";

/**
 * @component BookList
 * @param props
 * @returns {*}
 * @constructor
 */
const BookList = (props) => {
    return (
        <ol className="books-grid">
            {props.books?.map(
                book => {
                    return (
                        <Book key={book.id} book={book} onChangeShelf={props.onChangeShelf}/>
                    );
                }
            )}
        </ol>
    )
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookList