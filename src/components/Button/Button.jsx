import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const Button = ({ children, type, link , clickHandler}) => {
  const navigate = useNavigate()
  if (type) {
    return (
      <button onClick={link? ()=> navigate(link):()=>clickHandler()} className={`${styles.btn} ${styles.btnPrimary}`}>
        {children}
        <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 Z"></path>
        </svg>
      </button>
    );
  } else {
    return (
      <button onClick={link?()=> navigate(link):()=>clickHandler()} className={`${styles.btn} ${styles.btnSecondary}`}>
        {children}
      </button>
    );
  }
};

export default Button;
