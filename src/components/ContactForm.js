import React, { useState, useEffect } from "react";
import "../style/HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "aos/dist/aos.css";
import "react-vertical-timeline-component/style.min.css";
import Form from 'react-bootstrap/Form';
import Amplify, {API, Auth} from 'aws-amplify'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "", 
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const myInit = {
            body: {formData}, // replace this with attributes you need
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
          };

        // console.log("button click for handle submit, data: ", formData)
        // const data = await API.get('contactform', '/contact', JSON.stringify(formData))
        // console.log("data: ", data)

        // API.post('contactform', '/contact', myInit)
        //     .then((response) => {
        //         // Add your code here
        //         console.log("success: ", response)
        //     })
        //     .catch((error) => {
        //         console.error("something went wrong", error.response);
        //     });

        fetch("https://vpsiokmh72.execute-api.us-west-1.amazonaws.com/dev/contact", {
            mode: "no-cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response failed: ${response.status}. ${response.statusText}. ${response.stringify}`);
            }
            // handle success
            console.log("Form submitted successfully.")
            alert("Form submitted successfully!")
        })
        .catch((error) => {
            // handle error
            console.error("Problem submitting form", error)
            alert("Form submitted successfully!")
        });

    };

    return (
        <div id="homepage-full-bg">
            <div id="grow-bg" className="full-viewport">
                <div id="grow" className="homepage-container page-width">
                    <div className="text">
                    <h1
                        id="about-me-header"
                        className="display-4"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                    >
                        {/* add tag for coming soon */}
                        Want a customized enoki? Contact us!
                        <br />
                    </h1>
        
                    <div>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="customer_name" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3 text-white" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Indicate your style message:</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Tell us about your unique style, what theme vibes with you, what makes you roll etc..." name="message" value={formData.message} onChange={handleChange}/>
                        </Form.Group>

                        <br></br>

                        <Button variant="primary" type="submit" className="bg-dark text-white">
                        Let's Talk About My Enoki, Cool?
                        </Button>
                    </Form>
                    
                    </div>


                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactForm;