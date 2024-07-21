import './Game.css';
import { useContext, useState } from 'react';
import useChat from '../../hooks/useChat';
import GameSelection from '../GameSelection/GameSelection.jsx';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import ChatWindow from '../ChatWindow/ChatWindow.jsx';
import { AppContext } from '../../context/AppContext.jsx';

const Game = () => {
    const { name, setName } = useContext(AppContext);
    const { messages, sendMessage } = useChat();
    const [inputValue, setInputValue] = useState('');
    const [isStarted, setIsStarted] = useState(!!name);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    const handleLoginSubmit = () => {
        if (name.trim()) {
            setIsStarted(true);
            setIsModalOpen(false);
        } else {
            alert('Please enter your name.');
        }
    };

    return (
        <main className="game">
            {isStarted ? (
                <GameSelection setIsStarted={setIsStarted} />
            ) : (
                <section className="game__login-button">
                    <button className="modal-button" onClick={handleLoginClick}>Login</button>
                    <ModalWindow
                        isOpen={isModalOpen}
                        onRequestClose={() => setIsModalOpen(false)}
                        handleSubmit={handleLoginSubmit}
                    />
                </section>
            )}
            <ChatWindow
                messages={messages}
                name={name}
                inputValue={inputValue}
                setInputValue={setInputValue}
                sendMessage={sendMessage}
                isStarted={isStarted}
            />
        </main>
    );
};

export default Game;
