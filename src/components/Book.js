import React from "react";
import PropTypes from 'prop-types'
import ShelfChanger from "./ShelfChanger";

/**
 * @component Book
 * @param props
 * @returns {*}
 * @constructor
 */
const Book = (props) => {
    return (
        <li key={props.book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks?.thumbnail})`}}/>
                    <ShelfChanger shelf={props.book.shelf} onChangeShelf={({target: {value}}) => props.onChangeShelf(props.book, value)} />
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">
                    {props.book.authors?.map(
                        author => {
                            return <div key={author}> {author} </div>;
                        })
                    }
                </div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Book