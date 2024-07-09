'use client'

import axios from "axios"
import { useEffect, useState } from "react"

export default function Cart(){

    const [cartDetails,setCartDetails] = useState()

    useEffect(()=>{
        const loggedUser = localStorage.getItem("user")
        const userId = loggedUser?.split('_')[1]
    

        async function getUserDetails() {
            
            const response = await axios.get('http://localhost:3000/api/user/details/'+userId)

            const userCurrentCartDetails = response.data.cart_details

            setCartDetails(userCurrentCartDetails)
        
        }

        getUserDetails()
    },[])

    return <>
        <div>
            {JSON.stringify(cartDetails)}
        </div>
    </>
}