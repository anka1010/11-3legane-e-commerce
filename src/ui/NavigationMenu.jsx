import { NavLink } from "react-router-dom";
import styles from "./NavigationMenu.module.scss";

function NavigationMenu({ customStyles = styles, links = [] }) {
  return (
    <div className={customStyles.nav}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive ? customStyles.active : customStyles.link
          }
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}

export default NavigationMenu;
