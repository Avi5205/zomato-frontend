import {Box, Button, Card, Divider, Grid2, Modal, TextField} from "@mui/material";
import React from "react";
import {CartItem} from "./CartItem";
import {AddressCard} from "./AddressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import {Field, Form, Formik} from "formik";
// import * as Yup from "yup";

export const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 4,
};

const initialValues = {
    streetAddress: "", state: "", pincode: "", city: "",
};

// const validationSchema = Yup.object.shape({
//   streetAddress: Yup.string().required("street address is required"),
//   state: Yup.string().required("state is required"),
//   pincode: Yup.required("pincode is required"),
//   city: Yup.string().required("city is required"),
// });

const items = [1, 1];
const Cart = () => {
    const createOrderUsingSelectedAddress = () => {
    };
    const handleOpenAddressModel = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleSubmit = (value) => {
        console.log("form value ", value);
    };
    return (<>
        <main className="lg:flex justify-between">
            <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                {items.map((item) => (<CartItem/>))}
                <Divider/>
                <div className="billDetails px-5 text-sm">
                    <p className="font-extralight py-5">Bill Details</p>
                    <div className="space-y-3">
                        <div className="flex justify-between text-gray-400">
                            <p>Item Total</p>
                            <p>₹599</p>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Delivery Charges</p>
                            <p>₹21</p>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Platform Charges</p>
                            <p>₹5</p>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>GST & Restaurant Charges</p>
                            <p>₹33</p>
                        </div>
                        <Divider/>
                        <div className="flex justify-between text-gray-400">
                            <p>Total Pay</p>
                            <p>₹3300</p>
                        </div>
                    </div>
                </div>
            </section>
            <Divider orientation="vertical" flexItem/>
            <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
                <div>
                    <h1 className="text-center font-semibold text-2xl py-10">
                        Choose Delivery Address
                    </h1>
                    <div className="flex gap-5 flex-wrap justify-center">
                        {[1, 1, 1, 1, 1].map((item) => (<AddressCard
                            handleSelectAddress={createOrderUsingSelectedAddress}
                            item={item}
                            showButton={true}
                        />))}

                        <Card className="flex gap-5 w-64 p-5">
                            <AddLocationAltIcon/>
                            <div className="space-y-3 text-gray-500">
                                <h1 className="font-semibold text-lg text-white">
                                    Add New Address
                                </h1>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    onClick={handleOpenAddressModel}
                                >
                                    Add
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Formik
                    initialValues={initialValues}
                    // validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Grid2 container spacing={2}>
                            <Grid2 item xs={12}>
                                <Field
                                    as={TextField}
                                    name="streetAddress"
                                    label="Stree Address"
                                    fullWidth
                                    variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //   <ErrorMessage>
                                    //     {(msg) => <span className="text-red-600">{msg}</span>}
                                    //   </ErrorMessage>
                                    // }
                                />
                            </Grid2>
                            <Grid2 item xs={12}>
                                <Field
                                    as={TextField}
                                    name="state"
                                    label="State"
                                    fullWidth
                                    variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //   <ErrorMessage>
                                    //     {(msg) => <span className="text-red-600">{msg}</span>}
                                    //   </ErrorMessage>
                                    // }
                                />
                            </Grid2>
                            <Grid2 item xs={12}>
                                <Field
                                    as={TextField}
                                    name="city"
                                    label="city"
                                    fullWidth
                                    variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //   <ErrorMessage>
                                    //     {(msg) => <span className="text-red-600">{msg}</span>}
                                    //   </ErrorMessage>
                                    // }
                                />
                            </Grid2>
                            <Grid2 item xs={12}>
                                <Field
                                    as={TextField}
                                    name="pincode"
                                    label="Pincode"
                                    fullWidth
                                    variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //   <ErrorMessage>
                                    //     {(msg) => <span className="text-red-600">{msg}</span>}
                                    //   </ErrorMessage>
                                    // }
                                />
                            </Grid2>
                            <Grid2 item xs={12}>
                                <Button variant="contained" type="submit" color="primary">Deliver Here</Button>
                            </Grid2>
                        </Grid2>
                    </Form>
                </Formik>
            </Box>
        </Modal>
    </>);
};

export default Cart;
