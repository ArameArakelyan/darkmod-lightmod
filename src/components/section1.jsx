import React, { useContext } from "react";
import { ThemeContext } from "./context";

function Section1() {
    const {isDark ,darkMode} = useContext(ThemeContext)
    return(
        <section className="section1" style={{background:isDark?"#232730":"white"}}>
            <div>
                <div className="title">
                    <p className="logotext">Test Web</p>
                    <h3 style={{color:isDark?"white":"black"}}>Welcome our new Web</h3>
                    <p style={{color:isDark?"white":"black"}}>This is our new web page</p>
                </div>
            </div>
        </section>
    )
}

export default Section1