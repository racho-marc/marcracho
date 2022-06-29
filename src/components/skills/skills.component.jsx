import React, { useRef, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import "./skills.styles.scss";

const Skills = () => {
    const skillsSection = useRef();
    const [skillsVisible, setSkillsVisible] = useState(false);

    useEffect(() => {
        const skillsObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSkillsVisible(entry.isIntersecting);
        });

        skillsObserver.observe(skillsSection.current);
    },  []);
    
  return (
    <section className="skills">    
        <Container className="inner-wrap p-5 container">
            <h2 className="section-title pb-3 mb-5 position-relative">Skills</h2>
            <ul ref={skillsSection} className={skillsVisible ? `list-unstyled skills-list show` : `list-unstyled skills-list`}>
                <li className="pb-3">
                    <strong className="skill-title">HTML5</strong>
                    <span className="skill-level level-5"></span>
                </li>
                <li className="pb-3">
                    <strong className="skill-title">CSS3</strong>
                    <span className="skill-level level-5"></span>
                </li>
                <li className="pb-3">
                    <strong className="skill-title">Responsive</strong>
                    <span className="skill-level level-5"></span>
                </li>
                <li className="pb-3">
                    <strong className="skill-title">JavaScript</strong>
                    <span className="skill-level level-4"></span>
                </li>                            
                <li className="pb-3">
                    <strong className="skill-title">ADA Compliance</strong>
                    <span className="skill-level level-4"></span>
                </li>                            
                <li className="pb-3">
                    <strong className="skill-title">React JS</strong>
                    <span className="skill-level level-4"></span>
                </li>      
                <li className="pb-3">
                    <strong className="skill-title">TypeScript</strong>
                    <span className="skill-level level-3"></span>
                </li>                      
                <li className="pb-3">
                    <strong className="skill-title">SASS</strong>
                    <span className="skill-level level-3"></span>
                </li>
                <li className="pb-3">
                    <strong className="skill-title">Bootstrap 5</strong>
                    <span className="skill-level level-3"></span>
                </li>
                <li className="pb-3">
                    <strong className="skill-title">Amazon AWS</strong>
                    <span className="skill-level level-3"></span>
                </li>
                <li className="pb-3">
                    <strong className="skill-title">SQL</strong>
                    <span className="skill-level level-3"></span>
                </li>
            </ul>
        </Container>
    </section> 
  )
}

export default Skills