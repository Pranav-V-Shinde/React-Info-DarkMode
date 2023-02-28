import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [dark,setDark]=React.useState("")
    function toggle(){
        setDark(prevState=>(prevState=!prevState))
    }
    return (
        <div className="container">
            <Navbar toggleDarkMode={toggle} darkMode={dark}/>
            <Main darkMode={dark}/>
        </div>
    )
}