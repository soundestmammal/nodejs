import React, { Component } from 'react';
import chipotle from '../chipotle.svg';
// const styles = {
//     container: {
//         display: 'flex',
//         width: '100vw',
//         height: '100vh',
//         flexDirection: 'column',
//         justifyContent: 'space-between'
//     },
//     title: {
//         color: 'blue',
//         fontWeight: 'bold'
//     },
//     button: {
//         color: 'red'
//     }
// }

class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: chipotle,
            time: new Date(),
        };
    }
    render() {
        return(
        <div style={{height: '100vh', width: '100vw'}}>
            <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <div className="ui header">Gluten Radar</div>
                <div>
                    <img src={chipotle} alt="chipotle picture" />
                </div>
                <div style={{paddingTop: '2em', paddingBottom: '1em'}}>
                    <span className="ui positive basic button">Good</span>
                    <span className="ui negative basic button">Bad</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2>Add a comment</h2>
                    <div style={{paddingBottom: '2em'}}>
                        <input placeholder="First Name"></input>
                        <input placeholder="Last Name"></input>
                    </div>
                    
                    <input placeholder="What did you think?"></input>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h3>Score</h3>
                    <p>95%</p>
                </div>
                <div>
                    <h1>Comments</h1>
                    <p>This place is good.</p>
                    <p>Author: Robert Checco</p>
                </div>

            </div> 
        </div>
        );
    }
}

export default Widget;