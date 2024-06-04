import { useEffect, useState } from "react";
import CheckoutBuscket from "../checkoutBuscket"
import { useForm } from "react-hook-form";
import OrderSent from "../OrderSent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FormOrder from "../FormOrder";
import {CSSTransition} from 'react-transition-group'

export default function Checkout() {
const state = useSelector((state:RootState)=>state.sliseForm)
  const [isClick, setIsClick] = useState<boolean>(false);
  const [show, setShow]=useState(false)

  useEffect(()=>{
      setShow(!show)
  },[])
  const dispatch=useDispatch()
  const HandleIsClickCheckBox = () => {
    setIsClick(!isClick);
  };
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm({
    mode:'onBlur'
  }
  );

  return (
    <CSSTransition in={show} timeout={300} classNames={`alert`}>
    <div className={`flex flex-col w-[100%] min-h-[400px] bg-[#EDEDED] items-center justify-center`}>
       <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
{
  state.numberOrder===null?
    <div className={`flex w-[100%] justify-around items-center p-5`}>
<FormOrder/>
<CheckoutBuscket />
  </div> 
  :
  <OrderSent/> 
}
    </div>
    </CSSTransition>
  );
}
