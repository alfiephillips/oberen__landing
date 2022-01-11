import styles from "../styles/Home.module.css";
import Form from "./Form";

export default function LeftSide() {
  return (
    <div className={styles.column}>
      <img
        className={styles.leftImage}
        height="40%"
        width="40%"
        src="images/logo.png"
        draggable="false"
      />
      <h1 className={styles.title}>
        Defeat the cutback. <br /> Get{" "}
        <span className={styles.titleKeyword}>Employed</span>
      </h1>
      <div className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <Form />
    </div>
  );
}
