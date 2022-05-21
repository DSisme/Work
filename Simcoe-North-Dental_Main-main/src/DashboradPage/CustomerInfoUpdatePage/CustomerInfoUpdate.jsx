import { useState} from "react";
import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Form, Container, Button} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import '../../RegistrationPage/Registration.css';


export default function CustomerInfoUpdate(){

    const location = useLocation();
    const history = useHistory();
    
    const user = location.state.user;
    const { first_name, last_name, email_address, address, cell_phone, customer_id, doctor_id } = user;
    console.log(user);

    const { id } = useParams();
    console.log(`update-${id}`);

    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(null);
    const [name, setName] = useState("");

    const formik = useFormik({
        initialValues: {
            first_name: first_name,
            last_name: last_name,
            email_address: email_address,
            cell_phone: cell_phone,
            address: address,
            customer_id: customer_id,
            doctor_id: doctor_id,
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("First name is required"),
            last_name: Yup.string().required("Last name is required"),
            email_address: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            cell_phone: Yup.string()
                .min(10, "Phone number must be at least 10 characters")
                .max(11, "Phone number must be at most 11 characters, with area code")
                .required("Phone number is required"),
            address: Yup.string().required("Address is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
    
            fetch(`https://db-customer-snd.herokuapp.com/api/customers/${id}`, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    setCompleted(true);
                    setName(values.first_name);
                } else {
                    throw new Error("form not valid");
                } 
            })
            .catch((err) => {
                console.log("Error submitting form", err);
                setError(err);
            });
        },
      });
      if (completed) {
        history.push(`/dashboard/${id}`);
      }
    
      if (error) {
        console.log("error", error);
      }



    return (
        <div  className="register-container">
            
            <main className="register-main">
                <Container fluid className="signup-form register-div">
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="register-group">
                            <Form.Label className="register-label">First Name</Form.Label>
                            <Form.Control
                                id="first_name"
                                name="first_name"
                                type="text"
                                //default={first_name}
                                value={formik.values.first_name}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.first_name && formik.errors.first_name ? (
                                <Form.Text className="register-message-error">{formik.errors.first_name}</Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="register-group">
                            <Form.Label className="register-label">Last Name</Form.Label>
                            <Form.Control
                                id="last_name"
                                name="last_name"
                                type="text"
                                placeholder=""
                                value={formik.values.last_name}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.last_name && formik.errors.last_name ? (
                                <Form.Text className="register-message-error">{formik.errors.last_name}</Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="register-group">
                            <Form.Label className="register-label">Email</Form.Label>
                            <Form.Control
                                id="email_address"
                                name="email_address"
                                type="email"
                                placeholder=""
                                value={formik.values.email_address}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email_address && formik.errors.email_address ? (
                                <Form.Text className="register-message-error">{formik.errors.email_address}</Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="register-group">
                            <Form.Label className="register-label">Phone Number</Form.Label>
                            <Form.Control
                                id="cell_phone"
                                name="cell_phone"
                                type="tel"
                                placeholder=""
                                value={formik.values.cell_phone}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.cell_phone && formik.errors.cell_phone ? (
                                <Form.Text className="register-message-error">{formik.errors.cell_phone}</Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="register-group">
                            <Form.Label className="register-label">Address</Form.Label>
                            <Form.Control
                                id="address"
                                name="address"
                                type="text"
                                placeholder=""
                                value={formik.values.address}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.address && formik.errors.address ? (
                                <Form.Text className="register-message-error">{formik.errors.address}</Form.Text>
                            ) : null}
                        </Form.Group>

                        <Button className="register-button" variant="primary" type="submit">
                        Update
                        </Button>
                    </Form>
                </Container>
            </main>
        </div>
    );
}