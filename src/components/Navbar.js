import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
