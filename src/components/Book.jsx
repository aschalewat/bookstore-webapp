import React, { Component } from 'react';

class Book extends Component {
    state = {  } 
    render() { 
        const book = this.props.book
        return (
            <React.Fragment>
        
        {/* <table>
          {book && 
            <tr>
              <th>BookId</th>
              <th>Title</th>
              <th>Price</th> 
              <th>CategoryId</th>
              <th>AuthorId</th>
            </tr> 
           } */}
          {book &&
           // ? books.map((book) => (
                <tr>
                  {" "}
                  <td>{book.bookId}</td> <td>{book.title}</td>{" "} 
                  <td>{book.price}</td> <td>{book.catId}</td>{" "}
                  <td>{book.authorId}</td> <td>{this.getUpdateButton(book)}</td>{" "}
                  <td>{this.getDeleteButton(book)}</td>
                </tr>
              //))
            }        
      </React.Fragment>
        );
    }



    getUpdateButton(book) {
        return (
          <button
            onClick={() => this.props.onFillForm(book)}
            className="btn btn-secondary btn-sm"
          >
            Update Book
          </button>
        );
      }
    
      getDeleteButton(book) {
        return (
          <button
            onClick={() => this.props.onDeleteBook(book)}
            className="btn btn-secondary btn-sm" 
          >
            Delete Book
          </button>
        );
      }
    
}
 
export default Book;