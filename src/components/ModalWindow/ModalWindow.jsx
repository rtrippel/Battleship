import { useContext } from 'react';
import Modal from 'react-modal';
import { AppContext } from '../../context/AppContext';
import './ModalWindow.css';

// Set app element for accessibility
Modal.setAppElement('#root');

const ModalWindow = ({ isOpen, onRequestClose, handleSubmit }) => {
    const { name, setName } = useContext(AppContext);

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <div>
                <h2>Hello. To enter the game, please enter your player name/nickname</h2>
                <form onSubmit={onSubmit}>
                    <label>
                        Name/Nickname:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <div className="modal-buttons">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={onRequestClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default ModalWindow;
