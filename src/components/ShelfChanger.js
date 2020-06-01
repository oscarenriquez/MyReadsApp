import React from "react";
import PropTypes from 'prop-types'

/**
 * @component ShelfChanger
 * @param props
 * @returns {*}
 * @constructor
 */
const ShelfChanger = (props) => {
    return (
        <div className="book-shelf-changer">
            <select name="shelf" value={props.shelf || 'move'} onChange={props.onChangeShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

ShelfChanger.propTypes = {
    shelf: PropTypes.string,
    onChangeShelf: PropTypes.func.isRequired
}

export default ShelfChanger