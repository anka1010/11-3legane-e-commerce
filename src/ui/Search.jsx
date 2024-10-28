import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import styles from "./Search.module.scss";
import { shallowEqual } from "react-redux";

// open - show full input for serach query (false - show only search button)
// style - hide in mobile view for search button
function Search({ open = false, style }) {
  const [showInput, setShowInput] = useState(open);
  const inputElement = useRef();

  useEffect(() => {
    const input = inputElement.current;

    input.style.transform = showInput ? "scaleX(1)" : "scaleX(0)";

    return () => {
      input.style.transform = "scaleX(0)";
    };
  }, [showInput]);

  return (
    <>
      <div className={`${style ? style : ""} ${styles.search}`}>
        <input
          type="text"
          placeholder="Search"
          className={styles.input}
          ref={inputElement}
        />

        {!showInput && (
          <div className={style ? style : ""}>
            <Button onClick={() => setShowInput((showInput) => !showInput)}>
              <img src="./icons/search.svg" alt="Search icon" />
            </Button>
          </div>
        )}
        {showInput && <div className={styles.emptyBlock}></div>}
      </div>
    </>
  );
}

export default Search;
