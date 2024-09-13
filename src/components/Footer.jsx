import { FaRegCopyright } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";
import { MdAirplanemodeActive } from "react-icons/md";
import styles from '../components-css/footer.module.css';
function Footer() {
  return (
    <div className = {styles.mainBody}>
      <div className = {styles.body1}>
        <p className = {styles.heading1}>Just one last step and you're in!</p>
        <p className = {styles.heading2}>Enter your details to use our platform.</p>
        <button className = {styles.signUpBtn}>Create your account <GiFallingStar className = {styles.signupIcon}/></button>
      </div>
      <hr className = {styles.hRule} />
      <div>
        <div className = {styles.logoDiv}>
          <MdAirplanemodeActive className = {styles.mainIcon} />
          <p className = {styles.brandName}>EXPEDIT<span className = {styles.onText}>ION</span></p>
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <p>Home</p>
          <p>Places</p>
          <p>Tickets</p>
        </div>
      </div>
      <p><FaRegCopyright /> 2024 Expedition, Inc. All rights reserved.</p>
    </div>
  )
}

export default Footer;