import ProductCard from "@/components/productCard";
import prisma from "@/database/db";

export default async function AllProducts() {
    const products = (await prisma.pRODUCT.findMany({
        include : {
            category : true
        }
    }));
    return<div className="grid grid-cols-2 lg:grid-cols-3">
    {products.map((product)=>{
        return <ProductCard key={product.id} name={product.title} price={product.price.toString()} brand={product.brandName} categories={product.category} link={`${product.id}`}></ProductCard>
    })}
</div>
}