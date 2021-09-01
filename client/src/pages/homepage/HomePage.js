import React from 'react';
import './homepage.scss';

// import hero from '../../Images/tree-736885__480.jpg';
import Main from '../../components/article/Main';


function HomePage() {
    return (
        <div>
            {/* <img src={hero} alt=""/> */}
            <h1>welcome to home page</h1>
            <Main />
        </div>
    )
}

export default HomePage;
