import footerPNG from '../../svg/footer/footer.png'
import logo from "../../svg/header/logo.svg";
import phone from "../../svg/footer/phone.svg";
import message from "../../svg/footer/message.svg";
import { HandySvg } from 'handy-svg';
import MainButton from '../MainButton';
import { Link } from 'react-router-dom';
import { HandleIsOpenModal } from '../../store/SliceModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';




export default function Footer(){
    const ModalName = useSelector(
        (state: RootState) => state.SliceModal.modal.name
      );
      const dispatch = useDispatch();
    const menu =['ГЛАВНАЯ', 'КАТАЛОГ', 'УСЛУГИ', 'ИНФОРМАЦИЯ', 'ЗАКАЗАТЬ ЗВОНОК']
    return(
        <div className={`flex w-[100%] max-w-[1200px] h-[400px] bg-cover bg-center justify-around p-10 text-[0.8rem]
        sm:flex-col sm:items-center sm:pt-5 sm:h-[500px]
        `}
        style={{
            backgroundImage: `url(${footerPNG})`
        }}
        >
            <div className={`flex flex-col justify-between h-[150px] sm:w-[100%] items-center`}>
            <HandySvg
        src={logo}
        width="150"
        height="80px"
        className={`sm:w-[60%]`}
      />
      <p className={`w-[60%] text-white opacity-[70%] sm:w-[100%] sm:text-center`}>
© 2019 PRO Auto. 
Все права защищены.
      </p>
            </div>
            <ul 
       
       className={`
         w-[60%] text-[1rem] sm:w-[100%] justify-center flex sm:flex-col sm:items-center mt-2 mb-2`}>
{
    menu.map((title, index) =>

        <Link to={title==='ГЛАВНАЯ'? '/' : title } className={`text-white cursor-pointer ml-2 mr-2 sm:ml-0 sm:mr-0 sm:mt-2 sm:mb-2`}>{title}</Link>
         
        
    )
}
</ul>


<div className={`flex flex-col justify-between h-[150px] sm:w-[100%] sm:items-center`}>
<div className='flex items-center'>

<HandySvg
        src={phone}
        width="50"
        height="15px"
      />
      <p className={`text-white`}>+7 (342) 279-36-13</p>

</div>
<div className='flex items-center'>
<HandySvg
        src={message}
        width="50"
        height="15px"
      />
      <p className={`text-white`}>proauto59@yandex.ru</p>
</div>
<div className={`flex w-[80%] h-[40px] justify-center m-5 sm:w-[60%] `}
onClick={() => dispatch(HandleIsOpenModal({ data: ModalName }))}
>
    <MainButton textContent={`Заказать звонок`} textColor={`white`}/>
</div>
            </div>


        </div>
    )
}