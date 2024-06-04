import { HandySvg } from "handy-svg";
import { useRef, useState } from "react";
import svg from "../svg/main/svg/arrowCatalog.svg";
import { useDispatch } from "react-redux";

type propsTypes = {
  itemName: string;
  role: string;
};

export default function FilterParametrs({ itemName }: propsTypes) {
  const checkBoxHave = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const [isClick, setIsClick] = useState(false);
  const [isCheckBoxHave, setisCheckBoxHave]=useState(true)
  const [isCheckBoxDontHave, setisCheckBoxDontHave]=useState(true)
  return (
    <div>
    <div
      className={`flex   w-[100%] h-[50px] hover:bg-[#C53720] items-center cursor-pointer `}
      onClick={() => setIsClick(!isClick)}
    >
      <div
        className={`flex w-[90%] justify-start items-center text-white pl-5`}
      >
        {itemName}
      </div>
      <div className={`flex w-[10%] justify-center `}>
        <HandySvg
          src={svg}
          width="20"
          height="20px"
          className={`${isClick ? "rotate-90" : ""} transition-all `}
        />
      </div>

    </div>
    <div
        className={`w-[100%] transition-[height] bg-[#2D2D2D]  flex-col items-start text-white font-medium
${isClick ? "h-[100px] opacity-100" : "h-[0px] opacity-0"}
`}
      >
        <label className={'w-[60%] h-[50px] flex items-center justify-around cursor-pointer'} >
          <input type="checkbox" ref={checkBoxHave} checked={isCheckBoxHave} className={`w-0 h-0`}/> 
          <div className={`w-[20px] h-[20px] bg-white flex justify-center items-center border-[3px] box-content border-[#1D1D1D]`} 
          onClick={()=>{setisCheckBoxHave(!isCheckBoxHave); 
          // dispatch(HandleFilterInStock(isCheckBoxHave))
        }
          }> <div className={`${isCheckBoxHave? 'bg-[#C53720]' : ''} w-[50%] h-[50%] `}></div></div>
          В НАЛИЧИИ</label>

          <label className={'w-[60%] h-[50px] flex items-center justify-around cursor-pointer'} >
          <input type="checkbox" ref={checkBoxHave} checked={isCheckBoxDontHave} className={`w-0 h-0`}/> 
          <div className={`w-[20px] h-[20px] bg-white flex justify-center items-center border-[3px] box-content border-[#1D1D1D]`} 
          onClick={()=>{
            setisCheckBoxDontHave(!isCheckBoxDontHave);
            // dispatch(HandleFilterInNotStock(isCheckBoxDontHave))
          }
            }> <div className={`${isCheckBoxDontHave? 'bg-[#C53720]' : ''} w-[50%] h-[50%] `}></div></div>
          ПОД ЗАКАЗ</label>


      </div>
    </div>
  );
}
