import styles from "./Theme.module.css";
import { Input } from "../../ui";
import { useThemeContext } from "../../../context/themeContext";
import { ThemeType } from "../../../types/theme";


export default function Theme(){
    const {theme, changeTheme} = useThemeContext();
    return  <div className={styles.theme}>
                <Input
                    value={theme}
                    type="checkbox"
                    id="theme"
                    onChange={(e) => changeTheme(e.target.value as ThemeType)}
                    className={styles.input}
                    checked={theme === "dark"}
                    /> 
                {/* <input id="theme" type="checkbox" className={styles.input}/> */}
                <label htmlFor="theme" className={styles.label}></label>
            </div>
}
