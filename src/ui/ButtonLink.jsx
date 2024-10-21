import { Link } from "react-router-dom";
import styles from "./ButtonLink.module.scss";

function ButtonLink({ to, children, customStyles = undefined }) {
  return (
    <Link
      to={to}
      className={`${styles.link} ${customStyles ? customStyles : ""}`}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        strokeWidth="1px"
      >
        <g transform="matrix(-1,0,0,1,32,0)">
          <path d="M6.667,16L25.333,16" />
          <path d="M6.667,16L14.667,24" />
          <path d="M6.667,16L14.667,8" />
        </g>
      </svg>
    </Link>
  );
}

export default ButtonLink;
