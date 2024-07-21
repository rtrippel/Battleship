import React, { useEffect, useRef } from 'react';
import './ChatWindow.css';

const ChatWindow = ({ messages, name, inputValue, setInputValue, sendMessage, isStarted }) => {
    const chatWindowRef = useRef(null);

    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() && isStarted) {
            sendMessage(name, inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="chat-window-container">
            <div className="chat-window" ref={chatWindowRef}>
                <h2 className="chat-header">Shared Chat</h2>
                {messages.map((msg) => (
                    <div key={msg.id} className="chat-message">
                        <strong className="message-author">{msg.name}:</strong> {msg.content}
                        <div className="message-timestamp">
                            {new Date(msg.timestamp).toLocaleString()}
                        </div>
                    </div>
                ))}
            </div>
            <form className="chat-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="chat-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={!isStarted}
                />
                <button type="submit" className="chat-button" disabled={!isStarted}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatWindow;
