import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Hamburger from '../Hamburger/Hamburger.jsx';
import logoImage from '/assets/images/logo_round_yellow.png';
import './Header.css';

const menuVariants = {
    hidden: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
        },
    },
};

const listItemVariants = {
    hidden: {
        x: '-100%',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            type: 'spring',
        },
    },
};

const shakeVariants = {
    start: {
        x: [0, -5, 5, -5, 5, 0],
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'loop',
        },
    },
};

const logoVariants = {
    initial: {
        rotateY: 0,
    },
    animate: {
        rotateY: [0, 1440],
        transition: {
            duration: 2,
            ease: 'easeOut',
        },
    },
};

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.Hamburger')) {
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

    const handleLogoClick = () => {
        const logo = document.querySelector('.logo img');
        logo.style.pointerEvents = 'none'; // Disable further clicks during animation

        const animation = new Promise((resolve) => {
            const motionLogo = document.querySelector('.motion-logo');
            motionLogo.classList.add('spin'); // Add spinning class for animation
            setTimeout(() => {
                motionLogo.classList.remove('spin');
                resolve();
            }, 2000); // Animation duration
        });

        animation.then(() => {
            navigate('/');
        });
    };

    return (
        <header className="header">
            <div className="logo" onClick={handleLogoClick}>
                <motion.img
                    src={logoImage}
                    alt="Logo"
                    className="motion-logo"
                    variants={logoVariants}
                    initial="initial"
                    animate="initial"
                />
            </div>
            <div className="title">
                <h1>Battleship</h1>
            </div>
            <Hamburger onClick={toggleMenu} />
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="menu"
                        ref={menuRef}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                    >
                        <ul>
                            <motion.li
                                variants={listItemVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.div
                                    variants={shakeVariants}
                                    animate="start"
                                >
                                    <Link to="/" onClick={toggleMenu}>
                                        Home
                                    </Link>
                                </motion.div>
                            </motion.li>
                            {['Game', 'About Project'].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={listItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.div
                                        variants={shakeVariants}
                                        animate="start"
                                    >
                                        <Link to={`/${item.toLowerCase().replace(' ', '-')}`} onClick={toggleMenu}>
                                            {item}
                                        </Link>
                                    </motion.div>
                                </motion.li>
                            ))}
                            <motion.li
                                variants={listItemVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.div
                                    variants={shakeVariants}
                                    animate="start"
                                >
                                    <Link to="/about-developer" onClick={toggleMenu}>
                                        About the Developer
                                    </Link>
                                </motion.div>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;
