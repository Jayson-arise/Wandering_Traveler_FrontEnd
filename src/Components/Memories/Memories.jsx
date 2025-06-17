import memoriesCSS from './../Memories/Memories.module.css';

import MemoriesImg1 from './../../assets/TravelerMemo1.jpg'
import MemoriesImg2 from './../../assets/TravelerMemo2.jpg'
import MemoriesImg3 from './../../assets/TravelerMemo3.jpg'
import MemoriesImg4 from './../../assets/TravelerMemo4.jpg'
import MemoriesImg5 from './../../assets/TravelerMemo5.jpg'
import MemoriesImg6 from './../../assets/TravelerMemo7.jpg'
import MemoriesImg7 from './../../assets/TravelerMemo6.jpg'

function Memories () {

    return (

        <div className={`${ memoriesCSS.Memories_wrapper } section`} id="memories">
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg1} alt="MemoriesImg" />

                <div className={memoriesCSS.content}>
                    <h3>Small Groups Departures</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg2} alt="MemoriesImg" />

                <div className={memoriesCSS.content}>
                    <h3>Affordable Dreams</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg3} alt="MemoriesImg" />

                <div className={memoriesCSS.content}>
                    <h3>Undiscover Tours</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg4} alt="MemoriesImg" />

                <div className={memoriesCSS.content}>
                    <h3>Let Our Experts Plan <br /> Your 2025 Journey</h3>
                    <button>View Tours</button>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg5} alt="MemoriesImg" />

                <div className={memoriesCSS.content}>
                    <h3>Religious Tours</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg6} alt="MemoriesImg" />

                <div className={memoriesCSS.content}>
                    <h3>Solo Travel</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg7} alt="MemoriesImg" />

                <div className={memoriesCSS.content}>
                    <h3>Private Touring</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
        </div>
    )
}

export default Memories