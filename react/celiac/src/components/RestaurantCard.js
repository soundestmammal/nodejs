import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/';


class RestaurantCard extends Component {
    showRestaurants = () => {
        let arr = this.props.restaurants;
        arr.map((r) => <div>{r.title}</div>);
    }
    render() {
        console.log(this.props.restaurants);
        return <div>{this.showRestaurants()}</div>
    }
}

const mapStateToProps = (state) => {
    return { restaurants: state.restaurants };
}
export default connect(mapStateToProps, { fetchRestaurants })(RestaurantCard);