import { useEffect } from 'react';
import './App.css';
import Header from "../Header/Header.jsx";
import Home from "../Home/Home.jsx";
import Footer from "../Footer/Footer.jsx";
import AboutProject from "../AboutProject/AboutProject.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from "../AboutMe/AboutMe.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import Game from "../Game/Game.jsx";

function App() {
    useEffect(() => {
        const setVh = () => {
            // Set the CSS variable --vh, which is equal to 1% of the height of the visible window area
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        };
        setVh();
        window.addEventListener('resize', setVh);
        return () => {
            window.removeEventListener('resize', setVh);
        };
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/about-project" element={<AboutProject />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
