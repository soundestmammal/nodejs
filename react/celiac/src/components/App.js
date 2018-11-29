import React from 'react';
import NewWidget from './NewWidget';
import CommentList from './CommentList';
import Header from './Header';
import SearchBar from './SearchBar';
import RestaurantCard from './RestaurantCard';

const App = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Header />
            <SearchBar />
            <RestaurantCard />

        </div>
        
    );
}

export default App;
