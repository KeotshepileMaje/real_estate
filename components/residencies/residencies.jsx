/* eslint-disable */

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

import styles from './residencies.module.css'
import data from "@/utils/slider";
import sliderSettings from '@/utils/common';

export default function Residencies () {
    return (
        <section className={`${styles.wrapper}`}>
            <div className={`paddings innerWidth ${styles.container}`}>
                <div className={`flexColStart ${styles.head}`}>
                    <span className={`orangeText`}>Best Choices</span>
                    <span className={`primaryText`}>Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data.map((resident, i) => (
                            <SwiperSlide key={i}>
                                <div className={` flexColStart ${styles.card}`}>
                                    <img src={resident.image} alt='home'/>
                                    <span className={`secondaryText ${styles.price}`}>
                                        <span style={{color: 'orange'}}>$</span>
                                        <span>{resident.price}</span>
                                    </span>
                                    <span className={`primaryText`}>{resident.name}</span>
                                    <span className={`secondaryText`}>{resident.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

const SliderButtons = () => {
    const swiper = useSwiper()

    return (
        <div className={`flexCenter ${styles.buttons}`}>
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}