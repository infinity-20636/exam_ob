import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="fon">
      <header className="container wrapper">
        <nav className="wrapper__nav">
          <NavLink to="/" className="wrapper__nav-link">
            Home
          </NavLink>
          <NavLink to="/add" className="wrapper__nav-link">
            TaskAdd
          </NavLink>
          <NavLink to="/shop" className="wrapper__nav-link">
            Shop
          </NavLink>
        </nav>
      </header>
    </section>
  );
};

export default Header;
