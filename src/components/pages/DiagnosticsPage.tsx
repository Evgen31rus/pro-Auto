import { useLocation } from "react-router-dom";
import FormDiagnostics from "../FormDiagnostics";
import bannerDiagnostics from '../../img/ServiesPage/фон главного баннера 5.png'
import bannerToAccept from '../../img/ServiesPage/bannerToTacke.png'
import queshensPng from '../../img/ServiesPage/queshens.png'
import FormDiagnosticEnd from "../FormDiagnosticEnd";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import {CSSTransition} from 'react-transition-group'

export default function DiagnosticsPage(){
    const location = useLocation()
    const isSentForm = useSelector((state:RootState)=> state.sliseForm.formServies.name)
    const pathNameDiagnostics = "/%D0%A3%D0%A1%D0%9B%D0%A3%D0%93%D0%98/%D0%94%D0%B8%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82%D0%B8%D0%BA%D0%B0_%D0%90%D0%BA%D0%BA%D1%83%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%BE%D0%B2"
    const [show, setShow]=useState(false)

    useEffect(()=>{
        setShow(!show)
    },[])
    return(
        <CSSTransition  in={show} timeout={300} classNames="alert">

    {
        isSentForm?
            <FormDiagnosticEnd />

        :
        <div className={`w-[100%] min-h-[800px] bg-[#EDEDED] flex flex-col justify-around items-center `}>
        <h1 className={`relative flex w-[700px] text-center justify-center text-[2.5rem] text-black border-b-[#C53720] border-b-[3px] pb-2 uppercase pt-10
sm:w-[100%] mb-10`}>{location.pathname==pathNameDiagnostics? 'ДИАГНОСТИКА АККУМУЛЯТОРОВ' : 'ПРИЕМ АККУМУЛЯТОРОВ'}</h1>
<div className={`w-[70%] h-[200px] bg-cover sm:w-[100%] sm:h-[100px]`}
style={{
backgroundImage: `url('${location.pathname===pathNameDiagnostics? bannerDiagnostics : bannerToAccept}')`
}}>
</div>
{
location.pathname==pathNameDiagnostics?
<>
<p className='font-medium w-[70%] text-[0.9rem] mt-10 mb-5'>Профессионалы магазина «PRO auto» совершенно бесплатно проведут диагностику АКБ Вашего автомобиля, а также дадут рекомендации по дальнейшей эксплуатации аккумулятора, или по его замене, в случае необходимости.</p>
<p className='font-medium w-[70%] text-[0.9rem] mb-10'>Ждём Вас в наших отделах продаж!</p>
</>   
:
<>
<p className='font-medium w-[70%] text-[0.9rem] mt-10 mb-10'>Наша компания специализируется скупке поддержанных АКБ. Прием бу аккумуляторов для авто – от 600 рублей.</p>
</>   
}
<div className={`flex w-[100%] h-[70%] justify-around pl-10 pr-10`}>
<FormDiagnostics/>
<div className={`w-[40%] h-[70%] bg-cover mt-10 sm:hidden`} style={{
backgroundImage: `url('${queshensPng}')`
}}>

</div>
</div>

</div>
}
</CSSTransition>
    )
}