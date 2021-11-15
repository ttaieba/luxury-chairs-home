import React from 'react';
import Blogs from '../Blogs/Blogs';
import GetReviews from '../Dashboard/Reviews/GetReviews/GetReviews';
import BannarOffer from '../Offers/BannarOffer';
import Products from '../Products/Products';
import Bannar from '../Shared/Bannar';
import Topbar from '../Shared/Topbar';

// ------------------links-------------



const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Bannar></Bannar>
            <Products></Products>
            <BannarOffer></BannarOffer>

            <GetReviews></GetReviews>
            <Blogs></Blogs>

        </div>
    );
};

export default Home;