import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav style={{ backgroundColor: "red", padding: "20px 10px" }}>
      <ul>
        <li>
          <NavLink to="/overview">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/concept">Concept</NavLink>
        </li>
        <li>
          <NavLink to="/democratic-system">Democratic System</NavLink>
        </li>
        <li>
          <NavLink to="/design-implementation">Design Implementation</NavLink>
        </li>
        <li>
          <NavLink to="/network-incentives">Network Incentives</NavLink>
        </li>
        <li>
          <NavLink to="/roadmap">Roadmap</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
