import prisma from "@/database/db"
import { NextResponse } from "next/server"

type Params = {
    id: string
  }

export async function GET(request: Request,context: { params: Params }) {

    const userId = context.params.id
    console.log(userId)

    if (true) {
        const foundUser = await prisma.uSER.findFirst({
            where : {
                id : parseInt(userId)
            },include : {
                cart : true,
                wishlist : true,
                reviews : true
            }
        })

        const foundUserCart = await prisma.cART.findFirst({
            where : {
                id : foundUser!.cart!.id
            },include : {
                products : true
            }
        })
        
        if (foundUser) {
            
        return NextResponse.json({'user_Details' : foundUser,'cart_details' : foundUserCart})
        }else {
            return NextResponse.json({error : 'internal error'},{status : 500 })
        }
    }
}