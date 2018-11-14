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
    const list = () => {
        return (
            <div style={{'display': 'flex', 'flexDirection': 'column', 'height': '3000px', 'width': '300px', 'border': '3 px solid blue', 'justifyContent': 'spaceAround'}}>
                <div style={{'backgroundColor': 'green'}}>
                    <div image={style.image}>hi</div>
                </div>
                <div style={{'backgroundColor': 'green'}}>
                    <div image={style.image}>hi</div>
                </div>
                <div style={{'backgroundColor': 'green'}}>
                    <div image={style.image}>hi</div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <label htmlFor="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={style.button}> {click()} </button>
            {list()}
        </div> );
}

const style = {
    button: {
        'backgroundColor': 'blue',
        'color': 'white'
    },
    image: {
        'backgroundColor': 'green',
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
export default App