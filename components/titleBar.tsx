import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link"

export default function AppBar(){
    return <>
       <div className="flex justify-between font-extrabold text-2xl w-full bg-slate-300 text-red-600 sticky">
            <Link className=" ml-4" href={"/"}>AMAZON</Link>
            <div className=" mr-4 mt-1">
                <Link href={"/cart"}>
                    <FaShoppingCart />
                </Link> 
            </div>
        </div> 
        
    </>
}