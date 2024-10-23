import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import CartIcon from "../features/cart/CartIcon";
import WishlistIcon from "../features/wishlist/WishlistIcon";
import styles from "./MobileMenu.module.scss";

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
            <Link to="/cart" className={styles.link}>
              Cart
            </Link>
            <CartIcon />
          </div>
          <div className={styles.menuItem}>
            <Link to="/" className={styles.link}>
              Wishlist
            </Link>
            <WishlistIcon />
          </div>

          <Link to="/signIn" className={`btn ${styles.singInBtn}`}>
            Sign In
          </Link>

          <div className={styles.socials}>
            <Link to={"https://www.instagram.com"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="4"
                  strokeWidth="1.5"
                />
                <circle cx="18" cy="6" r="1" />
                <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
              </svg>
            </Link>
            <Link to={"https://www.facebook.com"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link to={"https://www.youtube.com"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="3"
                  width="20"
                  height="18"
                  rx="4"
                  strokeWidth="1.5"
                />
                <path
                  d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
