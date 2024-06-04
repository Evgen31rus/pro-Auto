import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { HandleIsOpenModal } from "../store/SliceModal"

export default function BurgerMenu(){
const MobileMenuState = useSelector((state: RootState)=> state.SliceModal.mobileMenu) 
const dispatch = useDispatch()
    return(
<div className={`w-[100%] h-[50px] bg-black fixed z-40 flex justify-end pr-5 items-center`}>
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