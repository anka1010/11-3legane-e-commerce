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
    </footer>
  );
}

export default Footer;
