// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="ul">
      <li>
        <Link to="/" className="list">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="list">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
