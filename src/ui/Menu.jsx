import Button from "./Button";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <Button>
        <img src="/icons/search.svg" alt="Search icon" />
      </Button>
      <Button>
        <img src="/icons/user-circle.svg" alt="User icon" />
      </Button>
      <div className={styles.cart}>
        <Button>
          <img src="/icons/shopping-bag.svg" alt="Cart icon" />
        </Button>
        <p className={styles.cartItems}>2</p>
      </div>
    </div>
  );
}

export default Menu;
