import { NavLink } from "react-router";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <div>logo</div>
          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/tours">Tours</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
