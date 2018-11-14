import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// class App extends React.Component {
//     render() {
//         return <h1>Waymo</h1>;
//     }
// }




const App = () => {
        // return (
        //     <div style={{'display': 'flex', 'flexDirection': 'column', 'height': '3000px', 'width': '300px', 'border': '3 px solid blue', 'justifyContent': 'spaceAround'}}>
        //         <div style={{'backgroundColor': 'green'}}>
        //             <div image={style.image}>hi</div>
        //         </div>
        //         <div style={{'backgroundColor': 'green'}}>
        //             <div image={style.image}>hi</div>
        //         </div>
        //         <div style={{'backgroundColor': 'green'}}>
        //             <div image={style.image}>hi</div>
        //         </div>
        //     </div>
        // );

    return (
        
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail 
                author="Kenny Liao"
                text={faker.lorem.sentences()}
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            
            <CommentDetail
                author="Dave Vitt"
                text={faker.lorem.sentences()}
                avatar={faker.image.avatar()}

            />
            <CommentDetail
                author="Rick Weber"
                text={faker.lorem.sentences()}
                avatar={faker.image.avatar()}

            />
        </div> );
}

// const style = {
//     button: {
//         'backgroundColor': 'blue',
//         'color': 'white'
//     },
//     image: {
//         'backgroundColor': 'green',
//     }
// }
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
export default App