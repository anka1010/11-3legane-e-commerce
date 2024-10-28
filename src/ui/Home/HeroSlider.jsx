import { useState, useRef, useEffect } from "react";
import styles from "./HeroSlider.module.scss";

function HeroSlider() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const slidesCount = slides.length;

  function slideLeft() {
    setCurrentSlide((currentSlide) =>
      currentSlide > 0 ? currentSlide - 1 : currentSlide
    );
  }

  function slideRight() {
    setCurrentSlide((currentSlide) =>
      currentSlide < slides.length - 1 ? currentSlide + 1 : currentSlide
    );
  }

  useEffect(() => {
    fetch(
      "my-json-server.typicode.com/anka1010/11-3legane-e-commerce/heroImages"
    )
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.log(err));

    // setSlides([
    //   { id: "1", src: "./img/heroSlider/slide-1.jpg" },
    //   { id: "2", src: "./img/heroSlider/slide-2.jpg" },
    //   { id: "3", src: "./img/heroSlider/slide-3.jpg" },
    //   { id: "4", src: "./img/heroSlider/slide-4.jpg" },
    // ]);
  }, []);

  useEffect(() => {
    sliderRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div className="container-sm">
      <div className={styles.slider}>
        <div ref={sliderRef} className={styles.sliderImage}>
          {slides.map((slide) => (
            <img key={slide.id} src={slide.src} alt="Shop furniture photo" />
          ))}
        </div>
        <div className={styles.sliderDots}>
          {slides.map((slide, index) => (
            <button
              key={index}
              className={currentSlide === index ? styles.sliderDotCurrent : ""}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
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
          disabled={currentSlide === slidesCount - 1}
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
