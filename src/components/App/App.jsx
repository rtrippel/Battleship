import './App.css'
import Header from "../Header/Header.jsx";
import Body from "../Body/Body.jsx";
import Footer from "../Footer/Footer.jsx";
import AboutProject from "../AboutProject/AboutProject.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutMe from "../AboutMe/AboutMe.jsx";


function App() {

    return (
        <Router basename="/Battleship">
            <Header/>
            <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/about-project" element={<AboutProject/>}/>
                <Route path="/about-me" element={<AboutMe/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App
