import React from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

const initialValues = {
    fullName: "",
    email: '',
    password: '',
    role: "ROLE_CUSTOMER",
};

export default function RegisterForm() {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log("Form values:", values);
        // Here you can add your registration logic, e.g., API call
        // Example API call (pseudo-code):
        /*
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        .then(response => {
            if (response.ok) {
                // Handle successful registration
                navigate('/'); // Redirect to home or login page
            } else {
                // Handle errors
                console.error('Registration failed');
            }
        });
        */
    };

    return (
        <div>
            <Typography className="text-center" variant="h5">Register</Typography>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({isSubmitting}) => (
                    <Form>
                        <Field
                            as={TextField}
                            label="Full Name"
                            name="fullName"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <Field
                            as={TextField}
                            label="Email"
                            name="email"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <Field
                            as={TextField}
                            label="Password"
                            name="password"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            type="password"
                            required
                        />
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel id="role-simple-select-label">Role</InputLabel>
                            <Field
                                as={Select}
                                labelId="role-simple-select-label"
                                id="role-select"
                                label="Role"
                                name="role"
                            >
                                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                            </Field>
                        </FormControl>
                        <Button
                            sx={{mt: 2, padding: "1rem"}}
                            fullWidth
                            type='submit'
                            variant='contained'
                            disabled={isSubmitting} // Disable button while submitting
                        >
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
            <Typography variant="body2" align='center' sx={{mt: 3}}>
                If you already have an account?
                <Button size="small" onClick={() => navigate("/account/login")}>
                    Login
                </Button>
            </Typography>
        </div>
    );
}


// import React from 'react';
// import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
// import {Field, Form, Formik} from "formik";
// import {useNavigate} from "react-router-dom";
//
// const initialValues = {
//     fullName: "", email: '', password: '', role: "ROLE_CUSTOMER",
// }
//
// export default function RegisterForm() {
//     const navigate = useNavigate();
//     const handleSubmit = (values) => {
//         console.log("form values", values);
//     }
//     return (<div>
//         <Typography className="text-center" variant="h5">Register</Typography>
//         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//             <Form>
//                 <Field as={TextField} label="Full Name" name="fullname" fullWidth variant="outlined"
//                        margin="normal"/>
//                 <Field as={TextField} label="Email" name="email" fullWidth variant="outlined" margin="normal"/>
//                 <Field as={TextField} label="Password" name="password" fullWidth variant="outlined"
//                        margin="normal" type="password"/>
//                 <FormControl fullWidth margin="normal">
//                     <InputLabel id="role-simple-select-label">Role</InputLabel>
//                     <Field as={Select}
//                            labelId="role-simple-select-label"
//                            id="demo-simple-select"
//                         // value={age}
//                            label="Role"
//                            name="role"
//                         // onChange={handleChange}
//                         //    variant={}
//                     >
//                         <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
//                         <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
//                     </Field>
//                 </FormControl>
//                 <Button sx={{mt: 2, padding: "1rem"}} fullWidth type='submit' variant='contained'>Register</Button>
//             </Form>
//         </Formik>
//         <Typography variant="body2" align='center' sx={{mt: 3}}>
//             If already having account?
//             <Button size="small" onClick={navigate("/account/login")}>
//                 Register
//             </Button>
//         </Typography>
//     </div>)
// }