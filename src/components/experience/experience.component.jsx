import React, { useRef, useEffect, useState }  from 'react';
import { Container } from "react-bootstrap";
import "./experience.styles.scss";


const Experience = () => {
    const experienceSection = useRef();
    const [experienceVisible, setExperienceVisible] = useState(false);

    useEffect(() => {
        const experienceObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setExperienceVisible(entry.isIntersecting);
        });

        experienceObserver.observe(experienceSection.current);
    },  []);

  return (
    <section  ref={experienceSection} className={experienceVisible ? `experience show` : `experience`}>
        <Container className="inner-wrap p-5">
            <h2 className="section-title pb-3 mb-5 position-relative">Experience</h2>
            <ul className="list-unstyled ps-0">
                <li className="experience-info position-relative pb-4 ps-4 ms-2">
                    <h3 className="h5 lh-1 fw-bolder">Senior Front-End Web Developer</h3>
                    <p><strong>Scorpion</strong> | Santa Clarita, CA / Remote | April 2022 - May 2022</p>
                    <ul className="details ps-3">
                        <li>Mentored team members to use the newly completed starting templates for the Franchise vertical to complete projects more efficiently.</li>                                        
                        <li>Coordinated with designers and project managers about what affects page speed and website performance to continue delivering products with the highest quality.</li>
                        <li>Communicated to the Product Development team about bugs and new feature requests for current and upcoming templates to keep the product up to date.</li>
                    </ul>
                </li>
                <li className="experience-info position-relative pb-4 ps-4 ms-2">
                    <h3 className="h5 lh-1 fw-bolder">Front-End Product Developer</h3>
                    <p><strong>Scorpion</strong> | Santa Clarita, CA / Remote | August 2021 - April 2022</p>
                    <ul className="details ps-3">
                        <li>Focused on developing easily customizable starting templates using our framework for our Franchise vertical.</li>
                        <li>Ensured templates meet the highest standards for ADA Compliance, page speed, web core vitals, and device responsiveness for company use.</li>                                        
                    </ul>
                </li>
                <li className="experience-info position-relative pb-4 ps-4 ms-2">
                    <h3 className="h5 lh-1 fw-bolder">Senior Front-End Web Developer</h3>
                    <p><strong>Scorpion</strong> | Santa Clarita, CA / Remote | February 2013 - August 2021</p>
                    <ul className="details ps-3">
                        <li>Developed client websites using our framework based on PSD/XD designs into fully functioning responsive web pages that follow our ADA guidelines and performance standards.</li>
                        <li>Reviewed and implemented API integration requests from clients and collaborated with back-end developers for any additional setup required.</li>
                        <li>Mentored new hires to learn Front-End Web Development, teaching them HTML5, CSS3, and JavaScript.</li>
                    </ul>
                </li>
                <li className="experience-info position-relative ps-4 ms-2">
                    <h3 className="h5 lh-1 fw-bolder">Front-End Web Developer</h3>
                    <p><strong>Creative Circle</strong> | Los Angeles, CA | November 2012 - January 2013</p>
                    <ul className="details ps-3">
                        <li>Converted PSD designs into working responsive HTML pages.</li>                                    
                        <li>Collaborated with Back-End Developers to ensure completed HTML pages can easily be integrated with PHP code.</li>
                    </ul>
                </li>
            </ul>
        </Container>
    </section>
  )
}

export default Experience