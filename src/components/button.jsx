import { useState } from "react"

export default function Button({ darkMode, hexcode, onClick}){

    return(
        <button className={darkMode ? "dark" : ""} onClick={onClick}>{hexcode}</button>
    )
}