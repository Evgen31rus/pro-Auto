import card from '../../../svg/header/Slider/card.svg'
import person from '../../../svg/header/Slider/person.svg'
import medal from '../../../svg/header/Slider/medal.svg'
import messege from '../../../svg/header/Slider/messege.svg'

import Slider from "./Slider";

export default function SliderWrapper(){
    return(
        <div className={`w-[80%] max-w-[1200px] h-[250px] flex justify-center items-center 
        sm:flex-col sm:h-[1000px]
        `}>
<Slider svg={card} sliderContent="Наличный и безналичный расчет"/>
<Slider svg={person}  sliderContent="Техническая помощь и консультация"/>
<Slider svg={medal}  sliderContent="Только качественная и проверенная продукция"/>
<Slider svg={messege}  sliderContent="Мы всегда на связи с 9:00 до 18:00!"/>
        </div>
    )
}