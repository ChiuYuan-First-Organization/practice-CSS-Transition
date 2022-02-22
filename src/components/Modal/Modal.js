import styles from "./Modal.module.css";

import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

const Modal = (props) => {
  const animationTiming = {
    enter: 400,
    exit: 1000,
  };


  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      // mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: styles.modalOpen,
        exit: "",
        exitActive: styles.modalClosed,
        appear: "",
        appearActive: "",
      }}
    >
      <div className={styles.modal}>
          <h1>A Modal</h1>
          <button className="Button" onClick={props.onClose}>Close</button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
