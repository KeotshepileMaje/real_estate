import styles from "./calculators.module.css";

export default function Calculators() {
  return (
    <section className={`${styles.wrapper}`}>
      <div className={`paddings innerWidth`}>
        <div className={` ${styles.innerContainer}`}>
          {/* Left Div */}
          <div>
            <h2>Calculate your monthly bond repayments</h2>
            <div>
              <span>Purchase Price</span>
              <div className={`flexCenter ${styles.searchBar}`}>
                <input type="text" placeholder="R100 000" />
              </div>
            </div>
            <div>
              <span>Deposit (Optional)</span>
              <div className={`flexCenter ${styles.searchBar}`}>
                <input type="text" placeholder="R100 000" />
              </div>
            </div>
            <div>
              <span>Interest Rate</span>
              <div className={`flexCenter ${styles.searchBar}`}>
                <input type="text" placeholder="R100 000" />
              </div>
            </div>
            <div>
              <span>Loan Term:</span>
              <div className={`flexCenter ${styles.searchBar}`}>
                <input type="text" placeholder="R100 000" />
              </div>
            </div>
          </div>

          {/* Right Div */}
          <div className={styles.right}>
            <span>
              <span>Monthly Bond Repayment</span>
              <span>R 10,837</span>
            </span>
            <span>
              <span>Once-off Costs:</span>
              <span>R 60,295</span>
            </span>
            <span>
              <span>Deposit:</span>
              <span>R 0</span>
            </span>
            <span>
              <span>Property Transfer:</span>
              <span>R 27,549</span>
            </span>
            <span>
              <span>Gross Monthly Income Required</span>
              <span>R 36,123</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
