import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { HandleIsOpenModal } from "../store/SliceModal"
import { Link } from "react-router-dom"
import { HandySvg } from "handy-svg"
import buscket from "../svg/header/buscket.svg";

export default function BurgerMenu(){
  const state = useSelector((state: RootState) => state.StoreBuscket);
const MobileMenuState = useSelector((state: RootState)=> state.SliceModal.mobileMenu) 
const dispatch = useDispatch()
    return(
<div className={`w-[100%] h-[50px] bg-black fixed z-40 flex justify-end pr-5 items-center`}>
<div
          className={`w-[10%] flex justify-around items-center sm:flex-col-reverse sm:w-[50%]`}
        >
          <Link to={"/Корзина"} className={`flex items-center justify-between`}>
            <HandySvg
              src={buscket}
              width="20"
              height="20px"
              className={`flex cursor-pointer sm:w-[30px] sm:h-[50px]`}
            />

            <div
              className={`flex justify-center w-[30px] h-[30px] bg-[red] rounded-full ml-3 items-center text-white uppercase text-[1.5rem]`}
            >
              {state.array.length
                ? state.array
                    .map((elem) => elem.count)
                    .reduce((sum, item) => sum + item)
                : 0}
            </div>
          </Link>
        </div>
      <button className={`hidden sm:flex right-[1%] w-[50px] h-[40px] flex-col justify-around  z-50 relative`}
      onClick={()=>dispatch(HandleIsOpenModal({data:MobileMenuState.name, status:MobileMenuState.status}))}
      >
        <div className={`w-[100%] h-[5px] bg-white ${MobileMenuState.status? 'absolute rotate-[45deg]' : 'rotate-[0deg]'} transition-rotate duration-300`}></div>
        <div className={`w-[100%] h-[5px] bg-white ${MobileMenuState.status? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></div>
        <div className={`w-[100%] h-[5px] bg-white ${MobileMenuState.status? 'absolute rotate-[-45deg]' : 'rotate-[0deg]'} transition-rotate duration-300`}></div>
      </button>
      </div>
    )
}