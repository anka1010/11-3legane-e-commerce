import ButtonLink from "../ButtonLink";
import styles from "./BannerCTA.module.css";

function BannerCTA() {
  return (
    <div className={styles.banner}>
      <img
        src="/img/bannerCTA.jpg"
        alt="Room with furniture"
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h3 className={styles.sale}>SALE UP TO 35% OFF</h3>
          <h2 className={styles.title}>
            HUNDREDS of <br />
            New lower prices!
          </h2>
          <p className={styles.text}>
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
        </div>
        <ButtonLink to="shop">Shop now</ButtonLink>
      </div>
    </div>
  );
}

export default BannerCTA;
