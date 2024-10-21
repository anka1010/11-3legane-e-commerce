import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.scss";

function Header() {
  const links = [
    { to: "/", text: "Home" },
    { to: "/shop", text: "Shop" },
    { to: "/product", text: "Product" },
    { to: "/contact", text: "Contuct Us" },
  ];

  return (
    <header className={`container-sm ${styles.header}`}>
      <div className={styles.left}>
        <MobileMenu />
        <Logo />
      </div>
      <NavigationMenu links={links} />
      <Menu />
    </header>
  );
}

export default Header;
