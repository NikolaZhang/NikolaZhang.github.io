export function setVuetifyThemeMode() {
    const theme = window.localStorage.getItem("darkmode");
    if (theme === "on") {
         return true;
    } else if (theme === "off") {
        return false;
    } else {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
            .matches;
        return isDarkMode;
    }
}