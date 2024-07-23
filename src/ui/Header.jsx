import Logo from "./Logo";
import Navigation from "./Navigation";
import Menu from "./Menu";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <Logo />
      <Navigation />
      <Menu />
    </header>
  );
}

export default Header;
