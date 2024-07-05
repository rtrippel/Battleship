import './Footer.css'
import {Link} from "react-router-dom";
function Footer() {

  return (
    <footer className="footer">
      <div className="about-project">
          <Link to="/about-project">
        <h3>About Project</h3>
          </Link>
      </div>
        <div className="about-me">
            <Link to="/about-me">
            <h3>About Me</h3>
            </Link>
        </div>
    </footer>
  )
}

export default Footer
