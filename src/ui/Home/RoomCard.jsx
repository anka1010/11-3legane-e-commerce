import ButtonLink from "../ButtonLink";
import styles from "./RoomCard.module.css";

function RoomCard({ imgSrc, imgAlt, cardName, type = "" }) {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={imgAlt} />
      <div className={`${styles.cardCaption} ${styles[type]}`}>
        <h2 className={styles.cardName}>{cardName}</h2>
        <ButtonLink to="/shop">Shop Now</ButtonLink>
      </div>
    </div>
  );
}

export default RoomCard;
