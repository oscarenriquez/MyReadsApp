import React from 'react'
import './App.css'
import SearchBook from "./components/SearchBook";
import {Route, Switch} from "react-router-dom";
import Shelves from "./components/Shelves";

/**
 * @component BookApp
 * @description Represents a list of books with categories
 */

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/" component={Shelves} exact/>
          <Route path="/search" component={SearchBook} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
