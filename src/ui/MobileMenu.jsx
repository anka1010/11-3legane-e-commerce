import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import styles from "./MobileMenu.module.scss";
import { Link } from "react-router-dom";

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBlock = useRef();
  const backgroundBlock = useRef();

  useEffect(() => {
    if (menuOpen) {
      menuBlock.current.style.transform = `translateX(0)`;
      backgroundBlock.current.style.transform = `translateX(0)`;
    } else {
      menuBlock.current.style.transform = `translateX(-100%)`;
      backgroundBlock.current.style.transform = `translateX(-100%)`;
    }
  }, [menuOpen]);

  return (
    <div className={styles.menu}>
      <Button
        styles={styles.menuBtn}
        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 8H17M7 12H17M7 16H17"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </Button>

      <div className={styles.background} ref={backgroundBlock}></div>
      <div className={styles.menuBlock} ref={menuBlock}>
        <div className={styles.topBlock}>
          <div className={styles.logo}>
            <Logo />
            <Button onClick={() => setMenuOpen((menuOpen) => !menuOpen)}>
              <img src="./icons/close.svg" alt="Close icon" />
            </Button>
          </div>
          <p>Search</p>
          <div className={styles.menuItem}>
            <Link to="/" className={styles.linkSm}>
              Home
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link to="/" className={styles.linkSm}>
              Shop
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link to="/" className={styles.linkSm}>
              Product
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link to="/" className={styles.linkSm}>
              Contuct Us
            </Link>
          </div>
        </div>
        <div className={styles.bottomBlock}>
          <div className={styles.menuItem}>
            <Link to="/" className={styles.link}>
              Cart
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link to="/" className={styles.link}>
              Wishlist
            </Link>
          </div>
          <p>Sign In</p>
          <p>Socials</p>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
