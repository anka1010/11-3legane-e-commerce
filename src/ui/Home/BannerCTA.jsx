import ButtonLink from "../ButtonLink";
import styles from "./BannerCTA.module.scss";

function BannerCTA() {
  return (
    <div className="container">
      <section className={styles.banner}>
        <div className={styles.image}>
          <img src="./img/bannerCTA.jpg" alt="Room with furniture" />
        </div>
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
      </section>
    </div>
  );
}

export default BannerCTA;
