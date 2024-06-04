import background from '../img/MainPage/фон.png'
import Battery from '../img/MainPage/Аккумуляторы.png'
import carOil from '../img/MainPage/карточка расходники.png'
import autochemicalGoods from '../img/MainPage/карточка Автохимия.png'
import accessories from '../img/MainPage/карточка Автоаксессуары.png'
import autoСosmetics from '../img/MainPage/карточка автокосметика.png'
import consumables from '../img/MainPage/карточка автомасла.png'
import MainCatalog from './MainCatalog'

export default function AutoProducts(){
    const arrayIMG = [Battery, consumables, autochemicalGoods, accessories,  autoСosmetics, carOil ]
    const arrayTitle = ['АККУМУЛЯТОРЫ', 'АВТОМАСЛА', 'АВТОКОСМЕТИКА', 'АВТОАКСЕССУАРЫ', 'АВТОХИМИЯ', 'РАСХОДНИКИ']
    return(
        <div className={`flex flex-col w-[100%] h-[1100px] bg-cover bg-center bg-no-repeat relative items-center
        sm:h-[2950px] md:h-[1500px]
        `}
        style={{
            backgroundImage: `url(${background})`
        }}
        >
        <div className={`absolute w-[100%] h-[100%] opacity-[80%] bg-white `}>
        </div>

<h1 className={`relative flex w-[800px] text-center text-[2.5rem] text-black border-b-[#C53720] border-b-[3px] pb-2 uppercase mt-10
sm:w-[100%]`}>Автотовары: аксессуары, расходники и многое другое </h1>

<h2 className={`relative flex w-[800px] text-[1.2rem] text-black justify-center text-center mb-10  mt-10 sm:w-[100%]`} >PROAuto - это специализированный интернет магазин востребованных <br></br>товаров для автомобилей. </h2>
        <div className={`relative w-[100%] h-[650px] flex flex-wrap justify-center 
        sm:h-[1000px] md:h-[2000px]`}>
        {
            arrayIMG.map((img, index)=>      
<MainCatalog img={img} title={arrayTitle[index]} url='t'/>
            )
        }
        </div>
        
       

       
        </div>
    )
}