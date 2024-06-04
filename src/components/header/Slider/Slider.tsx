import { HandySvg } from 'handy-svg'
import { useState } from 'react'

type propsTypes = {
    svg: any
    sliderContent: string
}

export default function Slider({svg,sliderContent}:propsTypes){
    const [isMouseOver , setIsMouseOver]= useState(false) 
    return(
        <div className={`relative  overflow-hidden flex flex-col w-[30%] h-[100%] cursor-pointer sm:hidden
        sm:w-[100%]`}
        onMouseOver={()=>setIsMouseOver(true)}
        onMouseOut={()=>setIsMouseOver(false)}
        >
<div className={`
${isMouseOver? 'w-[98%] h-[300%] bg-[#C53720]':'h-[0%] w-[0%]'}
absolute flex  rotate-[45deg]   translate-y-[-30%]  z-10 transition-all duration-300`}>
</div>
<div className={`absolute w-[90%] h-[80%] z-20 flex flex-col justify-around items-center top-[20%] left-[50%] translate-x-[-50%]`}>
<HandySvg
        src={svg}
        width="80"
        height="60px"
        fill={isMouseOver? '#C53720': ''}
        className={`transition-all duration-500`}
      />
      <p className={`w-[85%] flex  text-white text-center 
      sm:w-[100%] sm:justify-center
      `}>{sliderContent}</p>
</div>


        </div>
    )

}