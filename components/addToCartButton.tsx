"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Button from "./button"

export default function AddToCartButton({
    productId
}:{
    productId : number
}){
    // will get from getCurrnetSession() if using next auth

    const [buttonState,setButtonState] = useState<boolean>(true)
    const [cartId,setCartId] = useState()
    
    useEffect(()=>{

        const loggedUser = localStorage.getItem("user")
        const userId = loggedUser?.split('_')[1]
    

        async function getUserDetails() {
            
            const response = await axios.get('http://localhost:3000/api/user/details/'+userId)

            const userCurrentCartDetails = response.data.cart_details.products

            setCartId(response.data.cart_details.id)

            const alreadyInCart = userCurrentCartDetails.find(function(product:any){return parseInt(product.productId) == productId})

            //console.log(userCurrentCartDetails)
            
            console.log(alreadyInCart)

            if (alreadyInCart) {
                setButtonState(true)
            }else{
                setButtonState(false)
            }

        }

        getUserDetails()
    },[])

   async function handleAddToCart() {
        //buttonState.current = true
        console.log("button active")
        const {data , status} = await axios.post('http://localhost:3000/api/product/add_to_cart/'+ productId + '/' + cartId)
        if(status != 200){
             setButtonState(false)
             console.log(data)
        }else{
            console.log(data)
            setButtonState(true)
        }
    }
    
    return <Button lable={buttonState ? 'in cart' : 'add to cart'} isDisabled={buttonState} onClick={handleAddToCart}/>
}