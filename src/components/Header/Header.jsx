import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import {Link} from "react-router-dom";
import logoImage from '/assets/images/logo_round_yellow.png';

const MenuIconStyled = styled(MenuIcon)({
    fontSize: '5rem',
    color: '#FFF568'
});

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                <img src={logoImage} alt="Logo"/>
                </Link>
            </div>
            <div className="title">
                <h1>Battleship</h1>
            </div>
            <div className="menu-icon">
                <MenuIconStyled />
            </div>
        </header>
    );
}

export default Header;