import styles from '../components-css/maincontent.module.css';
import { BsTicketPerforated } from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";

function HomePageMain() {
  return (
    <div className = {styles.textBody}>
      <button className = {styles.advertiseBtn}>TRAVEL TO YOUR FAVOURITE DESTINATION</button>
      <p className = {styles.heading1}>Expedition - Tourism</p>
      <p className = {styles.heading2}>Ultimate Travel Companion</p>
      <p className = {styles.text}>Discover top spots to visit, dine, and stay with real-time updates</p>
      <p className = {styles.text}>Book hotels and flights effortlessly with us</p>
      <p className = {styles.text}>Always stay in the loop with fresh updates and tips</p>
      <div className = {styles.buttons}>
        <button className = {styles.bookBtn}>Book a ticket <BsTicketPerforated className = {styles.ticketIcon} /></button>
        <button className = {styles.learnBtn}>Learn More <MdOutlineNavigateNext className = {styles.nextArrow}/></button>
      </div>
    </div>
  )
}

export default HomePageMain;