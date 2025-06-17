import aboutCSS from './../About/About.module.css'

import  aboutImg from './../../assets/AboutBg.jpg'
function About () {
    return (
        <div className={`${aboutCSS.about_wrapper} section`} id="about">
            <div className={aboutCSS.about_image}>
                <img src={aboutImg} alt="about-img" />
            </div>
            <div className={aboutCSS.about_content}>
                <h2>Discover Organized <br /> Adventures, the<br /> 
                    Ultimate Travel Hack
                </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odio non reiciendis quo, reprehenderit eos vitae obcaecati molestias itaque possimus.</p>

                <div className={aboutCSS.about}>
                    <p><i className="ri-building-4-line"></i> Accommodation</p>
                    <p><i className="ri-car-line"></i> Transportation Allowance</p>
                    <p><i className="ri-magic-line"></i> Exclusive Experiences</p>
                    <p><i className="ri-instance-line"></i> Local Recommendations</p>
                    <p><i className="ri-pin-distance-line"></i> Personalized Trip Craft</p>
                    <p><i className="ri-phone-line"></i> 27/7 Support</p>
                </div>
            </div>
        </div>
    )
}
export default About