import { Link } from "react-router-dom";
import styles from "./ButtonLink.module.css";

function ButtonLink({ to, children }) {
  return (
    <Link to={to} className={styles.link}>
      {children} <img src="/icons/arrow-right.svg" alt="Arrow" />
    </Link>
  );
}

export default ButtonLink;
