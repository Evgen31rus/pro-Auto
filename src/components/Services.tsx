import backgroundServies from '../img/MainPage/servies.png'
import ServiesCard from './ServiesCard'
import personSVG from '../svg/header/Slider/person.svg'
import suitcaseSVG from '../svg/header/Slider/suitcase.svg'
import laptopSVG from '../svg/main/laptop.svg'
import SliderServies from './SliderServies'


export default function Servies(){

const SVG = [personSVG, suitcaseSVG, laptopSVG ]
const title =['БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА', 'ОБМЕН СТАРОГО АККУМУЛЯТОРА НА НОВЫЙ', 'БЕСПЛАТНАЯ ДИАГНОСТИКА АККУМУЛЯТОРА']
const descriptions = ['Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования. ', 'Принесите нам старую АКБ для легкового автомобиля, и мы предоставим Вам скидку на новый аккумулятор!', 'Приезжайте к нам и мы бесплатно проведём диагностику вашего аккумулятора!']

    return(
        <div className={`shadow-element w-[100%] h-[1000px] bg-cover bg-no-repeat bg-center flex flex-col items-center sm:h-[950px] md:h-[1300px] relative`}
        
        style={{
            backgroundImage: `url(${backgroundServies})`
        }}>
            <div className={`shadow-element absolute bg-black opacity-[60%] w-[100%] h-[100%]`}></div>
            <h1 className={`relative flex w-[300px] text-center justify-center text-[2.5rem] text-white border-b-[#C53720] border-b-[3px] pb-2 uppercase pt-10
sm:w-[100%]`}>УСЛУГИ</h1>


<h2 className={`relative flex w-[800px] text-[1.4rem] text-white justify-center text-center mb-10  mt-10 sm:w-[100%]`} >Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции. </h2>
        <div className={`relative w-[100%] h-[800px] flex  justify-around
        sm:h-[1000px] md:flex-col md:items-center md:h-[1000px]`}>
            <div className={`w-[50%] sm:w-[100%] md:w-[100%]`}>
{
    SVG.map((svg, index)=>
        <ServiesCard title={title[index]} description={descriptions[index]} svg={svg} index={index} />
    )
}
</div>
<SliderServies/>
</div>

        </div>
    )
}

