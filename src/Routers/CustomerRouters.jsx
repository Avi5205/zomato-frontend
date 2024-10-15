import React from 'react';
import {Navbar} from "../component/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Home} from "../component/Home/Home";
import RestaurantDetails from "../component/Restaurants/RestaurantDetails";
import Cart from "../component/Cart/Cart";
import Profile from "../component/Profile/Profile";

const CustomerRouters = () => {
    return (<div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/account:register" element={<Home/>}/>
                <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/my-profile/*" element={<Profile/>}/>
            </Routes>
        </div>)
}
export default CustomerRouters;