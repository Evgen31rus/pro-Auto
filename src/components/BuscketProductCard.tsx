import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IProducts } from "../IProducts";
import { HandySvg } from "handy-svg";
import svg from '../svg/close.svg'
import { HandleRemoveProducts, HandleCountProducts } from "../store/SliceStoreBuscket";
import { useEffect, useState } from "react";
import {CSSTransition} from 'react-transition-group'

type propsTypes = {
  product: IProducts;
};

export default function BuscketProductCard({ product }: propsTypes) {
  const state = useSelector(
    (state: RootState) => state
  );

  const st = useSelector(
    (state: RootState) => state.StoreBuscket.array
  );
  const [count, setCount]=useState<number>(state.StoreBuscket.array.filter(elem => elem.id===product.id)[0].count)
  const [show, setShow]=useState(false)

  useEffect(()=>{
      setShow(!show)
  },[])
  const HandleIncreaseCount = () =>{
if(count<10){
  setCount(prev => prev += 1)
}
  }
  const HandleDecreaseCount = () =>{
    if(count>1){
    setCount(prev => prev -= 1)
      }
    }
    
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(HandleCountProducts({id:product.id, count:count}))
  }, [count])

  return (
    
    <div
      className={`flex w-[100%] h-[200px]  border-[3px] items-center justify-between relative pl-5`}
    >
      <div  onClick={()=>dispatch(HandleRemoveProducts(product))}>
      <HandySvg src={svg} width={`20px`}  height={`20px`} className={`absolute right-[1%] top-[5%] cursor-pointer`} />
      </div>
      
        <>
          <div
            className={`flex  w-[19%] h-[50%] bg-cover bg-center m-auto`}
            style={{
              backgroundImage: `url(${product.photo})`,
            }}
          ></div>
          <div
            className={`flex flex-col w-[30%] h-[100%] items-center justify-center ml-3 text-center`}
          >
            <h1 className={`text-[1.5rem] text-[#C53720] font-medium mb-3`}>
              {product.name}
            </h1>
            <div
              className={`flex justify-center items-center w-[100px] h-[35px] bg-[#3CC051] text-white`}
            >
              {product.Availability ? "В наличии" : "Под заказ"}
            </div>
          </div>
          <div
            className={`flex flex-col w-[25%] h-[100%] items-center justify-center`}
          >
            <h2 className={`text-[1.5rem] text-black font-medium mb-3`}>
              {product.price} руб.
            </h2>
            <h2
              className={`text-[1.2rem] text-[#A5A5A5] font-medium mb-3 line-through`}
            >
              {product.priceSale} руб.
            </h2>
          </div>

          <div
            className={`flex justify-between items-center w-[20%] h-[45px] sm:h-[20px]`}
          >
            <div
              className={`flex justify-center items-center w-[30%] h-[100%] border-[3px]  border-[#A5A5A5] cursor-pointer text-[#A5A5A5] hover:text-white hover:bg-[#A5A5A5] transition-[background] duration-300`}
            onClick={()=>{
              HandleDecreaseCount()
              
              }}
            >
              -
            </div>
            <input
              type="text"
              value={count}
              className={` w-[40%] h-[100%] border-[3px] border-l-[0px] border-r-[0px] border-[#A5A5A5] text-center text-[#A5A5A5] outline-0`}
            />
            <div
              className={`flex justify-center items-center w-[30%] h-[100%] border-[3px] border-[#A5A5A5] cursor-pointer text-[#A5A5A5] hover:text-white hover:bg-[#A5A5A5] transition-[background] duration-300 `}
              onClick={()=>{
                HandleIncreaseCount()
                }}
            >
              +
            </div>
          </div>
          <div
            className={`flex flex-col w-[25%] h-[100%] items-center justify-center`}
          >
            <h2 className={`text-[1.5rem] h-[17%] text-black font-medium mb-3`}>
              {product.price*count} руб.
            </h2>
       
          </div>
        </>
      
    </div>

  );
}
