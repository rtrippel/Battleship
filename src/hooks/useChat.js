import { useState, useEffect, useRef } from 'react';

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const socket = useRef(null);

    useEffect(() => {
        // Получение истории чата при загрузке компонента
        fetch('https://api.battleship.romantrippel.com:3000/messages')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMessages(data);
            })
            .catch(error => {
                console.error('Error fetching chat history:', error);
            });

        // Установка WebSocket соединения
        socket.current = new WebSocket('wss://api.battleship.romantrippel.com:3000');
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

    const sendMessage = (name, content, game_id) => {
        if (content.trim() && name.trim()) {
            socket.current.send(JSON.stringify({ name, content, game_id}));
        }
    };

    return { messages, sendMessage };
};

export default useChat;
