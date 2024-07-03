// import './Header.css'; //

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="/path/to/logo.png" alt="Logo"/>
            </div>
            <div className="title">
                <h1>Battleship</h1>
            </div>
            <div className="menu-icon">
                <svg
                    className="hamburger-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
            </div>
        </header>
    );
}

export default Header;
