import ButtonLink from "./ButtonLink";
import Button from "./Button";
import styles from "./Promo.module.scss";

function Promo({ setShowPromo }) {
  return (
    <div className={styles.promo}>
      <div className={styles.promoBox}>
        <div className={styles.promoText}>
          <img src="./icons/ticket-percent.svg" alt="Percent icon" />
          <p>30% off storewide — Limited time! </p>
          <ButtonLink to="/shop" customStyles={styles.link}>
            Shop Now
          </ButtonLink>
        </div>
        <Button styles={styles.closeButton} onClick={() => setShowPromo(false)}>
          <img src="./icons/close.svg" alt="Close icon" />
        </Button>
      </div>
    </div>
  );
}

export default Promo;
