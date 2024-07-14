import projectLayout from '/assets/project_layout/8vu10v-ezgif.com-speed.gif';

function AboutProject() {
    return (
        <main style={{ overflowY: 'scroll',}}>
            <h1>About Project</h1>
            <p>This project serves as my final assignment for the ReDI School course. Its aim is twofold: to showcase my
                proficiency in frontend technologies such as HTML/CSS, JavaScript, and React, and to highlight how I
                leverage my prior backend development experience and skills.</p>
            <img src={projectLayout} alt="Project layout"/>
            <a href={"https://github.com/rtrippel/Battleship"}>HitHub</a>
        </main>
    );
}

export default AboutProject;
