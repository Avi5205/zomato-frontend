import React from 'react';
import {Box, Modal} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {style} from "../Cart/Cart";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function Auth() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/'); // Navigate back to the previous page
    };

    const isOpen = location.pathname === '/account/login' || location.pathname === '/account/register';

    return (
        <>
            {isOpen && (
                <Modal onClose={handleClose} open={isOpen}>
                    <Box sx={style}>
                        {location.pathname === '/account/register' ? <RegisterForm/> : <LoginForm/>}
                    </Box>
                </Modal>
            )}
        </>
    );
}


//
// import React from 'react';
// import {Box, Modal} from "@mui/material";
// import {useLocation, useNavigate} from "react-router-dom";
// import {style} from "../Cart/Cart";
// import RegisterForm from "./RegisterForm";
// import LoginForm from "./LoginForm";
//
// export default function Auth() {
//
//
//     const location = useLocation();
//     const navigate = useNavigate();
//     const handleClose = () => {
//         navigate('/'); // Navigate back to the previous page
//     };
//
//     console.log("Location Pathname:", location.pathname);
//     console.log("Modal Open:", location.pathname === '/account/login' || location.pathname === '/account/register');
//     return (
//         <>
//             <Modal onClose={handleClose} open={
//                 location.pathname === '/account/login' || location.pathname === '/account/register'
//             }>
//                 <Box sx={style}>
//                     {location.pathname === '/account/register' ? <RegisterForm/> : <LoginForm/>}
//                 </Box>
//             </Modal>
//         </>
//     );
// }