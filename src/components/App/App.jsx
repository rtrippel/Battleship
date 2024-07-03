import './App.css'
import Header from "../Header/Header.jsx";
import Body from "../Body/Body.jsx";
import Footer from "../Footer/Footer.jsx";
import AboutProject from "../AboutProject/AboutProject.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

    return (
        <Router basename="/Battleship">
            <Header/>
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/about-project" element={<AboutProject />} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App
