import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [name, setName] = useState(() => localStorage.getItem('name') || '');
    const [gameId, setGameId] = useState(() => localStorage.getItem('gameId') || '');

    useEffect(() => {
        if (name) {
            localStorage.setItem('name', name);
        } else {
            localStorage.removeItem('name');
        }
    }, [name]);

    useEffect(() => {
        if (gameId) {
            localStorage.setItem('gameId', gameId);
        } else {
            localStorage.removeItem('gameId');
        }
    }, [gameId]);

    return (
        <AppContext.Provider value={{ gameId, setGameId, name, setName }}>
            {children}
        </AppContext.Provider>
    );
};
