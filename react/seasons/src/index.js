import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Take the funcitonality from Component into the component that we are creating.
class App extends Component {

    state = { lat: null, errorMessage: '' };

    // When our component is first rendered
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState( { lat: position.coords.latitude }),
            (err) => this.setState( { errorMessage: err.message })
        );
    }
    /* 
    There are three cases for Conditionally rendering content in this project
    1. If There is an error message and no latitude -> Tell user the error in a div
    2. If There is no error message and we have a lat => Return a div with the lat
    3. If neither, let the user know that we are waiting for the location request.
    */
    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error Message: {this.state.errorMessage} </div>;
        } 
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message={"Please accept location request!"}/>;
    };
    // React component must call render method
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));