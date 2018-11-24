import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Take the funcitonality from Component into the component that we are creating.
class App extends Component {
    constructor(props) {
        super(props);
        // When we don't know what value it, defalt to null
        // Assign key value pair to this.state
        // This is the only time that we initialize state
        this.state = { lat: null };
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState( { lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }
    // React component must call render method
    render() {
        return (
            <div>Latitude: {this.state.lat} </div>
        )
    }
}

// Step one Create a Class based component
// Step two


ReactDOM.render(<App />, document.querySelector('#root'));