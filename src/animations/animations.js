export const buttonHoverAnimation = {
    whileHover: {
        scale: 2,
        boxShadow: '0 50px 30px rgba(0, 0, 0, 0.3)',
    },
    whileTap: {
        scale: 0.9,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    transition: { duration: 0.3 },
};

export const modalAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.3 },
};

export const hamburgerHoverAnimation = {
    whileHover: {
        rotate: 90,
        scale: 1.2,
    },
    transition: { duration: 0.3 },
};

export const hamburgerTapAnimation = {
    whileTap: {
        scale: 1.2,
        rotate: 90,
    },
    transition: { duration: 0.2 },
};
