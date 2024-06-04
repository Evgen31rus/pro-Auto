import MainButton from "./MainButton";
import png from '../img/buscket/OrderSent.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {CSSTransition} from 'react-transition-group'

export default function FormDiagnosticEnd(){
    const trigger = useSelector((state:RootState)=> state.sliseForm.formServies.name!==null)
    return(
        <CSSTransition in={trigger} timeout={300} mountOnEnter unmountOnExit classNames={`alert`}>
        <div className={`w-[100%] min-h-[500px] bg-[#EDEDED] flex flex-col justify-around items-center`}>
            <div className={`w-[200px] h-[200px] bg-center bg-cover`}
            style={{
                backgroundImage: `url('${png}')`
            }}
            >
            </div>
            <p className={`text-[1.2rem]`}>Ваша заявка успешна отправленна, скоро с вами свяжется наш специолист!</p>
<Link to={`/`} className={`w-[15%] h-[40px]`}><MainButton textContent={`НА ГЛАВНУЮ`} textColor={`#C53720`}/></Link>
        </div>
        </CSSTransition>
    )
}