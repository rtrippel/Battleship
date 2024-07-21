import './Home.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import { motion } from 'framer-motion';
import { buttonHoverAnimation } from '../../animations/animations';

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const navigateToGame = () => {
        setModalOpen(false);
        navigate('/game');
    };

    return (
        <main className="Home">
            <section className="Home__picture-background"></section>
            <section className="Home__button-container">
                <motion.button
                    onClick={openModal}
                    className="Home__button text"
                    whileHover={buttonHoverAnimation.whileHover}
                    whileTap={buttonHoverAnimation.whileTap}
                    transition={buttonHoverAnimation.transition}
                >
                    Play
                </motion.button>
                <ModalWindow
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    handleSubmit={navigateToGame}
                />
            </section>
        </main>
    );
};

export default Home;
