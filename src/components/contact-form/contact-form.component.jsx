import { Form, Button, FloatingLabel } from "react-bootstrap";
import InputField from "../input-field/input-field.component";
import emailjs from '@emailjs/browser';
import { Fragment, useEffect, useState } from "react";
import TextareaField from "../textarea-field/textarea-field.component";

const ContactForm = () => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_1go3tcb', 'template_jvbvl8l', values, 'KuUvKtCPSCJYh8b2s')
            .then(response => {
                console.log('Sent!', response.text);
                setValues({
                    fullName: '',
                    email: '',
                    subject: '',
                    message: '',
                });
                setStatus(true)
            }, error => {
                console.log('Error sending email.', error.text);
            });
    };

    useEffect(() => {
        if(status){
            setTimeout(() => {
                setStatus(false);
            }, 3000);
        }
    }, [status])

    const handleChange = (e) => {
        setValues(values=> ({
            ...values,
            [e.target.name]: e.target.value
        }))
    };

    const renderAlert = () => (
        <div>
            <p className="text-white px-2 py-2 bg-success bg-gradient">Your message has been sent!</p>
        </div>
    )

    return (
        <Fragment>
            {status && renderAlert()}
            <Form onSubmit={handleSubmit}>                    
                          
                <InputField 
                    handleChange={handleChange} 
                    type="text" 
                    name="fullName"
                    label="Name"
                    value={values.fullName}
                    placeholder="Enter your name" 
                    idName="floatingNameInput"    
                />
                <InputField 
                    handleChange={handleChange} 
                    type="email" 
                    name="email"                    
                    label="Email address"
                    value={values.email}
                    placeholder="Enter your email" 
                    idName="floatingEmailInput"    
                ><Form.Text className="text-muted">I'll never share your email with anyone else.</Form.Text></InputField>
                
                <InputField 
                    handleChange={handleChange} 
                    type="text" 
                    name="subject"
                    label="Subject"
                    value={values.subject}
                    placeholder="Enter a subject" 
                    idName="floatingSubjectInput"    
                />

                <TextareaField 
                    handleChange={handleChange}                     
                    name="message"
                    label="Message"
                    value={values.message}
                    placeholder="Leave your message" 
                    idName="floatingMessageInput"
                    height="300px" 
                />                                      
                <Button variant="primary" size="lg" type="submit">
                    Send
                </Button>
            </Form>
        </Fragment>
    )
}

export default ContactForm;