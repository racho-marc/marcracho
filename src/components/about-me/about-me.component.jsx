import React from "react";
import { Container } from "react-bootstrap";
import Experience from "../experience/experience.component";
import Skills from "../skills/skills.component";
import Education from "../education/education.component";
import Certifications from "../certifications/certifications.component";
import FunFacts from "../fun-facts/fun-facts.component";


import "./about-me.styles.scss";

const AboutMe = () => {
     
    return (
        <main className="about main text-dark position-relative">                
            <section>
                <Container className="inner-wrap p-5">
                    <h1 className="section-title pb-3 mb-5 position-relative">About Me</h1>
                    <p>I developed high-performing templates for in-house use that meet our strictest standards to ensure project quality and quicker turnaround times. I collaborated with designers, project managers, marketing managers, and back-end developers to ensure the websites we create meet every aspect of our clients' needs. I mentored team members, teaching them everything they need to start with Front-End Web Development, including HTML5, CSS3, and JavaScript. I also helped train new hires to learn our CMS and Framework.</p>
                </Container>
            </section>
            <Experience />
            <Skills />
            <Education/>
            <Certifications/>
            <FunFacts/>
                    
        </main>
    );
};

export default AboutMe;