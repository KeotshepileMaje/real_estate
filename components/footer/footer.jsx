import styles from './footer.module.css'

export default function Footer () {
    return(
        <section className={`wrapper`}>  
            <div className={`paddings innerWidth flexCenter ${styles.container}`}>
               {/* left side */} 
               <div className={`flexColStart ${styles.left}`}>
                    <img src='./logo2.png' alt='logo' width={120}/>
                    <span className={`secondaryText`}>
                        Our vision is to make all people <br/>
                        the best place to live for them
                    </span>
               </div>
               <div className={`flexColStart ${styles.right}`}>
                    <span className={`primaryText`}>Information</span>
                    <span className={`secondaryText`}>145 New York, FL 4571, USA</span>
                    <div className={`flexCenter ${styles.menu}`}>
                        <span>Property</span>
                        <span>Services</span>
                        <span>Products</span>
                        <span>About Us</span>
                    </div>
               </div>
            </div>
        </section>
    )
}