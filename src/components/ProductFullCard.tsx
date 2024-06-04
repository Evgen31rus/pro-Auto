
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { HandleAddProducts, HandleRemoveProducts } from "../store/SliceStoreBuscket"
import MainButton from "./MainButton"





export default function ProductFullCard(){
  const product = useSelector((state: RootState)=>state.storeProducts.ProductCardFullInfo)
  const state = useSelector((state: RootState)=>state.StoreBuscket.productsInBasket)
  const findResult = state.find(productBuscket => product?.id === productBuscket.id)
  const dispatch = useDispatch()

    return(
<div className={` w-[80%] min-h-[300px] border-[2px] flex items-center justify-around  bg-white sm:w-[90%] sm:flex-col sm:h-[500px] pl-2 pr-2`}>

<div className={`w-[30%] h-[400px] bg-contain bg-center bg-no-repeat sm:w-[50%]`}
style={{
    backgroundImage: `url(${product?.photo})`
}}
></div>

<div className={`w-[60%] h-[90%] flex flex-col justify-around sm:w-[90%] sm:items-start`}>

<h2
          className={` text-[1.1rem]  w-[100%] font-medium mb-3  items-center whitespace-nowrap overflow-hidden text-ellipsis pr-2 align-middle sm:mb-0`}
        >
          {product?.name}
        </h2>
        <div className={`sm:flex sm:w-[100%]`}>
        <p
          className={`text-[#A5A5A5] text-[0.9rem] line-through font-bold sm:mr-2 sm:w-[30%]`}
        >
          {product?.priceSale ? product?.price : ''} {!product?.priceSale ? '' : 'руб.' } 
        </p>
        <p
          className={`w-[100%] text-[1.1rem] font-bold ${
           !product?.priceSale ? "hidden" : ""
          }`}
        >
          {!product?.priceSale ? product?.price : product?.priceSale } руб.
        </p>
        </div>
        
        <p
          className={`text-[0.75rem] text-[#A5A5A5]
          ${product?.polarity? '' :'hidden'}`}
        >
          Цена действительна при сдаче старого аккумулятора аналогичной емкости
          в лом
        </p>
        <p className={`font-bold text-[0.9rem]  ${product?.Capacity? "hidden" : ""}`}>
          Емкость, Ач:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.capacity}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.compound? "hidden" : ""}`}>
          Состав:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.compound}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.ph? "hidden" : ""}`}>
          pH:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.ph}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.pHValue? "hidden" : ""}`}>
          Водородный показатель:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.pHValue}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.applicationMethod? "hidden" : ""}`}>
        Способ нанесения:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.applicationMethod}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.application? "hidden" : ""}`}>
        Область применения:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.application}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.typeChemicalGoods? "hidden" : ""}`}>
        Тип продукта:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.typeChemicalGoods}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${product?.fragrance!==undefined? "hidden" : ""}`}>
       Отдушка:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.fragrance? 'да' : 'нет'}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.type? "hidden" : ""}`}>
          Тип:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.type}
          </span>
        </p>
        
        <p className={`font-bold text-[0.9rem] ${!product?.engineType? "hidden" : ""}`}>
          Тип двигателя:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.engineType}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.Capacity? "hidden" : ""}`}>
          Объем, л:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.Capacity}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.startingСurrent? "hidden" : ""}`}>
          Пусковой ток, А:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.startingСurrent}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.polarity ? "hidden" : ""}`}>
          Полярность:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.polarity}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.terminals ? "hidden" : ""}`}>
          Клеммы:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.terminals}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.Width ? "hidden" : ""}`}>
          Pазмеры (ДхШхВ), мм:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.length}х{product?.Width}х{product?.Height}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.manufacturer? "hidden" : ""}`}>
          Производитель:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.manufacturer}
          </span>
        </p>
        <p className={`font-bold text-[0.9rem] ${!product?.weight? "hidden" : ""}`}>
          Bес, кг:
          <span className={`font-normal text-[#A5A5A5] ml-2`}>
            
            {product?.weight}
          </span>
        </p>
        <div className={`flex h-[40px] w-[100%] mt-3`}>
          <div
            className={`flex w-[40%] h-[100%%] `}
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

          </div>
</div>


</div>
    )
}