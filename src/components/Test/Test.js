import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";

import styles from "./Test.module.css";

const Test = () => {
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState(false);

  const toggleShowHandler = () => {
    setShow((prev) => !prev);
  };

  const toggleHeightHandler = () => {
      setHeight(prev => !prev);
  };

  const timing = {
    enter: 1000,
    exit: 1000,
  };

  return (
    <div>
      <CSSTransition
        in={show}
        timeout={timing}
        classNames={{
          enter: "",
          enterActive: styles.long,
          enterDone: styles.longDone,
          exit: "",
          exitActive: styles.short,
          exitDone: styles.shortDone,
          appear: "",
          appearActive: "",
        }}
      >
        <div className={styles.box}></div>
      </CSSTransition>
      <button className={styles.btn} onClick={toggleShowHandler}>
        Toggle
      </button>
      <div className={`${styles.box2} ${height ? styles.longer : ""}`}></div>
      <button className={styles.btn} onClick={toggleHeightHandler}>
        Toggle2
      </button>
    </div>
  );
};

export default Test;
