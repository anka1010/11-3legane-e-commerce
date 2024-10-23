import Button from "./Button";
import styles from "./Menu.module.scss";
import CartIcon from "../features/cart/CartIcon";

function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.search}>
        <Button>
          <img src="./icons/search.svg" alt="Search icon" />
        </Button>
      </div>
      <div className={styles.user}>
        <Button>
          <img src="./icons/user-circle.svg" alt="User icon" />
        </Button>
      </div>
      <CartIcon />
    </div>
  );
}

export default Menu;
