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
        <div>
            <div id="game-selection" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                <button style={{ width: '200px', height: '50px', marginRight: '20px' }}>Random Game</button>
                <input type="text" placeholder="Game with a friend" style={{ width: '200px', height: '30px', marginRight: '20px' }} />
            </div>
            <div
                id="chat-window"
                ref={chatWindowRef}
                style={{ border: '1px solid black', height: '300px', overflowY: 'scroll', padding: '10px' }}
            >
                {messages.map((msg) => (
                    <div key={msg.id}>
                        <strong>{msg.name}:</strong> {msg.content}
                        <div><small>{new Date(msg.timestamp).toLocaleString()}</small></div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ width: '80%' }}
                    disabled={!isStarted}
                />
                <button type="submit" style={{ width: '20%' }} disabled={!isStarted}>Send</button>
            </form>
        </div>
    );
};

export default Game;
