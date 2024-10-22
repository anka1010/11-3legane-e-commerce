import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";

function Footer() {
  const links = [
    { to: "/", text: "Home" },
    { to: "/shop", text: "Shop" },
    { to: "/product", text: "Product" },
    { to: "/blog", text: "Blog" },
    { to: "/contact", text: "Contuct Us" },
  ];

  return (
    <footer className={`footer ${styles.footer}`}>
      <div className="container-sm">
        <div className={styles.topRow}>
          <div className={styles.topLeft}>
            <Logo type="light" />
            <div className={styles.divider}>&nbsp;</div>
            <p>Gift & Decoration Store </p>
          </div>
          <div className={styles.topRight}>
            <NavigationMenu customStyles={styles} links={links} />
          </div>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              Copyright © 2023 3legant. All rights reserved
            </p>
            <div className={styles.links}>
              <Link to="privacy" className={styles.link}>
                Privacy Policy
              </Link>
              <Link to="terms" className={styles.link}>
                Terms of Use
              </Link>
            </div>
          </div>
          <div className={styles.bottomRight}>
            <Link to={"https://www.instagram.com"}>
              <img src="./icons/instagram.svg" alt="Instagram icon" />
            </Link>
            <Link to={"https://www.facebook.com"}>
              <img src="./icons/facebook.svg" alt="Facebook icon" />
            </Link>
            <Link to={"https://www.youtube.com"}>
              <img src="./icons/youtube.svg" alt="Youtube icon" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
