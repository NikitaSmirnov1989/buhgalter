export type ThemeType = "light" | "dark";

export type ThemeContextType = {
    theme: ThemeType;
    changeTheme: (theme: ThemeType) => void;
};