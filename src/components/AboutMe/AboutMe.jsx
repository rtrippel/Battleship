import './AboutMe.css';

function AboutMe() {
    return (
        <main className="about-me">
            <div className="about-me__content">
                <p> I am capable of taking on the role of a Backend Developer as well as a Full-Stack Developer. </p>
                <p> My background includes 2 years of experience in backend development with Java/Kotlin and 1 year of
                    full-stack development with Java/JavaScript. Additionally, I have 13 years of experience in
                    Technical Support.
                    I am always open to interesting projects and collaborations.<br></br> If you have any questions or
                    proposals, feel free to reach out to me at <a
                        href="mailto:mail@romantrippel.com">mail@romantrippel.com</a>.
                </p>
            </div>
            <div className="about-me__link-container">
                <a href="https://www.linkedin.com/in/roman-trippel/" className="about-me__link">LinkedIn</a>
            </div>
        </main>
    );
}

export default AboutMe;
