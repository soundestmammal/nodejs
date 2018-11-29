import React, { Component } from 'react';
import { connect } from 'react-redux';
import chipotle from '../chipotle.svg';
import { addComment } from '../actions/';

class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: null,
            chatter: [],
            comment: {
                firstName: '',
                lastName: '',
                message: ''
            },
            count: 0
        };
    }
    addComment(text) {
        // let message = this.state.comment.message;
        // this.props.addComment(message);
        this.setState((state) => ({ message: text }))
    }
    // incrementCount = () => {
    //     this.setState( () => )
    // }
    // decrementCount = () => {

    // }
    render() {
        return(
        <div style={{height: '100vh', width: '100vw'}}>
            <div style={{backgroundColor: 'grey',display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <div className="ui header">Gluten Radar</div>
                <div>
                    <img src={chipotle} alt="chipotle picture" />
                </div>
                <div>
                    {this.state.count}
                </div>
                <div style={{paddingTop: '2em', paddingBottom: '1em'}}>
                    <button className="ui positive basic button" onClick={() => this.incrementCount}>Good</button>
                    <button className="ui negative basic button" onClick={() => this.decrementCount}>Bad</button>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2>Add a comment</h2>
                    <div style={{paddingBottom: '2em'}}>
                        <input  placeholder="First Name" ></input>
                        <input  placeholder="Last Name"></input>
                    </div>
                    
                    <input placeholder="What did you think?"></input>
                    <button className="ui secondary basic button" 
                        onClick={this.addComment}>
                        Submit Comment
                    </button>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h3>Score</h3>
                    <p>95%</p>
                </div>
                <div>
                    <h1>Comments</h1>
                    <p>{this.state.comment.message}</p>
                    <p>{this.state.comment.firstName}</p>
                </div>

            </div> 
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { message } = state.comments;
    return {
        message
    };
};


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

export default connect(mapStateToProps, { addComment })(Widget);