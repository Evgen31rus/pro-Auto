import AccumServiesCard from "../AccumServiesCard";
import png1 from '../../img/ServiesPage/обмен 1.png'
import png2 from '../../img/ServiesPage/диагностика 2.png'
import { useEffect, useState } from "react";
import {CSSTransition} from 'react-transition-group'
export default function ServiesPage (){
    const [show, setShow]=useState(false)

    useEffect(()=>{
        setShow(!show)
    },[])
return(
    <CSSTransition  in={show} timeout={300} classNames="alert">
    <div className={`flex flex-col w-[100%] min-h-[700px] bg-[#EDEDED] items-center sm:h-[900px]`}>
                  <h1 className={`relative flex w-[300px] text-center justify-center text-[2.5rem] text-black border-b-[#C53720] border-b-[3px] pb-2 uppercase pt-10
sm:w-[100%]`}>УСЛУГИ</h1>
        <p className={`w-[50%] text-center mt-10 font-medium sm:w-[90%]`}>Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.</p>
<div className={`w-[90%] h-[80%] flex justify-around pt-10 sm:flex-col`}>
<AccumServiesCard png={png2} content={`ДИАГНОСТИКА АККУМУЛЯТОРА`} path="Диагностика_Аккумуляторов"/>
<AccumServiesCard png={png1} content={`ПРИЕМ АККУМУЛЯТОРОВ`} path="Прием_Аккумуляторов"/>
</div>
    </div>
    </CSSTransition>
)
}