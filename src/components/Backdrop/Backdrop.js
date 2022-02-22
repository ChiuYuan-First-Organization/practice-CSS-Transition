import styles from "./Backdrop.module.css";

import React from "react";

const Backdrop = (props) => {
  const cssClasses = [
    styles.Backdrop,
    props.show ? styles.BackdropOpen : styles.BackdropClosed,
  ];
  return <div className={cssClasses.join(" ")}></div>;
};

export default Backdrop;
