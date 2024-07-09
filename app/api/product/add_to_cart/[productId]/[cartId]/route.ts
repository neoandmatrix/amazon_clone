import prisma from "@/database/db"
import { NextResponse } from "next/server"

type Params = {
    productId : string,
    cartId : string
}

export async function POST(request: Request,context: { params: Params }) {
    
    try {
    
        // when cart already exists just create a cart product entry connecting to that
    
        const updatedCart = await prisma.cART_PRODUCT.create({
            data : {
                quantity : 1,
                cartId : parseInt(context.params.cartId),
                productId : parseInt(context.params.productId)
            }
        }
    )

    if(updatedCart){
       return NextResponse.json({'message':'product added successfully','details' : updatedCart},{status : 200})
    }else{
        NextResponse.json({'message':'something went wrong'},{status:404})
    }
    
    } catch (error) {
        NextResponse.json({'message':'something went wrong'},{status:404})
    }
    
    
}