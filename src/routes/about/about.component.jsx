import { Fragment } from "react";
import Helmet from "react-helmet";
import AboutMe from "../../components/about-me/about-me.component";

const About = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Marc Racho - About Me</title>
                <meta 
                    name="description"
                    content="Marc Racho - About Me"
                />
                <meta 
                    name="keywords"
                    content="front-end web developer, html, css, responsive, javascript, react js"
                />
            </Helmet>
            <AboutMe />       
        </Fragment>
    )
}

export default About;