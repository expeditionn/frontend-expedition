import { FaRegCopyright } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
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
      <div className = {styles.body2}>
        <div className = {styles.logoDiv}>
          <MdAirplanemodeActive className = {styles.mainIcon} />
          <p className = {styles.brandName}>EXPEDIT<span className = {styles.onText}>ION</span></p>
        </div>
        <div className = {styles.footerTextBody}>
          <p className = {styles.footerText}>Home</p>
          <p className = {styles.footerText}>Places</p>
          <p className = {styles.footerText}>Tickets</p>
        </div>
        <div className = {styles.iconBody}>
          <p><FaGithub /></p>
          <p><FaLinkedinIn /></p>
          <p><MdOutlineMailOutline /></p>
        </div>
      </div>
      <div className = {styles.copyRightBody}>
        <p className = {styles.allRights}><FaRegCopyright className = {styles.copyRightIcon} /> 2024 Expedition, Inc. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;