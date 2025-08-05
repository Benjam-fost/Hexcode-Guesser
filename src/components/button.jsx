import { useState } from "react"

export default function Button({ hexcode, onClick}){

    return(
        <button onClick={onClick}>{hexcode}</button>
    )
}