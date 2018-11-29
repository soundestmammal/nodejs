import React, { Component } from 'react';

class NewWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
        <div>
            <button className="ui positive basic button"
            onClick={ () => this.setState({ count: this.state.count + 1 })}>
                Good
            </button>
            <button className="ui negative basic button" onClick={() => this.setState({ count: this.state.count - 1 })}>Bad</button>
            <div>Current Count: {this.state.count}</div>
        </div>
        );
    }
}


export default NewWidget;