/* eslint-disable*/
import CountUp from 'react-countup'
import styles from './hero.module.css'
import { HiLocationMarker } from 'react-icons/hi'
export default function Hero() {
    return (
        <div className={`${styles.container}`}>
        <section className={`${styles.wrapper}`}>
            <div className={`paddings innerWidth flexCenter ${styles.container}`}>
                <div className={`flexColStart ${styles.left}`}>
                    
                    <div className={`${styles.title}`}>
                        <div className={styles.orangeCircle} />
                        <h1>
                            Discover <br />
                            Most Suitable <br />
                            Property
                        </h1>
                    </div>
                    <div className={`flexColStart ${styles.des}`}>
                        <span className={`secondaryText`}>Find a variety of properties that suit you very easilty</span>
                        <span className={`secondaryText`}>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className={`flexCenter ${styles.searchBar}`}>
                       <HiLocationMarker color='var(--blue)' size={25} />
                       <input type='text'/>
                       <button className='button'>Search</button>
                    </div>
                    <div className={`flexCenter ${styles.stats}`}>
                        <div className={`flexColCenter ${styles.stat}`}>
                            <span>
                            <CountUp start={8800} end={9000} duration={4} />
                            <span>+</span>
                            </span>
                            <span className={`secondaryText`}>Premium Product</span>
                        </div>
                        <div className={`flexColCenter ${styles.stat}`}>
                            <span>
                            <CountUp start={1950} end={2000} duration={4} />
                            <span>+</span>
                            </span>
                            <span className={`secondaryText`}>Happy Contumers </span>
                        </div>
                        <div className={`flexColCenter ${styles.stat}`}>
                            <span>
                            <CountUp end={28} />
                            <span>+</span>
                            </span>
                            <span className={`secondaryText`}>Award winning</span>
                        </div>
                    </div>
                </div>
                <div className={`flexCenter hero-right`}>
                    <div className={`${styles.imageContainer}`}>
                        <img src='./hero-image.png' alt='hero picture' />
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}