//import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import Books from "./components/Books";
import axios from "axios";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import SideBar from "./components/SideBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      categories: [],
      authors: [],
      errorMsg: "",
      bookId: 0,
      title: "",
      price: 0.0,
      catId: 0,
      authorId: 0,
    };
    console.log("Inside constructor - should be first");
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditBookForm = this.handleEditBookForm.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps - should be second");
    return null;
  }

  componentDidMount() {
    console.log("Inside componentDidMount - should be fourth");
    axios
      .get("http://localhost:8000/api/backoffice/books")
      .then((response) => {
        // console.log(response);
        this.setState({ books: response.data.books });
      })
      .catch((error) => {
        //console.log(error);
        this.setState({ errorMsg: "Error Rerieving Data!!" });
      });

    axios
      .get("http://localhost:8000/api/backoffice/categories/list")
      .then((response) => {
        //console.log(response);
        this.setState({ categories: response.data.categories });
      })
      .catch((error) => {
        //console.log(error);
        this.setState({ errorMsg: "Error Rerieving Data!!" });
      });

    axios
      .get("http://localhost:8000/api/backoffice/authors/list")
      .then((response) => {
        // console.log(response);
        this.setState({ authors: response.data.authors });
      })
      .catch((error) => {
        //console.log(error);
        this.setState({ errorMsg: "Error Rerieving Data!!" });
      });
  }

  handleUpdate = (book) => {
    //console.log(book);
    this.setState({ bookId: book.bookId });
    this.setState({ title: book.title });
    this.setState({ price: book.price });
    this.setState({ catId: book.catId });
    this.setState({ authorId: book.authorId });
  };

  // handleDelete = (book) => {
  //   console.log(book)
  //   //console.log("Book deleted- ", book.bookId)
  // };

  handleDelete(book) {
    console.log(book);
    //console.log("Book deleted- ", book.bookId)
  }

  handleEditBookForm = (event) => {
    //console.log("Updating Book!");
    // console.log(book)
    console.log(
      `${this.state.bookId} ${this.state.title} ${this.state.price} ${this.state.catId} ${this.state.authorId}`
    );
    event.preventDefault();
    //event.preventDefault();
  };

  handleAddBookForm = (e) => {
    console.log(
      `${this.state.title} ${this.state.price} ${this.state.catId} ${this.state.authorId}`
    );
    axios.post("http://localhost:8000/api/backoffice/books", {title:this.state.title, price: this.state.price, catId: this.state.catId, authorId: this.state.authorId})
      .then((response) => {
         console.log(response);
        //this.setState({ authors: response.data.authors });
      })
      .catch((error) => {
        console.log(error);
        //this.setState({ errorMsg: "Error Rerieving Data!!" });
      });
    
    e.preventDefault();
  };

  getTitle = (event) => {
    //this.setState({ title: event.target.value });
    this.setState({
      title: event.target.value,
    });
  };

  getPrice = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  getAuthor = (event) => {
    this.setState({
      authorId: event.target.value,
    });
  };

  getCat = (event) => {
    this.setState({
      catId: event.target.value,
    });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("render - should be third");
    const {
      books,
      errorMsg,
      bookId,
      title,
      price,
      catId,
      authorId,
      categories,
      authors,
    } = this.state;
    return (
      <div className="App">
        <SideBar />
        <main className="container">
          <Books
            books={books}
            errorMsg={errorMsg}
            onFillForm={this.handleUpdate}
            onDeleteBook={this.handleDelete}
          />
          <AddBook
            onSubmitAddForm={this.handleAddBookForm}
            onFieldChanged={this.changeHandler}
            categories={categories}
            authors={authors}
          />

          <EditBook
            bookId={bookId}
            title={title}
            price={price}
            catId={catId}
            authorId={authorId}
            categories={categories}
            authors={authors}
            onSubmitForm={this.handleEditBookForm}
            onTitle={this.getTitle}
            onPrice={this.getPrice}
            onAuthor={this.getAuthor}
            onCat={this.getCat}
          />
        </main>
      </div>
    );
  }

  //{
  // const book = this.state.books.map(b => {
  //   if (b.bookId === book.bookId){
  //     return b;
  //   } else {
  //     return null;
  //   }
  //  } );

  //}
}

export default App;
