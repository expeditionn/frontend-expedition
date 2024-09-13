import styles from '../components-css/whyneed.module.css';
import { BiCameraMovie } from "react-icons/bi";
import { MdDinnerDining } from "react-icons/md";
import { GiLaserSparks } from "react-icons/gi";
import { MdOutlineFestival } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";
import { FaPersonRunning } from "react-icons/fa6";

function WhyYouNeed() {
  return (
    <div className = {styles.mainBody}>
      <p className = {styles.heading}>Why do you need Expedition to <span>plan your travel</span></p>
      <div className = {styles.cardsBody}>
        <div className = {styles.card}>
          <BiCameraMovie className = {styles.cardIcon} />
          <p className = {styles.cardText}>Movie Shows</p>
        </div>
        <div className = {styles.card}>
          <MdDinnerDining className = {styles.cardIcon}/>
          <p className = {styles.cardText}>Book my dining table</p>
        </div>
        <div className = {styles.card}>
          <GiLaserSparks className = {styles.cardIcon}/>
          <p className = {styles.cardText}>Laser Shows</p>
        </div>
        <div className = {styles.card}>
          <MdOutlineFestival className = {styles.cardIcon}/>
          <p className = {styles.cardText}>College Fests</p>
        </div>
        <div className = {styles.card}>
          <GiPalmTree className = {styles.cardIcon}/>
          <p className = {styles.cardText}>Famous Landmarks</p>
        </div>
        <div className = {styles.card}>
          <FaPersonRunning className = {styles.cardIcon}/>
          <p className = {styles.cardText}>Marathons</p>
        </div>
      </div>
      <div className = {styles.infoBody}>
        <p className = {styles.infoHeading}> - Book Hotels -</p>
        <ul className = {styles.infoList}>
          <li className = {styles.infoItem}>Catch the latest movie deals in your city—always fresh, always current, always affordable!
          </li>
          <li className = {styles.infoItem}>Save big on movie nights! Get the best local theater deals with up-to-date ticket info at unbeatable prices.</li>
        </ul>
      </div>
    </div>
  )
}

export default WhyYouNeed;