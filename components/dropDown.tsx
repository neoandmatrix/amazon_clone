"use client"

import { useState } from "react"

interface dropDownItems {
    itemsName : {id : number,value : string}[],
    lable : string,
    buttonText : string
}

export default function Dropdown({itemsName,lable,buttonText}:dropDownItems) {

    const Items = itemsName
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [selectedItem,setSelectedItem] = useState<string>(Items[0].value)

    const toggle = () =>{
        setIsOpen(value => !value)
    }

    return <>
        <div>
                <div> {lable} </div>
                <button onClick={toggle} className=" hover:text-blue-500">{selectedItem}</button>
                <button onClick={toggle}>{isOpen ? "▲" : "▼"}</button>
                <div className={`w-16 z-30 ${isOpen ? 'border-black border-2':''}`}>
                    {isOpen ? Items.map((e)=>{
                        return <div key={e.id} > <button  className="hover:text-green-400" onClick={()=>{setSelectedItem(e.value)
                       toggle() 
                    }}>{e.value}</button></div>}): ""}
                </div>
                <button className="bg-slate-300" onClick={()=>{console.log(selectedItem)}}>{buttonText}</button>
        </div>
    </>
}