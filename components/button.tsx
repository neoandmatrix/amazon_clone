"use client"

import { MouseEventHandler } from "react"

export default function Button({
    lable,
    isDisabled,
    onClick
}:{
    lable : string,
    isDisabled : boolean,
    onClick : () => void
}){
    
    return <button className="bg-cyan-400" disabled={isDisabled} onClick={onClick}>{lable}</button>
}

