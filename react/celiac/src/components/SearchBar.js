import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchBar: '' }
    }
    onInputChange = (event) => {
        this.setState( {searchBar: event.target.value });
        console.log(this.state.searchBar);
    }
    render() {
        return(
            <input type="text" 
            placeholder='Search for a restaurant here' 
            style={styles.bar}
            value={this.state.searchBar}
            onChange={this.onInputChange}
            />
        );
    }
}

const styles = {
    bar: {
        marginTop: '2em',
        width: '250px',
        height: '5vh',
        borderRadius: '5%',
    }
}
export default SearchBar;