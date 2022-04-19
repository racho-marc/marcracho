import "./hero.styles.scss";
import backgroundImage from "../../assets/hero-bg.webp";

const Hero = () => {
    return (
        <div className="flex hero w-100 d-flex pt-5 pb-5 align-items-center position-relative" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="hero-text d-flex flex-column align-items-start position-relative">
                <h1 className="display-1 fw-bold">Marc Racho</h1>
                <p className="h2 border-bottom border-info">Front-End Web Developer</p>
            </div>                        
        </div>
    )
}

export default Hero;