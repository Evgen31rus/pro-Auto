import { Link } from "react-router-dom"

type propsTypes = {
    list: string
}

export default function FooterList({list}:propsTypes){
    return(
        <Link to={list} className={`w-[80%] h-[50px] flex    items-center text-[0.8rem] text-[#FFFFFF] opacity-[70%]`}>
            {list}
        </Link>
    )
}