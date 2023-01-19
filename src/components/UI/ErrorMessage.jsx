import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  return <div className={styles.error}>{props.message}</div>;
};

export default ErrorMessage;
