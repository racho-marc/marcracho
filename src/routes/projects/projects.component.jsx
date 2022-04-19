import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Helmet from "react-helmet";

import "./projects.styles.scss";

const Projects = () => {
    return (
        <Fragment>
            <Helmet>
            <title>Marc Racho - Recent Projects</title>
                <meta 
                    name="description"
                    content="Marc Racho - Recent Projects"
                />
                <meta 
                    name="keywords"
                    content="front-end web developer, html, css, responsive, javascript, react js"
                />
            </Helmet>
            <main className="contact main text-dark position-relative">
                <Container className="py-5 w-50" fluid>
                    <h1 className="section-title pb-3 mb-5 position-relative">Recent Projects</h1>                    
                </Container>       
            </main>            
        </Fragment>        
    )
}

export default Projects;