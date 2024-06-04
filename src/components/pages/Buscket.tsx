import { useDispatch, useSelector } from "react-redux";
import BuscketProductCard from "../BuscketProductCard";
import { RootState } from "../../store/store";
import BuscketNull from "../BuscketNull";
import MainButton from "../MainButton";
import { HandleRemoveAllProducts } from "../../store/SliceStoreBuscket";
import { Link } from "react-router-dom";
import {CSSTransition} from 'react-transition-group'
import { useEffect, useState } from "react";


export default function Buscket(){
    const state = useSelector((state:RootState)=>state.StoreBuscket)
    let count = state.array.length? state.array.map(elem =>elem.count).reduce((sum, elem)=>sum+elem) : []
    const dispatch = useDispatch()
    const [show, setShow]=useState(false)

    useEffect(()=>{
        setShow(!show)
    },[])


    return(
        <CSSTransition in={show} timeout={300} classNames={`alert`}>
        <div className={`flex flex-col justify-around items-center w-[100%] min-h-[500px] bg-[#EDEDED]`}>
            <h1 className={`w-[80%] text-[2.5rem] font-bold text-start sm:text-center`}>Корзина</h1>
            <div className={`w-[80%] min-h-[300px] bg-white border-[3px]`}>
            {
                state.productsInBasket.length?

    state.productsInBasket.map((product, index)=>
  <BuscketProductCard product={product}/>
    )
    :
    <BuscketNull/>
}{
   state.productsInBasket.length?
   <>
   <div className={`flex w-[100%] h-[80px] border-[3px] border-t-0`}>
    <div  className={`w-[50%] h-[100%] flex justify-start  items-center ml-10`}>
<div className={`w-[42%] h-[60%] flex justify-center items-center`}
onClick={()=>dispatch(HandleRemoveAllProducts())}
>
    <MainButton textColor="[#C53720]" textContent="ОЧИСТИТЬ СПИСОК"/>
</div>
</div>
<div  className={`w-[50%] h-[100%] flex justify-around items-center`}>
<span className={`text-[#A5A5A5] font-bold`}>Итого {count} товара</span>
<span className={`text-[#1D1D1D] font-bold text-[2.0rem]`}>{[...state.array.map(el=>el.count * el.price)].reduce((sum, elem)=> sum+=elem)} руб.</span>
</div>
</div>
<div className={`w-[100%] h-[80px] border-[3px] border-t-0 flex justify-between items-center`}>
<Link to={`/Каталог`} className={`w-[20%] h-[60%] flex justify-center items-center ml-10`}>
    <MainButton textColor="[#C53720]" textContent="К ПОКУПКАМ"/>
</Link>
<Link to={'/Оформить_заказ'} className={`w-[20%] h-[60%] flex justify-center items-center mr-10`}>
    <MainButton textColor="[#C53720]" textContent="ОФОРМИТЬ ЗАКАЗ"/>
</Link>
</div>
</>
:
<>
</>
}

</div>

        </div>
        </CSSTransition>
    )
}