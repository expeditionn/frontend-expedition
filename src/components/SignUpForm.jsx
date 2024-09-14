import styles from '../components-css/signup.module.css';
import { IoClose } from "react-icons/io5";

function SignUpForm() {
  return (
    <div className = {styles.mainBody}>
      <IoClose className = {styles.closeBtn} />
      <p className = {styles.heading}>Just one last step and you're in!</p>
      <p className = {styles.subHeading}>Enter your details below to create an account</p>
      <form className = {styles.SignForm}>
        <div>
          <p className = {styles.fieldName}>Full Name*</p>
          <input placeholder = "" type = "name" className = {styles.field}/>
        </div>
        <div>
          <p className = {styles.fieldName}>Email*</p>
          <input placeholder = "Name@company.com" type = "email" className = {styles.field}/>
        </div>
        <div>
          <p className = {styles.fieldName}>Phone Number*</p>
          <input placeholder = "+91-" className = {styles.field}/>
        </div>
        <div>
          <p className = {styles.fieldName}>Password*</p>
          <input placeholder = "" type = "password" className = {styles.field}/>
        </div>
        <div className = {styles.signUpBtnBody}>
          <button className = {styles.signUpBtn}>Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm;