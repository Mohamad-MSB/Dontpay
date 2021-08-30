import React from 'react';
import './homepage.scss';

// import hero from '../../Images/tree-736885__480.jpg';
import Article from '../../components/article/Article';


function HomePage() {
    return (
        <div>
            {/* <img src={hero} alt=""/> */}
            <h1>welcome to home page</h1>
            <Article />
        </div>
    )
}

export default HomePage;
