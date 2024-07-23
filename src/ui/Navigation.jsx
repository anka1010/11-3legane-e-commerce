import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation({ type = "dark" }) {
  return (
    <div className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles[type + "Active"] : styles[type]
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? styles[type + "Active"] : styles[type]
        }
      >
        Shop
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) =>
          isActive ? styles[type + "Active"] : styles[type]
        }
      >
        Product
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? styles[type + "Active"] : styles[type]
        }
      >
        Contuct Us
      </NavLink>
    </div>
  );
}

export default Navigation;
