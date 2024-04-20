import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";
import image from "../../assets/AgroWeatherLogo.jpg";

const Header = () => {

const navLinkClass = ({isActive}) => {
    return{
        textdecoration: isActive ? '' : 'underline',
    }
}

  return (
    <ul className={styles.Header}>
      <li className={styles.header_buttons}><NavLink to='/' className={navLinkClass} >About</NavLink></li>
      <li className={styles.header_buttons}><NavLink to='/Dashboard'>Dashboard</NavLink></li>
      <li className={styles.header_buttons}><NavLink to='/Technology'>Technology</NavLink></li>
      <li className={styles.header_symbols}>
        <a href="/">
          <img src={image} alt="AgroWeather" width="" height="120px" />
        </a>
      </li>
      <li className={styles.header_buttons}>Venues</li>
      <li className={styles.header_buttons}>Careers</li>
      <li className={`${styles.header_buttons} ${styles.git}`}>Get In Touch</li>
    </ul>
  );
};

export default Header;
