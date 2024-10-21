import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

function Logo({ type = "dark" }) {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles[type]}>
        3legant<span className={styles.dot}>.</span>
      </Link>
    </div>
  );
}

export default Logo;
