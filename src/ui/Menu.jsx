import Button from "./Button";
import styles from "./Menu.module.scss";

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
      <div className={styles.cart}>
        <Button>
          <img src="./icons/shopping-bag.svg" alt="Cart icon" />
        </Button>
        <p className={styles.cartItems}>2</p>
      </div>
    </div>
  );
}

export default Menu;
