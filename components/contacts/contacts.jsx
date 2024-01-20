import styles from './contact.module.css'

export default function Contacts() {
    return (
        <div className={`flexCenter`}>
        <section className={`paddings innerWidth ${styles.contact}`}>
        <span className={`primaryText`}>How can I help you?</span>
        <form className={styles.form}>
            <div className={`${styles.controls}`}>
                <div className={styles.control}>
                    <label htmlFor='email' className={`orangeText`}>Your Email</label>
                    <input type='email' id='email' required />
                </div>
                <div className={styles.control}>
                    <label htmlFor='name' className={`orangeText`}>Your Name</label>
                    <input type='text' id='name' required />
                </div>
            </div>
            <div className={`${styles.control}`}>
                <label htmlFor='message' className={`orangeText`}>Your message</label>
                <textarea id='message' rows='5' required></textarea>
            </div>
            <div className={styles.actions}>
                <button type='submit' className='button'>Send Message</button>
            </div>
        </form>
    </section>
    </div>
    )
}