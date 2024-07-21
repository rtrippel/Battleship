import { useState, useEffect, useRef } from 'react';

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const socket = useRef(null);

    const apiUrl = import.meta.env.VITE_API_URL;
    const apiPort = import.meta.env.VITE_API_PORT;

    useEffect(() => {
        // Ensure environment variables are available
        if (!apiUrl || !apiPort) {
            console.error('API URL or Port is not defined in environment variables');
            return;
        }

        // Fetch chat history on component load
        fetch(`https://${apiUrl}:${apiPort}/messages`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMessages(data);
            })
            .catch(error => {
                console.error('Error fetching chat history:', error);
            });

        // Set up WebSocket connection
        socket.current = new WebSocket(`wss://${apiUrl}:${apiPort}`);
        socket.current.onmessage = event => {
            const newMessage = JSON.parse(event.data);
            setMessages(prevMessages => [...prevMessages, newMessage]);
        };

        // Clean up on component unmount
        return () => {
            if (socket.current) {
                socket.current.close();
            }
        };
    }, [apiUrl, apiPort]);

    const sendMessage = (name, content, game_id) => {
        if (content.trim() && name.trim()) {
            socket.current.send(JSON.stringify({ name, content, game_id}));
        }
    };

    return { messages, sendMessage };
};

export default useChat;
