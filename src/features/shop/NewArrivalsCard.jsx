import styles from "./NewArrivalsCard.module.scss";

function NewArrivalsCard({ imgSrc }) {
  return (
    <div className={styles.card}>
      <div className={styles.topBlock}>
        <img src={imgSrc} alt="" />
        <div className={styles.discount}>DISCOUNT</div>
        <div className={styles.like}>LIKE</div>
        <div className={`btn btn-sm ${styles.btn}`}>Add to cart</div>
      </div>
      <div className={styles.bottomBlock}></div>
    </div>
  );
}

export default NewArrivalsCard;
