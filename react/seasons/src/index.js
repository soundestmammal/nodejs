import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Take the funcitonality from Component into the component that we are creating.
class App extends Component {

    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState( { lat: position.coords.latitude }),
            (err) => this.setState( { errorMessage: err.message })
        );
    }

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