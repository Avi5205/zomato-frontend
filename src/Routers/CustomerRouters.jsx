// import React, {useState} from 'react';
// import {Navbar} from "../component/Navbar/Navbar";
// import {Route, Routes} from "react-router-dom";
// import {Home} from "../component/Home/Home";
// import RestaurantDetails from "../component/Restaurants/RestaurantDetails";
// import Cart from "../component/Cart/Cart";
// import Profile from "../component/Profile/Profile";
// import Auth from "../component/Auth/Auth";
//
// const CustomerRouters = () => {
//     const [showAuth, setShowAuth] = useState(false);
//     const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage user authentication state
//     const [authAction, setAuthAction] = useState('login'); // Default action can be 'login' or 'register'
//
//     const handleProfileClick = () => {
//         setShowAuth(true); // Show the Auth modal
//         setAuthAction('login'); // Set action to login
//     };
//
//     const handleRegisterClick = () => {
//         setShowAuth(true); // Show the Auth modal
//         setAuthAction('register'); // Set action to register
//     };
//
//     return (
//         <div>
//             <Navbar isAuthenticated={isAuthenticated} onProfileClick={handleProfileClick}/>
//             <Routes>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails/>}/>
//                 <Route path="/cart" element={<Cart/>}/>
//                 <Route path="/my-profile/*" element={<Profile/>}/>
//             </Routes>
//             {showAuth &&
//                 <Auth action={authAction} onClose={() => setShowAuth(false)}/>} {/* Render Auth modal conditionally */}
//         </div>
//     );
// };
//
// export default CustomerRouters;


import React from 'react';
import {Navbar} from "../component/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Home} from "../component/Home/Home";
import RestaurantDetails from "../component/Restaurants/RestaurantDetails";
import Cart from "../component/Cart/Cart";
import Profile from "../component/Profile/Profile";
import Auth from "../component/Auth/Auth";

const CustomerRouters = () => {
    return (<div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/account/register" element={<Auth/>}/>
            <Route path="/account/login" element={<Auth/>}/>
            <Route path="/account:register" element={<Home/>}/>
            <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/my-profile/*" element={<Profile/>}/>

        </Routes>
        <Auth/>
    </div>)
}
export default CustomerRouters;
