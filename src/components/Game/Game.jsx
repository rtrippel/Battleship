import './Game.css';
import { useState, useEffect, useRef } from 'react';

const Game = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const socket = useRef(null);

    useEffect(() => {
        // Получение истории чата при загрузке компонента
        fetch('https://api.battleship.romantrippel.com:3000/messages') // Изменено на HTTPS
            .then(response => response.json())
            .then(data => {
                setMessages(data);
            })
            .catch(error => {
                console.error('Error fetching chat history:', error);
            });

        // Установка WebSocket соединения
        socket.current = new WebSocket('wss://api.battleship.romantrippel.com:3000'); // Изменено на WSS
        socket.current.onmessage = event => {
            const newMessage = JSON.parse(event.data);
            setMessages(prevMessages => [...prevMessages, newMessage]);
        };

        // Очистка при размонтировании компонента
        return () => {
            if (socket.current) {
                socket.current.close();
            }
        };
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        if (inputValue.trim()) {
            const newMessage = { id: Date.now(), content: inputValue }; // Создание нового сообщения
            // Отправка сообщения через WebSocket
            socket.current.send(JSON.stringify({ message: inputValue }));
            setMessages(prevMessages => [...prevMessages, newMessage]); // Добавление нового сообщения в состояние
            setInputValue('');
        }
    };

    return (
        <div>
            <div id="chat-window" style={{ border: '1px solid black', height: '300px', overflowY: 'scroll', padding: '10px' }}>
                {messages.map((msg) => (
                    <div key={msg.id}>{msg.content}</div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    style={{ width: '80%' }}
                />
                <button type="submit" style={{ width: '20%' }}>Send</button>
            </form>
        </div>
    );
};

export default Game;
