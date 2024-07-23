import styles from "./HeroSlider.module.css";

function Hero() {
  return (
    <div className="container">
      <div className={styles.slider}>
        <button className={`${styles.sliderBtn} ${styles.sliderBtnLeft}`}>
          <img src="/icons/arrow.svg" alt="Left arrow" />
        </button>
        <img
          src="/img/hero-slider/slide-1.jpg"
          alt="Shop furniture photo"
          className={styles.img}
        />
        <button className={`${styles.sliderBtn} ${styles.sliderBtnRight}`}>
          <img
            src="/icons/arrow-active.svg"
            alt="Right arrow"
            className={styles.arrowRight}
          />
        </button>
      </div>
    </div>
  );
}

export default Hero;
