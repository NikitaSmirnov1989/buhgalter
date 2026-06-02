import React, {createContext, useState, useContext} from "react";
import { ThemeType, ThemeContextType } from "../types/theme";

export const ThemeContext = createContext<ThemeContextType | null>(null);

/*Функция помощник для использования контекста*/
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("Error use");
    };
    return context;
}

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<ThemeType>("light");

    const changeTheme = (theme: ThemeType) => {
        setTheme(theme === "light" ? "dark" : "light");
        return;
    };

    return  <ThemeContext.Provider value={{theme, changeTheme}}>
                {children}
            </ThemeContext.Provider>

}

export default ThemeProvider;