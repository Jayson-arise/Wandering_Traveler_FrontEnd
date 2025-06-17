import headerCSS from './Header.module.css'

import {Swiper,  SwiperSlide } from 'swiper/react'
import 'swiper/css'

import {Autoplay} from 'swiper/modules'

import destinationImg1 from './../../assets/Bohol.jpg'
import destinationImg2 from './../../assets/Japan.jpg'
import destinationImg3 from './../../assets/Italy.jpg'
import destinationImg4 from './../../assets/Singapore.jpg'
import destinationImg5 from './../../assets/Switzerland.jpg'
import destinationImg6 from './../../assets/Taiwan.jpg'

function Header() {
    return(
        <div className={`${headerCSS.header_wrapper} section`} id="home">
            <div className={headerCSS.imageContainer}>
                <h2>Explore The World <br /> And Make Memories</h2>
            </div>

            <Swiper 
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay={
                    {
                        delay: 1500,
                    }
                }
                breakpoints={
                    {
                        0:{
                            slidesPerView: 1,
                        },
                        500:{
                            slidesPerView: 2,
                        },
                        768:{
                            slidesPerView: 3,
                        },
                        1024:{
                            slidesPerView: 4,
                        },
                        1200:{
                            slidesPerView: 5,
                        }
                    }
                }
                modules={[Autoplay]}
            
            className={headerCSS.swiper}>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg1} alt=""/>
                        <h3>Philippines</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg2} alt=""/>
                        <h3>Japan</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg3} alt=""/>
                        <h3>Italy</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg4} alt=""/>
                        <h3>Singapore</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg5} alt=""/>
                        <h3>Switzerland</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg6} alt=""/>
                        <h3>Taiwan</h3>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Header