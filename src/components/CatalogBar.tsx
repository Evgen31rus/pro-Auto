import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import LoadingText from "./LoadingText"
import ProductsPreviewCard from "./ProductsPreviewCard"

type propsTypes ={
    stateViow: boolean
}
export default function CatalogBar({stateViow}:propsTypes){


    let state = useSelector((state:RootState)=>state)



    return(
        <div className={` w-[70%] h-[90%] flex justify-center items-start sm:w-[100%]`}>
{
    !state.storeProducts.products.length?

                    <LoadingText />

    :
    <div className={`w-[100%] h-[100%] flex flex-wrap relative sm:justify-center sm:items-center`}>
{
     state.storeProducts.products
     .filter(product => product.category.toLowerCase()==state.switchFilter.DropDownParam.item
     ||product.manufacturer.toLowerCase()==state.switchFilter.DropDownParam.item)
     
     .map((product, index) =>
        <ProductsPreviewCard product={product} fullView={stateViow}/>
        )
}
    </div>
   

}



        </div>
    )
}