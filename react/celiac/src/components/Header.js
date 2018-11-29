import React from 'react';

const Header = () => {
    return (
    <div style={{width: '100%', backgroundColor: 'salmon', height: '20vh', display: 'flex', justifyContent: 'center'}}>
        <div style={styles.title}>Celiac Ratings</div>
    </div>
    );
}
const styles = {
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: '3em',
    },
    button: {
        alignSelf: 'center',
        backgroundColor: 'green',
        height: '10vh'
    }
}
export default Header;