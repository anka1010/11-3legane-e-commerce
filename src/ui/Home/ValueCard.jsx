import styles from "./ValueCard.module.css";

function ValueCard({ icon = "", title = "", text = "" }) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default ValueCard;
