import { HandySvg } from 'handy-svg'
import square from '../img/squere.png'
import { useState } from 'react'
import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { HandleSwitchSlider } from '../store/SliceSliderServies'

type propsTypes = {
  title: string
  description: string
  svg: any
  index: number

}

export default function ServiesCard({title, description, svg, index}:propsTypes){
const state = useSelector((state:RootState)=>state.sliderServies)
const dispatch = useDispatch()
    return(
      <div className={`
      ${state.ItemsIndexActive === index? 'gradient' : ''}
      relative  flex  w-[100%] justify-center items-center   transition-all duration-500 cursor-pointer sm:mb-5 sm:p-2`}

      onMouseOver={ ()=>{
        dispatch(HandleSwitchSlider(index))
      }
      }
      >
        <div className={` flex  w-[500px] h-[200px] items-center`}>
<div className={` w-[150px] h-[150px] flex justify-center  mr-5 bg-no-repeat pr-3 z-20 `} 
style={{
  backgroundImage: `url('${square}')`
}}> 

<HandySvg
        src={svg}
        width="80px"
        height="100px"
        fill={state.ItemsIndexActive === index? '#C53720': ''}
      />

</div>
<div className={`w-[70%] flex flex-col `}>

<h1 className={`text-white mb-2 uppercase`}>{title}</h1>

<p className={`text-white w-[100%] text-[1.1rem]`}>{description}</p>

</div>

        </div>
        </div>
    )
}