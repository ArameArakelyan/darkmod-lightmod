import React, { createContext, useState } from "react";

const ThemeContext = createContext()

function ThemeProvider(props) {
    let [isDark, setIsDark] = useState(false)
    function darkMode() {
        setIsDark(!isDark)
    }
    return(
        <div>
            <ThemeContext.Provider value={{isDark, darkMode}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
};

export {ThemeContext, ThemeProvider};