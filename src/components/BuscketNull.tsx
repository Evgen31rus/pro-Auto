import { Link } from 'react-router-dom'
import buscketNull from '../img/buscket/buscketNull.png'
import MainButton from './MainButton'
import { HandleRemoveAllProducts } from '../store/SliceStoreBuscket'
import { useDispatch } from 'react-redux'

export default function BuscketNull(){

  
    return(
        <div 
        className={`flex w-[100%] h-[300px]  border-[3px] items-center justify-around sm:flex-col sm:h-[500px] `}
      >
        
          
            <div
              className={`flex  w-[200px] h-[200px] bg-cover rounded-full sm:w-[150px] sm:h-[150px]`}
              style={{
                backgroundImage: `url(${buscketNull})`,
              }}
            ></div>

            <div className=' flex flex-col w-[59%] h-[80%] justify-around sm:h-[60%]'>
                <h2 className='text-[1.4rem] font-medium '>Ваша корзина пуста</h2>
            <span className='flex w-[100%]'>Исправить это просто: выберите в каталоге интересующий товар и нажмите кнопку «В корзину»</span>
            <Link to={`/Каталог`} className='w-[150px] h-[40px] border-[2px] border-[#C53720]'>
<MainButton textContent='В КАТАЛОГ' textColor='[#C53720]'/>

            </Link>
            </div>
          
        
      </div>
    )
}