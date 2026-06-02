import styles from "./Logo.module.css";

export default function Logo(){
    return  <div className={styles.logo}>
                <span>Славороссова</span>
                <span className={styles.logo_line}></span>
                <span>Виктория</span>
            </div>
}