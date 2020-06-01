import React from 'react'
import Shelf from "./Shelf";
import * as BooksAPI from '../BooksAPI'

/**
 * @component Shelves
 * @description Container component that represents the shelves for the books
 */
class Shelves extends React.Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }

    /**
     * @description lifecycle to fetch all books with shelf
     */
    componentDidMount() {
        this.fetchAllBooks()
    }

    /**
     * @description navigate to the search router
     */
    handleAddBook = () => {
        this.props.history.push('/search')
    }

    /**
     * @description update the shelf for specific book
     * @param book
     * @param newShelf
     */
    handleChangeShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(()=> {
            this.fetchAllBooks()
        })
    }

    /**
     * @description fetch all books from the BooksAPI
     */
    fetchAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            const currentlyReading = [],
                wantToRead = [],
                read =[];

            if (books && books.length) {
                books.forEach(book => {
                    switch (book.shelf) {
                        case 'currentlyReading' :
                            currentlyReading.push(book)
                            break;
                        case 'wantToRead':
                            wantToRead.push(book)
                            break;
                        case 'read':
                            read.push(book)
                            break;
                    }
                })
            }
            this.setState({
                currentlyReading,
                wantToRead,
                read
            })
        })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf title={'Currently Reading'} books={this.state.currentlyReading} onChangeShelf={this.handleChangeShelf} />
                        <Shelf title={'Want to read'} books={this.state.wantToRead} onChangeShelf={this.handleChangeShelf} />
                        <Shelf title={'Read'} books={this.state.read} onChangeShelf={this.handleChangeShelf} />
                    </div>
                </div>
                <div className="open-search">
                    <button type="button" onClick={this.handleAddBook}>Add a book</button>
                </div>
            </div>
        );
    }
}

export default Shelves