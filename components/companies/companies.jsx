/* eslint-disable */
import styles from "./companies.module.css";

export default function Companies() {
  return (
    <section className={styles.wrapper}>
      <div className={`paddings innerWidth flexCenter ${styles.container}`}>
        <img src="./prologis.png" alt="prologis" />
        <img src="./tower.png" alt="tower" />
        <img src="./equinix.png" alt="equinix" />
        <img src="./realty.png" alt="realty" />
      </div>
    </section>
  );
}
