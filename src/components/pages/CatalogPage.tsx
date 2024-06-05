import CatalogBar from "../CatalogBar";
import Filter from "../Filter";
import svg1 from '../../svg/main/switchViow1.svg'
import svg2 from '../../svg/main/switchViow2.svg'
import svg3 from '../../svg/main/switchViow3.svg'
import svg4 from '../../svg/main/switchViow4.svg'
import { HandySvg } from "handy-svg";
import { useEffect, useState } from "react";
import {CSSTransition} from 'react-transition-group'
import ProductFullCard from "../ProductFullCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { HandleProductCardFullInfo } from "../../store/SliceStoreProducts";
import MainButton from "../MainButton";


export default function CatalogPage(){
    const [isClick, setIsClick]=useState(false)
    const [show, setShow]=useState(false)
    const ProductFullCardObject = useSelector((state: RootState)=> state.storeProducts.ProductCardFullInfo)

    useEffect(()=>{
        setShow(!show)
    },[])

return(
    <CSSTransition in={show} timeout={300} classNames={`alert`}>
    <div className={`flex flex-col w-[100%] min-h-[1300px] items-center bg-[#EDEDED] pb-10 sm:min-h-[800px] sm:overflow-x-scroll `}>
     <h1 className={`relative flex w-[300px] text-center justify-center text-[2.5rem] text-black border-b-[#C53720] border-b-[3px] pb-2 uppercase pt-10
sm:w-[100%]`}>КАТАЛОГ</h1>
           <div className={`flex w-[100%] h-[30px] m-2 justify-between`}>
           
                <div className={`w-[80%] h-[100%]`}></div>
                <div className={`flex w-[14%] h-[100%] text-[0.9rem] items-center font-medium sm:hidden`}>
                    ВИД:
                <div className={`flex justify-center items-center w-[40px] h-[30px] border-[3px] border-[#C53720] transition-[background] duration-300 cursor-pointer ml-3 ${isClick? '' : 'bg-[#C53720]'}`}
                onClick={()=>setIsClick(false)}>
                <HandySvg src={!isClick? svg1 : svg2} width="20" height="20px" />
                </div>
                <div className={`flex justify-center items-center w-[40px] h-[30px] border-[3px] border-[#C53720] transition-[background] duration-300 cursor-pointer ${!isClick? '' : 'bg-[#C53720]'}`}
                onClick={()=>setIsClick(true)}>
                <HandySvg src={!isClick? svg3 : svg4} width="20" height="20px" />
                </div>
                </div>
                


           </div>
    <div className={`flex w-[100%] h-[80%] justify-around sm:flex-col sm:h-[100%] relative sm:justify-start`}>
    <Filter/>

    <CatalogBar stateViow={isClick}/>
       
    
    


</div>


    </div>
    </CSSTransition>
)
}