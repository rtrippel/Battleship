import './Game.css';
import { useState, useEffect, useRef } from 'react';
import useChat from '../../hooks/useChat'; // Проверьте, что здесь правильный путь к вашему хуку useChat
import { useLocation } from 'react-router-dom';

const Game = () => {
    const location = useLocation();
    const { name } = location.state || {};
    const { messages, sendMessage } = useChat(); // Добавляем функцию getChatHistory из хука useChat
    const [inputValue, setInputValue] = useState('');
    const [isStarted] = useState(!!name);
    const chatWindowRef = useRef(null);
    const gameId = "111"

    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() && isStarted) {
            sendMessage(name, inputValue, gameId);
            setInputValue('');
        }
    };

    return (
        <main>
            <div id="game-selection"
                 style={{display: 'flex', height: '10%', justifyContent: 'center', alignItems: 'center'}}>
                <button style={{width: '40%', height: '80%', marginRight: '20px'}}>Random Game</button>
                <input type="text" placeholder="Game with a friend"
                       style={{width: '200px', height: '80%', marginRight: '20px'}}/>
            </div>
            <div
                id="chat-window"
                ref={chatWindowRef}
                style={{border: '1px solid black', width: '90%', overflowY: 'scroll', padding: '1rem'}}
            >
                <h2 style={{
                    textAlign: 'center',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                }}>Shared Chat</h2>

                {messages.map((msg) => (
                    <div key={msg.id}>
                        <strong>{msg.name}:</strong> {msg.content}
                        <div><small>{new Date(msg.timestamp).toLocaleString()}</small></div>
                    </div>
                ))}
            </div>
            <div style={{width: '90%'}}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        style={{width: '70%'}}
                        onChange={(e) => setInputValue(e.target.value)}

                        disabled={!isStarted}
                    />
                    <button type="submit" style={{width: '20%'}} disabled={!isStarted}>Send</button>
                </form>
            </div>
        </main>
    );
};

export default Game;
