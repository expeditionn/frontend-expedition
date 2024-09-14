import Navbar from "./Navbar";
import Fort from '../assets/delhi-1.jpg';
import Gate from '../assets/india-gate.avif';
import styles from '../components-css/tickets.module.css';
import Red from '../assets/red-fort.jpg';
import data from '../data/sample.json';
import Footer from "./Footer";

function Tickets() {
  return (
    <div>
      <Navbar />
      <div className = {styles.mainBody}>
        <div className = {styles.imageBody}>
          <img src = {Red} width = "220px" height = "300px" alt = "decorative-image"/>
          <img src = {Gate} width = "350px" height = "300px" className = {styles.image2} alt = "decorative-image"/>
          <img src = {Fort} width = "250px" height = "400px" className = {styles.image3} alt = "decorative-image"/>
        </div>
        <div className = {styles.body2}>
          <select className = {styles.selectMenu}>
            <option>National Monuments</option>
            <option>Laser Shows</option>
            <option>Best Restaurants</option>
            <option>Movie Theatres</option>
          </select>
          <div className = {styles.ticketCards}>
            {data.map(info => {
              return (
                <div className = {styles.ticketCard}>
                  <div className = {styles.cardText}>
                    <p className = {styles.headingCard}>{info.title}</p>
                    <ul className = {styles.infoList}>
                      <li className = {styles.infoListItem}><span className = {styles.subHeading}>Description - </span>{info.description}</li>
                      <li className = {styles.infoListItem}><span className = {styles.subHeading}>City - </span>{info.place}</li>
                      <li className = {styles.infoListItem}><span className = {styles.subHeading}>Timings - </span>{info.time}</li>
                      <li className = {styles.infoListItem}><span className = {styles.subHeading}>Available Tickets - </span>{info.noOfTickets}</li>
                      <li className = {styles.infoListItem}><span className = {styles.subHeading}>Price - </span>{info.price}</li>
                    </ul>
                  </div>
                  <div className = {styles.btnDiv}>
                    <button className = {styles.bookBtn}>Book My Ticket</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Tickets;