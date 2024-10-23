import { Link } from "react-router-dom";
import styles from "./WishlistIcon.module.scss";

function WishlistIcon() {
  return (
    <div className={styles.wishlist}>
      <Link to="/wishlist">
        <img src="./icons/heart.svg" alt="Heart icon" />
      </Link>
      <p className={styles.wishlistItems}>2</p>
    </div>
  );
}

export default WishlistIcon;
