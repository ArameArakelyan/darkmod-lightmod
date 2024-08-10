import React, { useContext } from "react"
import { ThemeContext } from "./context"


function Header() {
    const { isDark, darkMode} = useContext(ThemeContext)
    return (
        <header className="header" style={{background:isDark?"#232730":"white", borderBottom:isDark?"1px solid white":"1px solid "}}>
            <div>
                <div className="logo">
                    <span className="logotext">Test Web</span>
                </div>
                <nav className="menu">
                    <ul style={{color:isDark?"white":"#4f5563"}}>
                       <li key={1}>Home</li>
                       <li key={2}>Our Projects</li>
                       <li key={3}>Blog</li>
                       <li key={4}>About</li>
                    </ul>
                </nav>
                <form className="searchForm">
                    <input type="text" />
                    <button style={{background:isDark?"white":"black", color:isDark?"#4f5563":"white"}}>Search</button>
                </form>
                <div className="darkMod">
                <button onClick={()=>{darkMode(!isDark)}}>
                        {isDark?"Light":"Dark"}
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header