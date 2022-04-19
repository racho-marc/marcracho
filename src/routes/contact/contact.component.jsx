import ContactForm from "../../components/contact-form/contact-form.component";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <Fragment>
            <Helmet>
            <title>Marc Racho - Contact Me</title>
                <meta 
                    name="description"
                    content="Marc Racho - Contact Me"
                />
                <meta 
                    name="keywords"
                    content="front-end web developer, html, css, responsive, javascript, react js"
                />
            </Helmet>
            <main className="contact main text-dark position-relative d-flex align-items-center">
                <Container className="p-5">
                    <h1 className="section-title pb-3 mb-5 position-relative">Contact Me</h1>
                    <ContactForm />
                </Container>       
            </main>            
        </Fragment>        
    )
}

export default Contact;