import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component {
//     render() {
//         return <h1>Waymo</h1>;
//     }
// }

const click = () => {
    const clickMe = "Click";
    return clickMe;
}

const App = () => {
    return (
        <div>
            <label htmlFor="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={style.button}> {click()} </button>
        </div> );
}

const style = {
    button: {
        'backgroundColor': 'blue',
        'color': 'white'
    },
    color: {
        'color': 'white'
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
export default App