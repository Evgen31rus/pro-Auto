import { useSelector } from "react-redux";
import MenuList from "./header/navBar/MenuList";
import { RootState } from "../store/store";

export default function MobileMenu(){
    const MobileMenuState = useSelector((state: RootState)=> state.SliceModal.mobileMenu) 
    const menu = ["ГЛАВНАЯ", "КАТАЛОГ", "УСЛУГИ", "ИНФОРМАЦИЯ"];
    return(
        <div className={`fixed hidden sm:flex w-[80%] h-[100%] bg-[white]  flex flex-col items-center p-10 z-50 left-[0%] transition-all duration-300 ${MobileMenuState.status? 'translate-x-[-0%]' : 'translate-x-[-100%]'} `}>
<h1 className={`w-[100%] text-center text-[2.0rem] border-b-[2px] border-[#C53720] pb-5`}>ГЛАВНОЕ МЕНЮ</h1>
<ul className={`w-[80%] h-[80%] flex-col text-black mt-10`}>
          {menu.map((menuList, index) => 
            <MenuList list={menuList} index={index} />
          )}
          </ul>

        </div>
    )
}