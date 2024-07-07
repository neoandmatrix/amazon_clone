import Dropdown from "./dropDown";
import PricingSlider from "./pricingSlider";

export default function FilterSortBar(){

    return <>
        <div className="flex-col">
        <Dropdown itemsName={[{id : 1,value : "item 1"},{id : 2 , value : "item 2"}]} lable="categories" buttonText="log value"></Dropdown>
        <PricingSlider></PricingSlider>
        </div>
    </>
}