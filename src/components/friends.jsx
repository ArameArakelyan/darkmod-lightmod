import { useContext, useState } from "react";
import { ThemeContext } from "./context";

function Friends() {
    const {isDark}= useContext(ThemeContext)
    const list = [
        {id:1, name:"John"},
        {id:2, name:"Jim"},
        {id:3, name:"Angel"},
        {id:4, name:"Alice"},
        {id:5, name:"David"},
    ]
    return(
        <div className="Friends" style={{background:isDark?"#232730":"white"}}>
            <div className="friCont">
                <h2 style={{color:isDark?"white":"black"}}>Your Friends</h2>
                <ul className="friendList">
                    {list.map((e)=>{
                        return (<li style={{border: isDark? "1px solid white":"1px solid ", color:isDark?"white":"black"}} key={e.id}>{e.name}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Friends