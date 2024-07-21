import projectLayout from '/assets/project_layout/8vu10v-ezgif.com-speed.gif';
import './AboutProject.css';

function AboutProject() {
    return (
        <main className="about-project">
            <div className="about-project__content">
                <h1>About Project</h1>
                <p>This project serves as my final assignment for the ReDI School course. Its aim is twofold: to
                    showcase my
                    proficiency in frontend technologies such as HTML/CSS, JavaScript, and React, and to highlight how I
                    leverage my prior backend development experience and skills.</p>
                <p>Initial Designs:</p>
                <img src={projectLayout} alt="Project layout"/>
            </div>
            <div className="about-project__link-container">
                <a href="https://github.com/rtrippel/Battleship" className="about-project__link">GitHub</a>
            </div>
        </main>
    );
}

export default AboutProject;
