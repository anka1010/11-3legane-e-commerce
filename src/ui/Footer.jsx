import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topRow}>
          <div className={styles.topLeft}>
            <Logo type="light" />
            <div className={styles.divider}>&nbsp;</div>
            <p>Gift & Decoration Store </p>
          </div>
          <Navigation type="light" />
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              Copyright © 2023 3legant. All rights reserved
            </p>
            <Link to="privacy" className={styles.link}>
              Privacy Policy
            </Link>
            <Link to="terms" className={styles.link}>
              Terms of Use
            </Link>
          </div>
          <div className={styles.bottomRight}>
            <ButtonLink to={"https://www.instagram.com"}>
              <img src="/icons/instagram.svg" alt="Instagram icon" />
            </ButtonLink>
            <ButtonLink to={"https://www.facebook.com"}>
              <img src="/icons/facebook.svg" alt="Facebook icon" />
            </ButtonLink>
            <ButtonLink to={"https://www.youtube.com"}>
              <img src="/icons/youtube.svg" alt="Youtube icon" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
