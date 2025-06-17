import testimonialCSS from './../Testimonial/Testimonial.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profile1 from './../../assets/profile1.jpg'
import profile2 from './../../assets/profile2.jpg'
import profile3 from './../../assets/profile3.jpg'

import 'swiper/css'
import { Autoplay } from 'swiper/modules'

function Testimonial () {
    return (
        <div className={`${testimonialCSS.Testimonial_Wrapper} section`}>
            <h2>Exceptional Journey&apos;s With Traveler.</h2>

            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            breakpoints={{
                0:{
                    slidesPerView:1
                },
                768:{
                    slidesPerView:2
                },
                1200:{
                    slidesPerView:3
                }
            }}
            autoplay={{
                delay: 1500,
            }}

                modules={[Autoplay]}
            className={testimonialCSS.swiper}>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile1} alt=""></img>
                            <div className={testimonialCSS.detail}>
                                <span>
                                    Francis
                                </span>
                                <div className={testimonialCSS.ratings}>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                    <i className="ri-star-line"></i>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto esse et dolore eveniet ducimus! Blanditiis, architecto fugiat.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile2} alt=""></img>
                            <div className={testimonialCSS.detail}>
                                <span>
                                    Adnhel
                                </span>
                                <div className={testimonialCSS.ratings}>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto esse et dolore eveniet ducimus! Blanditiis, architecto fugiat.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile1} alt=""></img>
                            <div className={testimonialCSS.detail}>
                                <span>
                                    Francis
                                </span>
                                <div className={testimonialCSS.ratings}>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                    <i className="ri-star-line"></i>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto esse et dolore eveniet ducimus! Blanditiis, architecto fugiat.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile3} alt=""></img>
                            <div className={testimonialCSS.detail}>
                                <span>
                                    Maben
                                </span>
                                <div className={testimonialCSS.ratings}>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto esse et dolore eveniet ducimus! Blanditiis, architecto fugiat.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial