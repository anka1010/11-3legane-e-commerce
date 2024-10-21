import Button from "./Button";
import styles from "./MobileMenu.module.scss";

function MobileMenu() {
  return (
    <Button styles={styles.menu}>
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
  );
}

export default MobileMenu;
