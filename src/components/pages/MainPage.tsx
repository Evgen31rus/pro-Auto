import AutoProducts from "../AutoProducts";
import Servies from "../Services";
import News from "../News";
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from "react";


export default function MainPage(){
    const [isLoad, setIsLoad]=useState(false)
    const [show, setShow]=useState(false)

    useEffect(()=>{
        setShow(!show)
    },[])
    return(
        <CSSTransition  in={show} timeout={300} classNames="alert">
        <div className={`w-[100%] sm:mt-10`} onLoad={()=>setIsLoad(!isLoad)} >
<AutoProducts/>
<Servies/>
<News/>
        </div>
        </CSSTransition>
    )
}