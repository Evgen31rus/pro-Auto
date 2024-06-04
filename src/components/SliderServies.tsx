import imgMechanic from '../img/MainPage/механик.png'
import imgGirlBattery from '../img/MainPage/девушка с аккумуляторами.png'
import imgВiagnostics from '../img/MainPage/диагностика.png'
import ItemsSliderServies from './ItemsSliderServies'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'





export default function SliderServies(){
const state = useSelector((state : RootState) => state.sliderServies)
    const imgArray = [imgMechanic, imgGirlBattery, imgВiagnostics]

    const switchSlider = () =>{
if(state.ItemsIndexActive ===0){
return '0%'
}
if(state.ItemsIndexActive ===1){
    return  '-100%'
}
if(state.ItemsIndexActive ===2){
    return    '-200%'
}
    } 


    return(
    <div className={`flex flex-col w-[40%] h-[61%] overflow-hidden  sm:hidden`}>
<div className={`w-[120%] h-[100%] transiton-all duration-500 `} style={
    {
        transform: `translateY(${switchSlider()})`
    }
} >

{
    imgArray.map((img, index)=>
        <ItemsSliderServies img={img}/>
    )
}

</div>
    </div>)
}


