import { HandySvg } from "handy-svg";
import { IProducts } from "../IProducts";
import MainButton from "./MainButton";
import svg1 from "../svg/main/buscketAdd.svg"; 
import svg2 from "../svg/main/buscketRemove.svg";
import { HandleAddProducts , HandleCountProducts, HandleRemoveProducts} from "../store/SliceStoreBuscket";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from 'react-transition-group';
import { HandleProductCardFullInfo } from "../store/SliceStoreProducts";
import { Link } from "react-router-dom";



type propsTypes = {
  product: IProducts;
  fullView: boolean;
};

export default function ProductsPreviewCard({ product, fullView }: propsTypes) {
  const state = useSelector((state: RootState)=>state.StoreBuscket.productsInBasket)
  const productFullCardObject =useSelector((state:RootState)=>state.storeProducts.ProductCardFullInfo) 
  const stateCount = useSelector((state: RootState)=>state.StoreBuscket)
  const countRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const countRefFull = useRef<HTMLDivElement>(null)
  const findResult = state.find(productBuscket => product.id === productBuscket.id)
  const trigger = state.filter(elem=>elem.id === product.id).length
  const [count, setCount]=useState<number>(stateCount.array.filter(element => element.id === product.id)[0]? stateCount.array.filter(element => element.id === product.id)[0].count : 1)
  const dispatch = useDispatch()
  const show = useSelector((state: RootState)=>state.switchFilter.DropDownParam.item.toLowerCase())
console.log(show)


  const HandleIncreaseCount = () =>{
if(count<10){
  setCount(prev => prev +1)
}
  }
  const HandleDecreaseCount = () =>{
    if(count>1){
    setCount(prev => prev -1)
      }
    }
    


  useEffect(()=>{
    function StartHandleCount(){
if(stateCount.array.filter(element => element.id === product.id)[0]){
  dispatch(HandleCountProducts({id:product.id, count: count}))
}
    }
    StartHandleCount()
   
  }, [count])




  
  return (
    <CSSTransition in={true} timeout={300} mountOnEnter classNames={`alert`}>
    <div
      className={` absolute transition-all duration-300 
        ${
          fullView
            ? "flex w-[90%] max-h-[450px] mt-2 mb-2 justify-between p-5 "
            : "flex-col w-[30%] min-h-[450px] max-h-[460px] p-5 pt-10 mr-3 ml-3 mb-5 sm:w-[90%] sm:h-[500px] "
        } 
        ${product.Availability ? " border-[#3CC051]" : "border-[#C53720]"}
          border-[3px] relative bg-white overflow-hidden`}
    >
      <div
        className={`w-[100px] h-[30px] absolute top-[0%] right-[0%] text-white text-center sm:w-[100%] sm:h-[30px] sm:font-medium sm:uppercase
            ${product.Availability ? "bg-[#3CC051]" : "bg-[#C53720]"}`}
      >
        {product.Availability ? "В наличии" : "Под заказ"}
      </div>

      <div
        className={`flex bg-cover bg-center bg-no-repeat m-auto
        ${fullView ? "w-[30%] h-[50%] ml-10 mr-10" : "w-[60%] h-[30%] sm:h-[40%]"}
        `}
        style={{
          backgroundImage: `url(${product.photo})`,
        }}
      >
        {" "}
      </div>
      <div
        className={` ${
          fullView ? "w-[40%] h-[80%] mt-5" : "w-[100%]  h-[60%] mt-2"
        }  flex-col    sm:flex sm:relative sm:items-center`}
      >
        <h2
          className={`  ${
            fullView ? "h-[30px] " : "h-[40px] sm:w-[80%] sm:h-[40px] sm:text-center sm:text-[1.3rem]"
          } text-[1.1rem]  font-medium mb-3  items-center whitespace-nowrap overflow-hidden text-ellipsis pr-2 align-middle sm:mb-0`}
        >
          {product.name}
        </h2>
        <div className={`sm:flex sm:w-[80%] sm:justify-center`}>
        <p
          className={`text-[#A5A5A5] text-[0.9rem] line-through font-bold sm:mr-2 sm:w-[40%] sm:text-[1.3rem]${
            fullView ? "hidden" : ""
          }
          ${product.priceSale ? '' : 'hidden'}`}
        >
          {product.priceSale ? product.price : ''} {!product.priceSale ? '' : 'руб.' } 
        </p>
        <p
          className={`w-[100%] text-[1.1rem] font-bold sm:w-[40%] sm:text-[1.3rem] ${
            fullView&&!product.priceSale ? "hidden" : ""
          }`}
        >
          {!product.priceSale ? product.price : product.priceSale } руб.
        </p>
        </div>
        
        <p
          className={`text-[0.75rem] text-[#A5A5A5] ${
            fullView ? "mb-2 w-[90%]" : "mt-1"
          }
          ${product.polarity? 'sm:w-[100%] sm:text-center' :'hidden'}`}
        >
          Цена действительна при сдаче старого аккумулятора аналогичной емкости
          в лом
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||product.Capacity? "hidden" : ""}`}>
          Емкость, Ач:
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.capacity}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.compound? "hidden" : ""}`}>
          Состав:
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.compound}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.ph? "hidden" : ""}`}>
          pH:
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.ph}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.pHValue? "hidden" : ""}`}>
          Водородный показатель:
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.pHValue}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.applicationMethod? "hidden" : ""}`}>
        Способ нанесения:
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.applicationMethod}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.application? "hidden" : ""}`}>
        Область применения:
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.application}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.typeChemicalGoods? "hidden" : ""}`}>
        Тип продукта:
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.typeChemicalGoods}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||product.fragrance!==undefined? "hidden" : ""}`}>
       Отдушка:
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.fragrance? 'да' : 'нет'}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.type? "hidden" : ""}`}>
          Тип:
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.type}
          </span>
        </p>
        
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.engineType? "hidden" : ""}`}>
          Тип двигателя:
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.engineType}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.Capacity? "hidden" : ""}`}>
          Объем, л:
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.Capacity}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView ||!product.startingСurrent? "hidden" : ""}`}>
          Пусковой ток, А:{" "}
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.startingСurrent}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.polarity ? "hidden" : ""}`}>
          Полярность:{" "}
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.polarity}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.terminals ? "hidden" : ""}`}>
          Клеммы:{" "}
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.terminals}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.Width ? "hidden" : ""}`}>
          Pазмеры (ДхШхВ), мм:{" "}
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.length}х{product.Width}х{product.Height}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView || !product.manufacturer? "hidden" : ""}`}>
          Производитель:{" "}
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.manufacturer}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!fullView||!product.weight? "hidden" : ""}`}>
          Bес, кг:{" "}
          <span className={`font-normal text-[#A5A5A5]`}>
            {" "}
            {product.weight}
          </span>
        </p>

        <div
          className={`w-[100%] h-[30%] flex  justify-around items-center relative ${
            fullView? "hidden" : ""
          }`}
        >
           


  <CSSTransition nodeRef={countRef} in={trigger? true : false} timeout={300} classNames="alert" unmountOnExit  >
  
  <div
  ref={countRef}
  className={`absolute left-[0%] flex justify-between items-center w-[70%] h-[35px] sm:h-[45px] sm:w-[80%] sm:text-[1.5rem] sm:left-[50%] sm:translate-x-[-50%] `}
>
  <div
    className={`flex justify-center items-center w-[30%] h-[100%] border-[3px]  border-[#A5A5A5] cursor-pointer text-[#A5A5A5] hover:text-white hover:bg-[#A5A5A5] transition-[background] duration-300`}
    onClick={()=>HandleDecreaseCount()}
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
 onClick={()=>HandleIncreaseCount()}
 >
    +
  </div>
</div>
</CSSTransition>

  
<CSSTransition nodeRef={buttonRef} in={trigger? false : true} timeout={100} classNames="alert" mountOnEnter unmountOnExit  >
<div ref={buttonRef} 
className={`absolute left-[0%] flex items-center w-[70%] h-[35px]  font-medium sm:h-[40px] sm:w-[80%] sm:left-[50%] sm:translate-x-[-50%]`}
onClick={()=>dispatch(HandleAddProducts(product))}
>
<MainButton textColor={`[#C53720]`} textContent={`В КОРЗИНУ`}/>
</div>
</CSSTransition>


          <div
            className={`absolute right-[0%] w-[23%] h-[35px] border-[3px] border-[#C53720] flex justify-center items-center cursor-pointer transition-[background] duration-200 sm:hidden
            ${findResult? 'bg-[#C53720]' : '' }`}
            onClick={()=>findResult? 
              dispatch(HandleRemoveProducts(product))
               : dispatch(HandleAddProducts(product))}
          >
            <HandySvg 
            src={findResult? svg2: svg1 } 
            width="20" height="20px" 
            fill={findResult? `#C53720` : 'white' }
             className = {`sm:h-[50px]`} />
          </div>
        </div>
        <div
          className={` flex w-[100%] h-[40px] sm:w-[80%]  ${
            fullView ? "hidden" : ""
          }`}
          onClick={()=>dispatch(HandleProductCardFullInfo(product))}
        >
          <MainButton
            textContent={`ПОДРОБНЕЕ`}
            textColor={`[#C53720]`}
            fontWeight={`bold`}
          />
        </div>
      </div>
      <div
        className={`flex flex-col w-[25%] h-[90%] mt-5 ${
          fullView ? "" : "hidden"
        }     `}
      >
        <p
          className={`  font-bold ${
            !fullView ? "hidden" : ""
          }
          ${product.priceSale? 'line-through text-[#A5A5A5]':'text-black text-[1.4rem] font-bold'}`
        }
        >
          {product.price} {product.priceSale? '' : 'руб.'}
        </p>
        <p
          className={`w-[100%] text-[1.4rem] font-bold ${
            !fullView||!product.priceSale ? "hidden" : ""
          }`}
        >
          {product.priceSale} руб.
        </p>
        <div
          className={`w-[100%] h-[30%] flex  justify-around items-center ${
            !fullView ? "hidden" : ""
          }`}
        >
          <CSSTransition nodeRef={countRefFull} in={trigger? true : false} timeout={300} classNames="alert"  unmountOnExit> 
          <div
          ref={countRefFull}
            className={`flex justify-between items-center w-[100%] h-[40px] `}
          >
            <div
              className={`flex justify-center items-center w-[30%] h-[100%] border-[3px]  border-[#A5A5A5] cursor-pointer text-[#A5A5A5] hover:text-white hover:bg-[#A5A5A5] transition-[background] duration-300`}
            onClick={()=>HandleDecreaseCount()}
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
           onClick={()=>HandleIncreaseCount()}
           >
              +
            </div>
          </div>
</CSSTransition>

        </div>
        <div className={`flex h-[40px] w-[100%] mb-3`}>
          <div
            className={`flex w-[70%] h-[100%%]  ${
              !fullView ? "hidden" : ""
            }`}
            onClick={()=>
              findResult? 
              dispatch(HandleRemoveProducts(product)) 
              : dispatch(HandleAddProducts(product))
}
          >
            <MainButton
              textContent={findResult? ' В КОРЗИНЕ': 'В КОРЗИНУ'}
              textColor={findResult? '[#FFFFFF]': '[#C53720]'}
              fontWeight={`bold`}
              bg={`${findResult? '#C53720': ''}`}
            />
          </div>
          <div
            className={`w-[30%] h-[40px] border-[3px] border-l-0 border-[#C53720] flex justify-center items-center cursor-pointer  transition-[background]
          ${ trigger? 'bg-[#C53720]': ''}`}
            onClick={()=>dispatch(HandleAddProducts(product))}
          >
            <HandySvg src={findResult? svg2 : svg1 } width="20" height="20px" fill={!findResult? 'white' : '#C53720'  }/>
          </div>
        </div>
        <Link to={product.manufacturer}
          className={`flex w-[100%] h-[40px]  ${
            !fullView ? "hidden" : ""
          }`}
          onClick={()=>dispatch(HandleProductCardFullInfo(product))}
        >
          <MainButton

            textContent={`ПОДРОБНЕЕ`}
            textColor={`[#C53720]`}
            fontWeight={`bold`}
          />
        </Link>
      </div>
    </div>
    </CSSTransition>
  );
}
