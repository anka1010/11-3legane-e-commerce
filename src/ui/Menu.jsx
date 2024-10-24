import Search from "./Search";
import CartIcon from "../features/cart/CartIcon";
import UserIcon from "../features/user/UserIcon";
import styles from "./Menu.module.scss";

function Menu() {
  return (
    <div className={styles.menu}>
      <Search style="hiddenMobile" />
      <UserIcon style="hiddenMobile" />
      <CartIcon />
    </div>
  );
}

export default Menu;
