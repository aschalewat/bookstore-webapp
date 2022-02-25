import React, { Component } from 'react';

class AddBook extends Component {
    render() { 
        return (
            <div>
                    <h1>Add Book</h1>
                    
                
                {/* <form onSubmit={this.props.onSubmitAddForm}>
                    <table>
                        
                        <tr><td>Title:</td> <td><input type="text" name="title" key="u-tit" onChange={this.props.onFieldChanged} /></td></tr><br/>
                        <tr><td>Price:</td> <td><input type="text" name="price" key="u-pr"  onChange={this.props.onFieldChanged} /></td></tr><br/>
                        <tr><td>Author:</td> <td><select name="auth-list" key="u-auth"  onChange={this.props.onFieldChanged} >{this.props.authors.map(author => <option value={author.id}>{author.lastName}</option>)}</select></td></tr><br/>
                        <tr><td>Category:</td> <td><select name="cat-list" key="u-cat"  onChange={this.props.onFieldChanged} ></select></td></tr><br/>
                        <input type="hidden" name="_method" value="put"/>
                        <tr><td></td>      <td><input type="submit" value="Edit Book" key="u-btn"/></td></tr>  
                    </table>
               </form>
                <br/><br/> */}
            
                <form onSubmit={this.props.onSubmitAddForm}>
                    <table>         
                        <tr><td>Title:</td> <td><input type="text" name="title" key="tit" onChange={this.props.onFieldChanged} /></td></tr><br/>
                        <tr><td>Price:</td> <td><input type="text" name="price" key="pr" onChange={this.props.onFieldChanged}/></td></tr><br/>
                        <tr><td>Author:</td> <td><select name="auth-list" key="auth" onChange={this.props.onFieldChanged}>{this.props.authors.map(author => <option value={author.id}>{author.lastName}</option>)}</select></td></tr><br/>
                        <tr><td>Category:</td> <td><select name="cat-list" key="cat" onChange={this.props.onFieldChanged}>{this.props.categories.map(cat => <option value={cat.catId}>{cat.name}</option>)}</select></td></tr><br/>
                        <tr><td></td>       <td><input type="submit" value="Add Book" key="btn"/></td></tr>
                    </table>
                </form>
                <br/><br/>
            </div>
        );
    }
}
 
export default AddBook;