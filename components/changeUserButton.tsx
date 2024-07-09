"use client"

import { useEffect, useState } from "react"

export default function ChangeUser (){

    const [currentUser,setCurrentUser] = useState('')

    useEffect((()=>{
    const user = localStorage.getItem("user")
    setCurrentUser(user || 'user 1')

    }),[currentUser])

    return <div>
        <button className=' ml-2' disabled={currentUser=='user_1' ? true : false}onClick={()=>{
            localStorage.setItem('user','user_1')
            setCurrentUser('user_1')
        }}>user 1</button>
        <button className=' ml-2' disabled={currentUser=='user_2' ? true : false} onClick={()=>{
            localStorage.setItem('user','user_2')
            setCurrentUser('user_2')
        }}>user 2</button>
        <button className=' ml-2' disabled={currentUser == 'user_3' ? true : false} onClick={()=>{
            localStorage.setItem('user','user_3')
            setCurrentUser('user_3')
        }}>user 3</button>
    </div>
}