import { useState, useRef, useEffect } from "react";
import styles from "./HeroSlider.module.scss";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  function slideLeft() {
    setCurrentSlide(() => (currentSlide > 0 ? currentSlide - 1 : currentSlide));
  }

  function slideRight() {
    setCurrentSlide(() => (currentSlide < 2 ? currentSlide + 1 : currentSlide));
  }

  useEffect(() => {
    sliderRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div className="container-sm">
      <div className={styles.slider}>
        <div ref={sliderRef} className={styles.sliderImage}>
          <img
            srcSet="./img/hero-slider/slide-1-mobile.jpg 311w, ./img/hero-slider/slide-1.jpg 1120w"
            sizes="(max-width: 768px) 311px,
                  1120px"
            src="./img/hero-slider/slide-1.jpg"
            alt="Shop furniture photo"
          />
          <img
            srcSet="./img/hero-slider/slide-2-mobile.jpg 311w, ./img/hero-slider/slide-2.jpg 1120w"
            sizes="(max-width: 768px) 311px,
                  1120px"
            src="./img/hero-slider/slide-2.jpg"
            alt="Shop furniture photo"
          />
          <img
            srcSet="./img/hero-slider/slide-3-mobile.jpg 311w, ./img/hero-slider/slide-3.jpg 1120w"
            sizes="(max-width: 768px) 311px,
                  1120px"
            src="./img/hero-slider/slide-3.jpg"
            alt="Shop furniture photo"
          />
        </div>
        <div className={styles.sliderDots}>
          <button
            className={currentSlide === 0 ? styles.sliderDotCurrent : ""}
            onClick={() => setCurrentSlide(0)}
          ></button>
          <button
            className={currentSlide === 1 ? styles.sliderDotCurrent : ""}
            onClick={() => setCurrentSlide(1)}
          ></button>
          <button
            className={currentSlide === 2 ? styles.sliderDotCurrent : ""}
            onClick={() => setCurrentSlide(2)}
          ></button>
        </div>
        <button
          className={`${styles.sliderBtn} ${styles.sliderBtnLeft}`}
          onClick={slideLeft}
          disabled={currentSlide == 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            strokeWidth="2px"
          >
            <path d="M6.667,16L25.333,16" />
            <path d="M6.667,16L14.667,24" />
            <path d="M6.667,16L14.667,8" />
          </svg>
        </button>
        <button
          className={`${styles.sliderBtn} ${styles.sliderBtnRight}`}
          onClick={slideRight}
          disabled={currentSlide == 2}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            strokeWidth="2px"
          >
            <g transform="matrix(-1,0,0,1,32,0)">
              <path d="M6.667,16L25.333,16" />
              <path d="M6.667,16L14.667,24" />
              <path d="M6.667,16L14.667,8" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HeroSlider;
