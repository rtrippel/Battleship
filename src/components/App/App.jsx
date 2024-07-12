import './App.css'
import Header from "../Header/Header.jsx";
import Home from "../Home/Home.jsx";
import Footer from "../Footer/Footer.jsx";
import AboutProject from "../AboutProject/AboutProject.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutMe from "../AboutMe/AboutMe.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import Game from "../Game/Game.jsx";


function App() {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path="/about-project" element={<AboutProject/>}/>
                <Route path="/about-me" element={<AboutMe/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App
