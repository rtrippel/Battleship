import { motion } from 'framer-motion';
import { hamburgerHoverAnimation, hamburgerTapAnimation } from '../../animations/animations';
import './Hamburger.css';

const Hamburger = ({ onClick }) => {
    return (
        <motion.div
            className="Hamburger"
            onClick={onClick}
            whileHover={hamburgerHoverAnimation.whileHover}
            whileTap={hamburgerTapAnimation.whileTap}
            transition={hamburgerHoverAnimation.transition}
        >
            <div className="Hamburger__line"></div>
            <div className="Hamburger__line"></div>
            <div className="Hamburger__line"></div>
        </motion.div>
    );
};

export default Hamburger;
