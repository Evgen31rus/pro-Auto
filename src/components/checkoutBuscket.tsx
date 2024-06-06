import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";


export default function CheckoutBuscket() {
  const state = useSelector((state: RootState) => state.StoreBuscket);
  let sum = [...state.array.map(elem => elem.count * elem.price)].reduce((sum, item)=> sum+item)
  useEffect(()=>{
    sum = [...state.array.map(elem =>elem.count? Number(elem.count) * Number(elem.price):0)].reduce((sum, item)=> sum+item)
  }, [state.productsInBasket.length])
  return (
    <div
      className={`flex flex-col w-[35%] min-h-[250px] max-h-[300px] bg-[#1D1D1D] justify-around sm:w-[100%]`}
    >
      <div
        className={`w-[40%] h-[50px] text-white flex items-center align-center w-[100%] ml-5`}
      >
        <p>Ваш заказ</p>
      </div>

      <div className={`flex flex-col max-h-[200px] overflow-x-hidden`}>
        {state.productsInBasket.map((product, index) => (
          <div
            className={`flex w-[100%] h-[100px] justify-between bg-white pl-5 pr-5 border-[3px] border-t-[0px] border-[#A5A5A5]`}
          >
                        <div className={`flex flex-col w-[35%] h-[100%] justify-center`}>
              <h2
                className={`text-[#C53720] font-medium text-[1rem] whitespace-nowrap overflow-hidden text-ellipsis `}
              >
                {product.name}
              </h2>
              <p className={`text-[#A5A5A5] text-[1rem]`}>
                {state.array.filter((elem) => elem.id === product.id)[0].count}{" "}
                шт. x {product.price} руб.
              </p> </div>
                            <div>
                  <p className={`flex w-[40%] h-[100%] items-center font-medium text-[1.1rem]`}>
                    {state.array.filter((elem) => elem.id === product.id)[0]
                      .count * product.price}
                    руб.
                  </p>

             
            </div>
          </div>
        ))}
      </div>
      <div
        className={`w-[100%] h-[50px] text-white flex items-center justify-between w-[100%] p-5`}
      >
        <p>Итого</p> 
        <p className={`font-bold text-[1.2rem]`}> {sum} руб.</p>
      </div>
    </div>
  );
}
