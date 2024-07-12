import PropTypes from 'prop-types';
import './ModalWindow.css';

const ModalWindow = ({ name, setName, gameId, setGameId, handleSubmit, closeModal }) => (
    <div className="modal">
        <div className="modal-content">
            <h2>Enter your details</h2>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Game ID"
                value={gameId}
                onChange={e => setGameId(e.target.value)}
            />
            <button onClick={handleSubmit}>Start</button>
            <button onClick={closeModal}>Cancel</button>
        </div>
    </div>
);

ModalWindow.propTypes = {
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
    gameId: PropTypes.string.isRequired,
    setGameId: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default ModalWindow;
