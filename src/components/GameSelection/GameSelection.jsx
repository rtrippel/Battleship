import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext.jsx';
import './GameSelection.css';

const GameSelection = ({ setIsStarted }) => {
    const { gameId, setGameId, name, setName } = useContext(AppContext);

    useEffect(() => {
        const storedGameId = localStorage.getItem('gameId');
        if (storedGameId) {
            setGameId(storedGameId);
        }
    }, [setGameId]);

    const fetchRandomGame = async () => {
        // Simulate fetching a random game ID
        setGameId(123);
    };

    const handleLogout = () => {
        setGameId(null);
        setName('');
        setIsStarted(false);
    };

    return (
        <div className="game-selection">
            {gameId ? (
                <div className="game-selection__info">
                    <div className="game-selection__info-details">
                        <p className="game-selection__info-item">Game ID: {gameId}</p>
                        <p className="game-selection__info-item">Name: {name || 'N/A'}</p>
                    </div>
                    <button className="game-selection__button game-selection__button--logout" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <div className="game-selection__random">
                    <button className="game-selection__button game-selection__button--random" onClick={fetchRandomGame}>
                        Random Game
                    </button>
                </div>
            )}
        </div>
    );
};

export default GameSelection;
