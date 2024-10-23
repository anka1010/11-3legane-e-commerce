import { Link } from "react-router-dom";
import styles from "./CartIcon.module.scss";

function CartIcon() {
  return (
    <div className={styles.cart}>
      <Link to="/cart">
        <img src="./icons/shopping-bag.svg" alt="Cart icon" />
      </Link>
      <p className={styles.cartItems}>2</p>
    </div>
  );
}

export default CartIcon;
