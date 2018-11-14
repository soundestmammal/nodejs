import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

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
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="data">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
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