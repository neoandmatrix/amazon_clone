import { CategoryType, ReviewType } from "@/utils/types";
import Link from "next/link";

export default function SingleProduct({
    name,
    price,
    description,
    brandName,
    reviews,
    categories
}:{
    name : string,
    price : number,
    description : string,
    brandName : string,
    reviews? : ReviewType[],
    categories? : CategoryType[]
}){
    return <div>
        <h3>{name}</h3>
        <h4 className=" font-bold">Rs.{price}</h4>
        <p>{description}</p>
        <Link href={"/"}>Brand :- {brandName}</Link>
        {
            reviews ? reviews.map((review)=>{
                return <div key={review.id}>
                    {review.reviewText}
                    {review.userId}
                    <hr/>
                </div>
            }) : <div>no reviews yet</div>
        }
        {
            categories ? categories.map((category)=>{
                return <span  className="ml-2" key={category.id}>
                  categories : <Link href={"/"}> {category.name}</Link>
                </span>
            }) : <div/>
        }
    </div>
}