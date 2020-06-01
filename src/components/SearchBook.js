import React from 'react'
import { Link } from 'react-router-dom'
import BookList from "./BookList";
import * as BooksAPI from "../BooksAPI";
import {debounce} from 'lodash'

/**
 * @component SearchBook
 * @description Container Component to search books
 */
class SearchBook extends React.Component {
    state = {
        books: [],
        booksResult: [],
        searchTerm: '',
        search: {}
    }

    componentDidMount() {
        this.fetchAllBooks()
    }

    /**
     * @description update shelf for specific book
     * @param book
     * @param shelf
     */
    handleChangeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.setState(prevState => ({
                booksResult: prevState.booksResult.map(b => b.id === book.id ? {...b, shelf} : b)
            }))
        });
    }

    /**
     * @description handle the change of search term input
     * @param value
     */
    handleSearchTermChange = ({ target: { value } }) => {
        const search = debounce(this.queryBooks, 500)
        this.setState((prevState) => {
            if (prevState.cancel) {
                prevState.cancel()
            }
            return ({
                searchTerm: value,
                search
            })
        }, search)
    }

    fetchAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books
            })
        })
    }

    /**
     * @description run query to search books
     */
    queryBooks = () => {
        BooksAPI.search(this.state.searchTerm).then(books => {
            const shownBooks = books && !books.error ?
                books.map(book => {
                    const currentBook = this.state.books.find(b => b.id === book.id);
                    if (currentBook){
                        return {...currentBook}
                    }
                    return book;
                }) : []
            this.setState({
                booksResult: shownBooks
            })
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to={'/'}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" name="searchTerm" placeholder="Search by title or author" value={this.state.searchTerm} onChange={this.handleSearchTermChange}/>
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.searchTerm.length > 0 && this.state.booksResult.length > 0 ? (
                        <BookList books={this.state.booksResult} onChangeShelf={this.handleChangeShelf} />
                        ) : 'No records found'}
                </div>
            </div>
        )
    }
}

export default SearchBook