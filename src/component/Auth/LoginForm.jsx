import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

const initialValues = {
    email: '', password: '',
}

export default function LoginForm() { // Accept the onRegisterClick prop
    const navigate = useNavigate();
    const handleSubmit = () => {
        // Your login logic goes here
    }
    const handleRegisterClick = () => {
        navigate('/account/register');
    }

    return (
        <div>
            <Typography className="text-center" variant="h5">Login</Typography>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field as={TextField} label="Email" name="email" fullWidth variant="outlined" margin="normal"/>
                    <Field as={TextField} label="Password" name="password" fullWidth variant="outlined"
                           margin="normal" type="password"/>
                    <Button sx={{mt: 2, padding: "1rem"}} fullWidth type='submit' variant='contained'>Login</Button>
                </Form>
            </Formik>
            <Typography variant="body2" align='center' sx={{mt: 3}}>
                Don't have an account?
                <Button size="small" onClick={handleRegisterClick}> {/* Use the passed function */}
                    Register
                </Button>
            </Typography>
        </div>
    )
}

//
// import React from 'react';
// import {Button, TextField, Typography} from "@mui/material";
// import {Field, Form, Formik} from "formik";
// import {useNavigate} from "react-router-dom";
//
//
// const initialValues = {
//     email: '', password: '',
// }
//
// export default function LoginForm() {
//     const navigate = useNavigate();
//     const handleSubmit = () => {
//     }
//     return (
//         <div>
//             <Typography className="text-center" variant="h5">Login</Typography>
//             <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//                 <Form>
//                     <Field as={TextField} label="Email" name="email" fullWidth variant="outlined" margin="normal"/>
//                     <Field as={TextField} label="Password" name="password" fullWidth variant="outlined"
//                            margin="normal"/>
//                     <Button sx={{mt: 2, padding: "1rem"}} fullWidth type='submit' variant='contained'>Login</Button>
//                 </Form>
//             </Formik>
//             <Typography variant="body2" align='center' sx={{mt: 3}}>
//                 Don't have an account?
//                 <Button size="small" onClick={navigate("/account/register")}>
//                     Register
//                 </Button>
//             </Typography>
//         </div>
//     )
// }