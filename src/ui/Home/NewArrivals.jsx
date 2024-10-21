import ButtonLink from "../ButtonLink";
import styles from "./NewArrivals.module.scss";

function NewArrivals() {
  return (
    <div className="container-sm">
      <section className={styles.newArrivals}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            New <br />
            Arrivals
          </h2>
          <ButtonLink to="/shop">More Products</ButtonLink>
        </div>

        <div className={styles.carousel}>
          {/* ??? */}
          <img src="./img/carousel/carousel__TEST.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default NewArrivals;
