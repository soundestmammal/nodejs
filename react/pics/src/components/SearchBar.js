import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    /*
    Return a container that will contain a form.
    The five has a div with the label input inside.
    We want to react to the user typing
    */
    render() {
        return (
                <div className='ui segment'>
                    <form className='ui form' onSubmit={this.onFormSubmit}>
                        <div className='ui field'>
                            <label>Image Search</label>
                            <input
                                type="text" 
                                value={this.state.term}
                                onChange={ e => this.setState( { term: e.target.value })}/>
                        </div>
                    </form>
                </div>
        );
    }
}

export default SearchBar;