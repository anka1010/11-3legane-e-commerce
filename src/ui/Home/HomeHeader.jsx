import styles from "./HomeHeader.module.css";

function HomeHeader() {
  return (
    <div className="container">
      <section className={styles.header}>
        <h1 className={styles.slogan}>
          Simply Unique<span className={styles.gray}>/</span> <br />
          Simply Better<span className={styles.gray}>.</span>
        </h1>
        <p className={styles.description}>
          <span className={styles.bold}>3legant</span> is a gift & decorations
          store based in HCMC, Vietnam. Est since 2019.
        </p>
      </section>
    </div>
  );
}

export default HomeHeader;
