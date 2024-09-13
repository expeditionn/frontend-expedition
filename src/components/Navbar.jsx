import styles from '../components-css/navbar.module.css';
import { MdAirplanemodeActive } from "react-icons/md";

function Navbar()
{
  return (
    <div className = {styles.navBody}>
      <div className = {styles.logoDiv}>
        <MdAirplanemodeActive className = {styles.mainIcon} />
        <p className = {styles.brandName}>EXPEDIT<span className = {styles.onText}>ION</span></p>
      </div>
      <div className = {styles.navContent}>
        <div className = {styles.navText}>Home</div>
        <div className = {styles.navText}>Places</div>
        <div className = {styles.navText}>Tickets</div>
        <div><button className = {styles.signUpBtn}>Create account</button></div>
      </div>
    </div>
  )
}

export default Navbar;