import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import * as Yup from "yup";
const Form6 = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    };
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, "Invalid firstname")
            .max(15, "Invalid firstname")
            .required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().email().required("Required"),
        phone: Yup.string().required("Required"),
    });
    const onSubmit = (values) => {
        // Bu aşamada values API a gönderilir (fetch/axios)
        alert("ok");
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    return (
        <Container className="mt-5">
            {/* HTML5 validation devre dışı bırakmak için noValidate */}
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        {...formik.getFieldProps("firstName")}
                        isInvalid={formik.errors.firstName}
                        /*                      name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
 */
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.firstName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        {...formik.getFieldProps("lastName")}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder=""
                        {...formik.getFieldProps("email")}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        {...formik.getFieldProps("phone")}
                    />
                </Form.Group>
                <Button type="submit" variant="warning">
                    Send
                </Button>
            </Form>
        </Container>
    );
};
export default Form6;
