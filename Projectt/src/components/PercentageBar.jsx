import styles from "./PercentageBar.module.css";
import { CiCirclePlus } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { FaMountain } from "react-icons/fa6";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker } from "react-icons/gi";

//,WiHumidity,FaWind,FaWind,FaMountain,FaTemperatureHigh

const PercentageBar = (props) => {
  //Here I need to add a state value using useReducer to the div with
  //number class
  
  const icon = ()=>{
    switch(props.Percentage.symbol) {
      case "°C":
        return(
          <div className={styles.icon}>
          <FaTemperatureHigh/>
          </div>
        );
        
      case "%":
        return(
          <div className={styles.icon}>
          <WiHumidity/>
          </div> 
        );
        
      case "ppm":
        return(
          <div className={styles.icon}><FaWind/></div>
          
        );
        
      case "Pa":
        return(
          <div className={styles.icon}><GiPressureCooker/></div>
          
        );
        
      case "m":
        return(
          <div className={styles.icon}><FaMountain/></div>
          
        );
        
      default:
        // code block
    }
  }

  if(props.Percentage.final == true)
  {
    return(
    <div className={styles.percentage}>
      <CiCirclePlus size={35}/>
    </div>
  );
  }
  else{
  return (
    <div className={styles.percentage}>
      {icon()}
      <div className={styles.title}>{props.Percentage.title}</div>
      <div className={styles.number}>{props.Percentage.val}{props.Percentage.symbol}</div>
      <div className={styles.percentage_bar}>
        <div className={styles.percent}></div>
      </div>
    </div>
  );
}
};

export default PercentageBar;
