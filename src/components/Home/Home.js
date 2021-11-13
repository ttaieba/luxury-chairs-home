import React from 'react';
import Blogs from '../Blogs/Blogs';
import GetReviews from '../Dashboard/Reviews/GetReviews/GetReviews';
import Products from '../Products/Products';
import Bannar from '../Shared/Bannar';

// ------------------links-------------



const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Products></Products>
            <GetReviews></GetReviews>
            <Blogs></Blogs>

        </div>
    );
};

export default Home;