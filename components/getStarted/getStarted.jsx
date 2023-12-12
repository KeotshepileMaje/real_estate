import styles from './getStarted.module.css'

export default function GetStarted() {
  return (
    <section className={`${styles.wrapper}`}>
      <div className={`paddings innerWidth ${styles.container}`}>
        <div className={`flexColCenter ${styles.innerContainer}`}>
          <span className={`primaryText  ${styles.primaryText}`}>Get Started with Homyz</span>
          <span className={`secondaryText  ${styles.secondaryText}`}>
            Subscribe and find super attractive price quotes from us. <br/> 
            Find your residence soon
          </span>
          <button className={`button ${styles.button}`}>
            <a href='mail:keotshepilemaje@gmail.com'>Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}
