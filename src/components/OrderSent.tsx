import { Link } from 'react-router-dom'
import png from '../img/buscket/OrderSent.png'
import MainButton from './MainButton'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useEffect } from 'react'
import { HandleRemoveAllProducts } from '../store/SliceStoreBuscket'

export default function OrderSent(){
    const state = useSelector((state: RootState)=>state.sliseForm)
    const dispatch = useDispatch()

    return(
        <div className={`w-[80%] h-[80%] flex items-center bg-white border-[3px] border-[#3CC051]`}>
<div className={`flex w-[90%] h-[80%] items-center justify-around`}>
    <div className={`w-[200px] h-[200px] rounded-full bg-cover`}
    style={{
        backgroundImage: `url(${png})`
    }}
    >

    </div>
    <div className={` w-[60%] h-[70%] flex flex-col `}>
        <h2 className={`text-start font-medium text-[1.3rem] mb-8`}>Ваш заказ №{state.numberOrder} успешно оформлен</h2>
        Благодарим за выбор нашей компании. В ближайшее время наши менеджеры свяжуться с вами, ответят на любые вопросы и подготовят счет на оплату.
        <div className='w-[60%] flex items-center justify-between mt-8'>
            <Link to={'/Каталог'} className={`w-[45%] h-[40px]`}>
                <MainButton textColor='[#C53720]' textContent='В КАТАЛОГ'/>
            </Link >
            <Link to={'/'} className={`w-[45%] h-[40px]`}>
                <MainButton textColor='[#C53720]' textContent='НА ГЛАВНУЮ'/>
            </Link >
        </div>
    </div>
</div>
        </div>
    )
}