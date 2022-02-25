import React, { Component } from 'react';


class EditBook extends Component {

    handleSubmit = event => {
        console.log("Hello")
        event.preventDefault()
    }
    render() { 
        const book = this.props.book
       // console.log(book)
       // console.log("In Update books", this.props.authorId, this.props.authors);
        return (
            
            <div>
                    <h1>Edit Book</h1>
                <form onSubmit={this.props.onSubmitForm}>
                    <table>
                        <tr><td>BookId:</td> <td><input type="text" name="bookId" key="u-id" disabled value={this.props.bookId}/></td></tr><br/>
                        <tr><td>Title:</td> <td><input type="text" name="title" key="u-tit" value={this.props.title} onChange={this.props.onTitle} /></td></tr><br/>
                        <tr><td>Price:</td> <td><input type="text" name="price" key="u-pr" value={this.props.price} onChange={this.props.onPrice} /></td></tr><br/>
                        <tr><td>Author:</td> <td><select name="auth-list" key="u-auth" value={this.props.authorId} onChange={this.props.onAuthor} >{this.props.authors.map(author => <option value={author.id}>{author.lastName}</option>)}</select></td></tr><br/>
                        <tr><td>Category:</td> <td><select name="cat-list" key="u-cat" value={this.props.catId} onChange={this.props.onCat} >{this.props.categories.map(cat => <option value={cat.catId}>{cat.name}</option>)}</select></td></tr><br/>
                        <input type="hidden" name="_method" value="put"/>
                        <tr><td></td>      <td><input type="submit" value="Edit Book" key="u-btn"/></td></tr>  
                    </table>
               </form>
                <br/><br/>
            </div>
                
        );
    }
}
 
export default EditBook;