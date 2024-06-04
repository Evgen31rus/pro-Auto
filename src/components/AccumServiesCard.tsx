import { Link } from "react-router-dom"
import MainButton from "./MainButton"

type propsTypes ={
    png: string
    path: string
    content: string
}
export default function AccumServiesCard({png,path, content}:propsTypes){
    return(
        <div className={`w-[40%] h-[80%] bg-black bg-cover flex justify-center items-center relative sm:w-[100%] sm:mt-5 sm:h-[300px]`}
        style={{
            backgroundImage: `url('${png}')`
        }}>
            <div className={`absolute w-[100%] h-[100%] bg-black bg-opacity-40`}>

            </div>
            
            <div className={`w-[90%] h-[80%] flex flex-col justify-around items-center z-20`}>
                <h2 className={`text-[1.5rem] text-white sm:text-center`}>{content}</h2>
            <Link to={path} className={`w-[50%] h-[50px] sm:w-[70%]`}>
                <MainButton textColor="white" textContent={`ПОДРОБНЕЕ`}/>
            </Link>
            </div>


        </div>
    )
}