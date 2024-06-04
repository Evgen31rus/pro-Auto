import { HandySvg } from "handy-svg"

type propsTypes = {
img : string,
svg? : any,
date: string,
title: string
url?: string

}

export default function NewsCard({img,svg, date, title, url }:propsTypes){
    return(
    <div className={`flex flex-col w-[25%] h-[70%] mr-5  overflow-hidden md:w-[40%] md:mb-5 md:h-[45%] sm:w-[100%] sm:h-[30%] sm:mb-5 sm:mr-0 `}>
<div className={`w-[100%] h-[60%] bg-center bg-cover`}
style={{
    backgroundImage:`url('${img}')`
}} >

</div>
<div className={`h-[40%] flex flex-col justify-around bg-[#1D1D1D] p-5`}>

<span className={`text-[0.6rem] text-[#C53720] `}>{date}</span>

<h3 className={`flex w-[100%] text-[0.8rem] text-white flex-wrap`}>{title}</h3>

<div className={`relative`}>

<HandySvg
        src={svg}
        width="70px"
        height="40px"
        className={`absolute top-[-10px] right-[2px]`}
      />
</div>
</div>
    </div>
    )
}