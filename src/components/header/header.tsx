
import MainBanner from "../../img/header/mainBaner.png"
import Banner from "./Banner"
import Banner404 from "../../img/404Page/баннер 404 2.png"
import png404 from'../../img/404Page/404.png'
import Nav from "./navBar/Nav"
import { useLocation } from 'react-router-dom';

export default function Header(){
    const location = useLocation()
    console.log(location)
    return(
        <div className={`flex flex-col relative items-center w-[100%] max-w-[1900px] h-[600px] bg-cover  bg-no-repeat sm:hidden
        ${location.key!="default"? 'h-[600px]' : 'h-[90vh]'} `}
        style={{
            backgroundImage: `url('${location.key!="default"||location.pathname=='/'? MainBanner : Banner404}')`
        }}>
        <Nav />
    
        <div className={`w-[100%] max-w-[1300px] h-[100%] relative`}>
            {
                location.key!="default"||location.pathname=='/'? 
                <Banner  bannerButtonContent={`ПЕРЕЙТИ В КАТАЛОГ`} link={'/Каталог'} bannerContent={`НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ`}/>
                :
                <Banner error={true} png={png404} bannerButtonContent={`НА ГЛАВНУЮ`} link={`/`} bannerContent={`СТРАНИЦА НЕ НАЙДЕНА`} info={`Извините, но такой страницы нет на нашем сайте. Возможно вы ввели неправильный адрес.`}/>
            }
        
        </div>
        </div>
    )
}