import React, { createRef, Component } from "react";
import { Container } from "react-bootstrap";

import badgeSA from "../../assets/aws-certified-solutions-architect-associate.png";
import badgeCP from "../../assets/aws-certified-cloud-practitioner.png";


import "./about-me.styles.scss";



//const AboutMe = () => {
class AboutMe extends Component {
    // const skillsSection = useRef(null);
    // const [scroll, setScroll] = useState(false);
    // console.log(skillsSection.current);
    // //useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setScroll(window.scrollY > skillsSection.current.scrollY);
    //     }, [scroll]);
    // //})
    constructor(props) {
        super(props);
        this.skillsSection = createRef();
        this.aboutMeHeader = createRef();
        this.experienceSection = createRef();
        this.state = {
            scroll: false            
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            let activeClass = '';
            //let offsetValue = (this.skillsSection.current.offsetTop - (this.aboutMeHeader.current.clientHeight + this.experienceSection.current.clientHeight)/1.5 )
            let offsetValue = this.skillsSection.current.offsetTop / 3;
            // console.table(window.scrollY, offsetValue );
            if(window.scrollY >  offsetValue){
                activeClass = 'show';
            }
            this.setState({ activeClass });
        });
    }

    // componentWillUnmount() { window.removeEventListener('scroll'); } 

    render() {
        return (
        <main className="about main text-dark position-relative">                
                
                    <section ref={this.aboutMeHeader}>
                        <Container className="inner-wrap p-5">
                            <h1 className="section-title pb-3 mb-5 position-relative">About Me</h1>
                            <p>I'm a Senior Front-End Web Developer with over nine years of experience in the design, planning, and implementation of award-winning, user-friendly, and ADA-compliant websites. I quickly adapt to new technology, global standards, and best practices in web development to give our clients and their users the best experience online. I am also very passionate about modern code and new technology.</p>
                        </Container>
                    </section>
                    <section ref={this.experienceSection} className=" experience">
                        <Container className="inner-wrap p-5">
                            <h2 className="section-title pb-3 mb-5 position-relative">Experience</h2>
                            <ul className="list-unstyled ps-0">
                                <li className="experience-info position-relative pb-4 ps-4 ms-2 border-start border-primary">
                                    <h3 className="h5 lh-1 fw-bolder">Front-End Product Developer</h3>
                                    <p><strong>Scorpion</strong> | Santa Clarita, CA / Remote | August 2021 - Current</p>
                                    <ul className="details ps-3">
                                        <li>Develop easily customizable website templates using our framework to use as starting points for client websites</li>
                                        <li>Optimize website templates for speed and performance for mobile through desktop</li>                                        
                                    </ul>
                                </li>
                                <li className="experience-info position-relative pb-4 ps-4 ms-2 border-start border-primary">
                                    <h3 className="h5 lh-1 fw-bolder">Senior Front-End Web Developer</h3>
                                    <p><strong>Scorpion</strong> | Santa Clarita, CA / Remote | February 2013 - August 2021</p>
                                    <ul className="details ps-3">
                                        <li>Collaborate with Designers, Project Managers, Marketing Managers, and Back-End Developers to produce high-converting marketing websites.</li>
                                        <li>Give Designers and Project Managers design recommendations for page speed, web performance improvements, and better user experience.</li>
                                        <li>Convert PSD / XD designs into responsive and optimized HTML pages that follow ADA guidelines.</li>
                                    </ul>
                                </li>
                                <li className="experience-info position-relative ps-4 ms-2 border-start border-primary">
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
                    <section ref={this.skillsSection} className={`skills ${this.state.activeClass}`}>
                        <Container className="inner-wrap p-5 container">
                            <h2 className="section-title pb-3 mb-5 position-relative">Skills</h2>
                            <ul className="list-unstyled skills-list">
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
                    <section>
                        <Container className="inner-wrap p-5">
                            <h2 className="section-title pb-3 mb-5 position-relative">Education</h2>
                            <h3 className="h4">Bachelor of Science in Information Technology</h3>
                            <p><strong>AMA Computer University | Quezon City, Philippines</strong></p>
                        </Container>
                    </section>
                    <section className="certification">
                        <Container className="inner-wrap p-5">
                            <h2 className="section-title pb-3 mb-5 position-relative">Certification</h2>
                            <div className="cert-wrap d-flex justify-content-between flex-wrap">
                                <div className="w-50 text-center">
                                    <h3 className="h4"><a className="text-decoration-none" href="https://www.credly.com/badges/fa49d4a7-6cfd-4e8d-bedf-77f53d17c45e/public_url" target="_blank">AWS Certified Solutions Architect</a></h3>
                                    <a href="https://www.credly.com/badges/fa49d4a7-6cfd-4e8d-bedf-77f53d17c45e/public_url" target="_blank">
                                        <img src={badgeSA} />
                                    </a>
                                </div>
                                <div className="w-50 text-center">
                                    <h3 className="h4"><a className="text-decoration-none" href="https://www.credly.com/badges/1d8f5dcf-d294-48cf-a8ae-d5d982291044/public_url" target="_blank">AWS Certified Cloud Practitioner</a></h3>
                                    <a href="https://www.credly.com/badges/1d8f5dcf-d294-48cf-a8ae-d5d982291044/public_url" target="_blank">
                                        <img src={badgeCP} />
                                    </a>
                                </div>
                            </div>    
                        </Container>
                    </section> 
                    <section>
                        <Container className="inner-wrap p-5">
                            <h2 className="section-title pb-3 mb-5 position-relative">Fun Facts</h2>
                            <ul>
                                <li>I am obsessed with my dog. He is a 100-pound German Shepherd Mix named Bathala.</li>
                                <li>I like to watch K-dramas, movies, and/or animes to relax.</li>
                                <li>I love learning programming languages. I am currently learning TypeScript.</li>
                                <li>I play Magic the Gathering (EDH) when I have free time.</li>
                                <li>I have developed a healthy habit of working out and eating right during the pandemic.</li>
                                <li>I blast gaming music in my headphones when I code.</li>
                            </ul>
                        </Container>
                    </section> 
            </main>
    )}
}

export default AboutMe;