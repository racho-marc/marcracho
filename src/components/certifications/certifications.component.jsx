import React, { useRef, useEffect, useState }  from 'react';
import { Container } from 'react-bootstrap';

import "./certifications.styles.scss";

import badgeSA from "../../assets/aws-certified-solutions-architect-associate.png";
import badgeCP from "../../assets/aws-certified-cloud-practitioner.png";

const Certifications = () => {
    const certificationsSection = useRef();
    const [certificationsVisible, setCertificationsVisible] = useState(false);

    useEffect(() => {
        const certificationsObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setCertificationsVisible(entry.isIntersecting);
        });

        certificationsObserver.observe(certificationsSection.current);
    },  []);

  return (
    <section ref={certificationsSection} className={certificationsVisible ? `certification show` : `certification`}>
        <Container className="inner-wrap p-5">
            <h2 className="section-title pb-3 mb-5 position-relative">Certification</h2>
            <div className="cert-wrap d-flex justify-content-between flex-wrap">
                <div className="w-50 text-center badge position-relative">
                    <h3 className="h4"><a className="text-decoration-none" href="https://www.credly.com/badges/fa49d4a7-6cfd-4e8d-bedf-77f53d17c45e/public_url" target="_blank">AWS Certified Solutions Architect</a></h3>
                    <a href="https://www.credly.com/badges/fa49d4a7-6cfd-4e8d-bedf-77f53d17c45e/public_url" target="_blank">
                        <img src={badgeSA} />
                    </a>
                </div>
                <div className="w-50 text-center badge position-relative">
                    <h3 className="h4"><a className="text-decoration-none" href="https://www.credly.com/badges/1d8f5dcf-d294-48cf-a8ae-d5d982291044/public_url" target="_blank">AWS Certified Cloud Practitioner</a></h3>
                    <a href="https://www.credly.com/badges/1d8f5dcf-d294-48cf-a8ae-d5d982291044/public_url" target="_blank">
                        <img src={badgeCP} />
                    </a>
                </div>
            </div>    
        </Container>
    </section> 
  )
}

export default Certifications;