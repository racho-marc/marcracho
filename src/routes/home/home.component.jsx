import { Fragment } from "react";
import Helmet from "react-helmet";

import "./home.styles.scss";

const Home = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Marc Racho - Front-End Web Developer</title>
                <meta 
                    name="description"
                    content="Marc Racho - Front-End Web Developer"
                />
                <meta 
                    name="keywords"
                    content="front-end web developer, html, css, responsive, javascript, react js"
                />
            </Helmet>
            <main className="home main text-white position-relative">
                <picture className="img-bg position-absolute w-100 h-100 top-0 left-0">
                    <source srcSet="/assets/img/hero-bg.jpg" />
                    <img src="/assets/img/hero-bg.webp" className="position-absolute w-100 h-100 top-0 left-0" alt="Marc Racho" role="presentation" />
                </picture>
                <div className="flex hero w-100 d-flex pt-5 pb-5 justify-content-between align-items-center position-relative">
                    <div className="hero-text d-flex flex-column align-items-start">
                        <h1 className="display-1 fw-bold">Marc Racho</h1>
                        <p className="h2 border-bottom border-info">Front-End Web Developer</p>
                    </div>                        
                </div>
                
            </main>
        </Fragment>
    )
};

export default Home;