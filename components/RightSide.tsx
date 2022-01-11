import styles from "../styles/Home.module.css";

export default function RightSide() {
  return (
    <div className={styles.column}>
      <img
        className={styles.rightImage}
        width="100%"
        height="100%"
        src="/images/carbon.svg"
        draggable="false"
      />
    </div>
  );
}
