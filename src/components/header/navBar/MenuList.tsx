import { useRef, useState } from "react";
import {Link, BrowserRouter as Router,} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { HandleIsOpenModal } from "../../../store/SliceModal";

type propsTypes = {
  list: string;
  index: number;
};

export default function MenuList({ list,index }: propsTypes) {

  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const MobileMenuState = useSelector((state: RootState)=> state.SliceModal.mobileMenu) 
  const dispatch = useDispatch()

  
  return (
  <>
    <Link to={list==='ГЛАВНАЯ'? '/':list}
      className={` text-[0.8rem] text-white flex w-[300px] justify-center cursor-pointer relative sm:text-black  sm:w-[100%] sm:text-[1.9rem] sm:justify-start sm:pl-5 sm:mb-5 sm:mt-5`}
      onMouseOver={() => setIsOpenDropDown(true)}
      onMouseOut={() => setIsOpenDropDown(false)}
      onClick={()=>dispatch(HandleIsOpenModal({data:MobileMenuState.name, status:MobileMenuState.status}))}
    >
      {list}
    </Link>
</>
  );
}
