"use client"

import getProductDetails from "@/actions/getProduct";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
    // const router = useRouter()
    // const route = router.query.id as string;
    // const id = parseInt(route)

    const [productDetails , setProductDetails] = useState<any>()

    useEffect(()=>{
        async function details() {
          const fetchedDetails = await getProductDetails(parseInt(params.id));
            setProductDetails(fetchedDetails)
        } 

        details()
    },[])

    return <div>
        {JSON.stringify(productDetails)}
    </div>
}