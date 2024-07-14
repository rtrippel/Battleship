import './Home.css';
import Modal from "react-modal";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Home() {
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
    <main>
        <section className="main-picture-bg">
        </section>

        <section className="main-buttons">
            <button onClick={handlePlayClick}>Play</button>

            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
                <div className="modal-content">
                    <h2 style={{textAlign: 'center'}}>Hello. To enter the game, please enter your player
                        name/nickname</h2>
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
    </main>
  )
}

export default Home
