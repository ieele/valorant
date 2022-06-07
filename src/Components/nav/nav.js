import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Characters">
            <li>Characters</li>
          </Link>
          <Link to="/Weapons">
            <li>Weapons</li>
          </Link>
          <Link to="/Ranks">
            <li>Ranks</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
