import React, { Component } from "react";
import Book from "./Book";

class Books extends Component {
  // constructor(props) {
  //     super(props)
  //     this.state = {

  //         books: [],
  //         errorMsg:""
  //     }
  // }

  // componentDidMount(){
  //     axios.get('http://localhost:8000/api/backoffice/books')
  //     .then( response => {
  //         console.log(response)
  //         this.setState( { books: response.data.books})
  //     })
  //     .catch(error => {
  //         console.log(error)
  //         this.setState( {errorMsg : "Error Rerieving Data!!"} )
  //     })
  // }

  render() {
    const { books, errorMsg } = this.props;
    const bookList = books.map((book) => (
      <Book key={book.bookId} book={book}  onFillForm={() =>this.props.onFillForm(book)} onDeleteBook={() =>this.props.onDeleteBook(book)} />
    ));
    return (
      <div>
        <h2>List of Books</h2>
        <table>
          {bookList && 
            <tr>
              <th>BookId</th><th>Title</th>
              <th>Price</th>
              <th>CategoryId</th>
              <th>AuthorId</th>
            </tr>
          }

          {bookList && bookList}
        </table>
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>

      //   <div>
      //     <h2>List of Books</h2>
      //     <table>
      //       {books.length &&
      //         <tr>
      //           <th>BookId</th>
      //           <th>Title</th>
      //           <th>Price</th>
      //           <th>CategoryId</th>
      //           <th>AuthorId</th>
      //         </tr>
      //        }
      //       {books.length
      //         ? books.map((book) => (
      //             <tr>
      //               {" "}
      //               <td>{book.bookId}</td> <td>{book.title}</td>{" "}
      //               <td>{book.price}</td> <td>{book.catId}</td>{" "}
      //               <td>{book.authorId}</td> <td>{this.getUpdateButton(book)}</td>{" "}
      //               <td>{this.getDeleteButton(book)}</td>
      //             </tr>
      //           ))
      //         : null}
      //     </table>
      //     {errorMsg ? <div>{errorMsg}</div> : null}
      //   </div>
      // );
    );
  }

  getBooksTable(books) {
    //const { books, errorMsg } = this.state
    return (
      <tr>
        <th>BookId</th>
        <th>Title</th>
        <th>Price</th>
        <th>CategoryId</th>
        <th>AuthorId</th>
      </tr>
    );
  }

  //   getUpdateButton(book) {
  //     return (
  //       <button
  //         onClick={() => this.props.onFillForm(book)}
  //         className="btn btn-secondary btn-sm"
  //       >
  //         Update Book
  //       </button>
  //     );
  //   }

  //   getDeleteButton(book) {
  //     return (
  //       <button
  //         onClick={() => this.props.onDeleteBook(book)}
  //         className="btn btn-secondary btn-sm"
  //       >
  //         Delete Book
  //       </button>
  //     );
  //   }

  //   handleDelete(book) {}

  //   handleUpdate(book) {}
}

export default Books;
