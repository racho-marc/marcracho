import { Form, Button, FloatingLabel } from "react-bootstrap";
// import emailjs from '@emailjs/browser';

const ContactForm = () => {
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };

    return (
        <Form>                    
            <FloatingLabel 
                label="Name"
                controlId="floatingNameInput"
                className="mb-3"
            >                        
                <Form.Control type="text" placeholder="Enter your name" />                        
            </FloatingLabel>                                        
            <FloatingLabel
                label="Email address"
                controlId="floatingEmailInput"
                className="mb-3" 
            >
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">I'll never share your email with anyone else.</Form.Text>
            </FloatingLabel>                                                                
            <FloatingLabel
                label="Subject"
                controlId="floatingSubjectInput"
                className="mb-3" 
            >
                <Form.Control type="text" placeholder="Enter a subject" />                        
            </FloatingLabel>                                        
            <FloatingLabel
                label="Message"
                controlId="floatingMessageInput"
                className="mb-3"
            >
                <Form.Control 
                    as="textarea" 
                    placeholder="Leave your message" 
                    style={{ height: '300px' }}
                /> 
            </FloatingLabel>                    
            <Button variant="primary" size="lg" type="submit">
                Send
            </Button>
        </Form>
    )
}

export default ContactForm;