import { Link } from 'react-router-dom';
import "./About.scss";
import NavBar from '../NavBar/NavBar.jsx';

const About_Page = () => {
    return (
        <>
        <main className="main-container" id='about_main'>
        <NavBar></NavBar>
            <section className='about-container'>

                <div className="about-card" id='card-one'>
                    <div className="about-title">
                        <h3>About US</h3>
                    </div>
                    <div className="about-content" id='card-two'>
                        <p>A premium institute offering to help students in their academic journey</p>
                    </div>
                </div>

                <div className="about-card" id='card-three'>
                    <div className="about-title">
                        <h3>Helping:</h3>
                    </div>
                    <div className="about-content">
                        <p>ICSE & CBSE Students</p>
                    </div>
                </div>

                <div className="about-card" id='card-four'>
                    <div className="about-title">
                        <h3>Grades Mentored:</h3>
                        <h3></h3>
                    </div>
                    <div className="about-content">
                        <p>VII-XII</p>
                    </div>
                </div>

                <div className="about-card" id='card-five'>
                    <div className="about-title">
                        <h3>Find Us Here:</h3>
                    </div>
                    <div className="about-content">
                        <p>Quantum Classes</p>
                        <p>1 no. Bijay Nagar,</p>
                        <p>Madhyamgram, Kolkata-700129</p>
                    </div>
                </div>

                <div className="about-card" id='card-six'>
                    <div className="about-title">
                        <h3>About your Professor:</h3>
                    </div>
                    <div className="about-content">
                        <p>Sir Alok Dey (B.Sc)
                            Former professor of Mathematics at St. Xavier's Institution.
                            Mentoring for 20 years and counting.
                        </p>
                    </div>
                </div>

                   </section>

</main>
        </>
    )
}

export default About_Page;