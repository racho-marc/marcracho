import { Fragment } from "react";
import Helmet from "react-helmet";
import Hero from "../../components/hero/hero.component";

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
                <Hero />                
            </main>
        </Fragment>
    )
};

export default Home;