"use client"

import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Searchbar(){
    
    const [searchValue,setSearchValue] = useState<string | null>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    function focusSearchField() {
         searchRef.current?.focus()
    }

    return <div className="flex">

        <input className="border-2 border-red-300 mr-2 rounded-md pl-2" type="string" onChange={(e)=>{
            setSearchValue(e.target.value)
        }} placeholder="search product"
        onKeyDown={(e)=>{
            if (e.key == 'Enter') {

                // #*# do thi api call and migrate to that page
                console.log(searchValue)
            }
        }}
        ref={searchRef}
        ></input>

        <button onClick={()=>{
            if (searchValue == null || searchValue == "") {
                focusSearchField()
                console.log("focused")
            } else {
                console.log(searchValue)
                // #*# do thi api call and migrate to that page
            }
        }} className="bg-slate-200">
        <FaSearch />
        </button>

    </div>
}