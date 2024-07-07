import Image from "next/image"
import Link from "next/link";

export type category = {
    id : number,
    name : string
}

export interface itemCardProps {
    name : string,
    price : string,
    brand : string,
    categories : category[],
    link : string
}

export default function ProductCard({name,price,brand,categories,link}:itemCardProps){
    return <>
        <div className=" flex-col w-40 border-blue-800 border-4 m-3 p-2 rounded-xl border-double">
            
            <Link href={`/product/${link}`}>
                <Image src={"/test_image.jpg"} width={180} height={50} alt="cat image"></Image>
            </Link>

            <Link href={`/product/${link}`} className="flex justify-center">
                {name}
            </Link >
            <Link href={`/product/${link}`} className="flex justify-center">
                Rs. {price}
            </Link >
            <Link href={"/"} className="flex justify-center">
                {brand}
            </Link >
            <Link href={"/"} className="flex justify-center">
                {categories.map((category)=>category.name)}
            </Link >
            <div className="flex justify-center bg-yellow-300 rounded-lg">
                <button>buy now</button>
            </div>
            
            <div className="flex justify-center bg-slate-300 rounded-lg mt-1">
                <button>add to cart</button>
            </div>
        </div>
    </>
}