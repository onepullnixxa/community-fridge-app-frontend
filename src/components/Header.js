import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
  return (
    <Router>
      <navbar>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <h4 id="home-btn">⬤ Community Fridge App</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/map"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h4 id="about">⭘ Map</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/add"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h4 id="add">⭘ Add A Fridge</h4>
            </Link>
          </li>
        </ul>
      </navbar>
    </Router>
  );
}

export default Header;
