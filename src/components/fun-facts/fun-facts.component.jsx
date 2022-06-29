import React from 'react';
import { Container } from 'react-bootstrap';

const FunFacts = () => {
  return (
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
  )
}

export default FunFacts