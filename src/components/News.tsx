import news1 from '../img/MainPage/news1.png'
import news2 from '../img/MainPage/news2.png'
import news3 from '../img/MainPage/news3.png'
import NewsCard from './NewsCard'
import svg from '../svg/main/svg/arrow.svg'

export default function News(){

const title = ['У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!', 'ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA ', 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE']
const date = ['12 февраля 2024 года', '10 февраля 2024 года', '5 февраля 2024 года']
const img = [news1,news2, news3 ]

return(
    <div className={`flex flex-col w-[100%] items-center justify-center bg-[#EDEDED]`}>
  <h1 className={`relative flex w-[300px] text-center justify-center text-[2.5rem] text-black border-b-[#C53720] border-b-[3px] pb-2 uppercase pt-10
sm:w-[100%] mb-10`}>Новости</h1>


<div className={`flex flex-wrap w-[100%] h-[600px] justify-center items-center mt-10 sm:flex-col sm:h-[1000px] sm:no-wrap md:h-[1000px] `}>

{
    img.map((img, index) => <NewsCard img={img} title={title[index]} date={date[index]} svg={svg}/> )
}


</div>

    </div>
)
}