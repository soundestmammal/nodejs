import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/index';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.fetchComments()
    }
    render() {
        return <div>jsx here</div>
    }
}

export default connect(null, { fetchComments })(CommentList)