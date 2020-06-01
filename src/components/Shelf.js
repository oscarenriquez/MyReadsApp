import React from "react";
import BookList from "./BookList";
import PropTypes from "prop-types";

/**
 * @Component Shelf
 * @param props
 * @returns {*}
 * @constructor
 */
const Shelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <BookList books={props.books} onChangeShelf={props.onChangeShelf} />
            </div>
        </div>
    )
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Shelf