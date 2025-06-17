import destinationCSS from './../Destinations/Destination.module.css'

import destination01 from './../../assets/Destination1.jpeg'
import destination02 from './../../assets/Destination2.jpeg'
import destination03 from './../../assets/Destination3.jpeg'
import destination04 from './../../assets/Destination4.jpeg'
import destination05 from './../../assets/Destination5.jpeg'
import destination06 from './../../assets/Destination6.jpeg'



 
function Destination () {
    return (
        <div className={`${destinationCSS.Destination_Wrapper} section`} id="populardestinations">
            <h2>
                Popular Destinations
            </h2>

            <div className={destinationCSS.DestinationCards}>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination01} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>Japan</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination02} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>New Zealand</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination03} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>Switzerland</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination04} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>Norway</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination05} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>Costa Rica</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination06} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>Iceland</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination