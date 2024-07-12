import { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import './Section2.css';

function Section2() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handlePlayClick = () => {
        setIsModalOpen(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsModalOpen(false);
        navigate('/game', { state: { name } });
    };

    return (
        <section className="container">
            <button onClick={handlePlayClick}>Play</button>
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
                <div className="modal-content">
                    <h2 style={{ textAlign: 'center' }}>Hello. To enter the game, please enter your player name/nickname</h2>
                    <form onSubmit={handleSubmit}>
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
                            <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </section>
    );
}

export default Section2;
