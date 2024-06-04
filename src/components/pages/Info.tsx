import { useEffect, useState } from 'react'
import png1 from '../../img/infoPage/Frame 23.png'
import png2 from '../../img/infoPage/Frame 24.png'
import png3 from '../../img/infoPage/Сертификат.png'
import {CSSTransition} from 'react-transition-group'

export default function Info (){
    const [show, setShow]=useState(false)

    useEffect(()=>{
        setShow(!show)
    },[])
    return(
        <CSSTransition  in={show} timeout={300} classNames="alert">
        <div className={`flex flex-col justify-around items-center w-[100%] min-h-[500px] bg-[#EDEDED] sm:min-h-[300px]`}>
            <h1 className={`relative flex w-[300px] font-medium text-center justify-center text-[2.5rem] text-black border-b-[#C53720] border-b-[3px] pb-2 uppercase pt-10 mb-10
sm:w-[100%]`}>ИНФОРМАЦИЯ</h1>
<div className={`w-[80%] h-[80%] flex flex-wrap mb-5 sm:flex-col sm:items-center sm:h-[95%]`}>
<div className="w-[30%] h-[300px] bg-cover bg-no-repeate sm:w-[100%] sm:mb-5 " style={{
    backgroundImage: `url('${png2}')`
}}></div>
<div className="w-[30%] h-[374px] bg-contain bg-no-repeat flex justify-center sm:w-[60%] sm:h-[234px] sm:mb-5" style={{
    backgroundImage: `url('${png1}')`}}>
        <div className="w-[50%] h-[45%] bg-contain bg-no-repeate flex mt-10" style={{
    backgroundImage: `url('${png3}')`}}>
     </div>
     </div>
<div className="w-[30%] h-[300px] bg-cover bg-no-repeate sm:w-[100%] sm:mb-5 " style={{
    backgroundImage: `url('${png2}')`
}}></div>
<div className="w-[30%] h-[300px] bg-cover bg-no-repeate sm:w-[100%] sm:mb-5 " style={{
    backgroundImage: `url('${png2}')`
}}></div>
<div className="w-[30%] h-[300px] bg-cover bg-no-repeate sm:w-[100%] sm:mb-5 " style={{
    backgroundImage: `url('${png2}')`
}}></div>
<div className="w-[30%] h-[300px] bg-cover bg-no-repeate sm:w-[100%] sm:mb-5 " style={{
    backgroundImage: `url('${png2}')`
}}></div>
</div>
        </div>
        </CSSTransition>
    )
}