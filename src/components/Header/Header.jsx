import { useEffect, useRef, useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logoImage from '/assets/images/logo_round_yellow.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Проверяем, что клик произошел вне меню и не на иконке меню
            if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-icon')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logoImage} alt="Logo" />
                </Link>
            </div>
            <div className="title">
                <h1>Battleship</h1>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <MenuIcon style={{ fontSize: '10vh', color: '#FFF568', cursor: 'pointer' }} />
            </div>
            {menuOpen && (
                <div className="menu" ref={menuRef}>
                    <ul>
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/game" onClick={toggleMenu}>Game</Link></li>
                        <li><Link to="/about-project" onClick={toggleMenu}>About Project</Link></li>
                        <li><Link to="/about-me" onClick={toggleMenu}>About Me</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
