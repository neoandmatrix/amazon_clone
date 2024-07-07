"use server"

import prisma from "@/database/db"

export default async function getProductDetails(id : number) {
    const product = await prisma.pRODUCT.findFirst({
        where : {
            id : id
        },
        include : {
            category : true
        }
    })

    return product;

}