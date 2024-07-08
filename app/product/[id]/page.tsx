import SingleProduct from "@/components/singleProductPage"
import prisma from "@/database/db"


export default async function Page({ params }: { params: { id: string } }) {
    
    try {
        const productDetails = await prisma.pRODUCT.findFirst({
            where : {
                id : parseInt(params.id)
            },
            include : {
                category : true,
                reviws : true,
                _count:true,
                
            }
        })

        return <div>
            <SingleProduct
                name={productDetails!.title}
                price={productDetails!.price}
                description={productDetails!.description}
                brandName={productDetails!.brandName}
                reviews={productDetails!.reviws}
                categories={productDetails!.category}
            ></SingleProduct>
        </div>
    
    } catch (error) {
        console.log(error)
        return <div>some error occured</div>

    }
    
  }