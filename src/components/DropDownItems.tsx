import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"

import { HandleSwitchFilterDropDownIndex } from "../store/SliceSwitchFilter"
import { CSSTransition } from "react-transition-group"

type propsTypes = {
index: number
item: string
itemName: string
}

export default function DropDownItems({index, item, itemName}: propsTypes){
    const state = useSelector((state: RootState)=> state)
    const dispatch =useDispatch()
    
    return(
   
<li  key={index}  className={` items-center w-[100%] min-h-[50px] hover:bg-[#C53720] list-none text-white pl-5 cursor-pointer uppercase pr-5`}
onClick={()=>{

    dispatch(HandleSwitchFilterDropDownIndex(item.toLowerCase()))
    }}
>
  {itemName==='АККУМУЛЯТОРЫ'? 'АКБ': itemName} {item}
</li>
    )
}