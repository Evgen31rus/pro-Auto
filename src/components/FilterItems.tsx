import { HandySvg } from "handy-svg";
import svg from "../svg/main/svg/arrowCatalog.svg";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  HandleSwitchFilterDropDownIndex,
  HandleSwitchFilterIndex,
} from "../store/SliceSwitchFilter";
import {CSSTransition} from 'react-transition-group'
import { HandleAxiosResult } from "../store/SliceStoreProducts";
import LoadingSpiner from "./LoadingSpiner";
import DropDownItems from "./DropDownItems";

type propsTypes = {
  itemName: string;
  dropDown: string[];
  index: number;
};

export default function FilterItems({ itemName, dropDown, index }: propsTypes) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const indexActive = state.switchFilter.ItemsIndexActive;
  const DropDownParametr = state.switchFilter.DropDownParam;
  const UlRef = useRef<HTMLUListElement>(null);
  const trigger = state.switchFilter.ItemsIndexActive===index
  const URL = `https://evgen31rus.github.io/server-platnik-shop/server.json`
  // const URL = "http://localhost:3001/products";

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => dispatch(HandleAxiosResult(response.data)))
      .catch((response) => dispatch(HandleAxiosResult(response.data)));
  }, [indexActive, DropDownParametr]);

  return (
    <div>
      <li
        className={`mb-2 mt-2 flex w-[100%] min-h-[50px] hover:bg-[#C53720] text-white list-none pl-5 items-center cursor-pointer justify-around`}
        onClick={() => {
          dispatch(HandleSwitchFilterIndex(index));
          dispatch(HandleSwitchFilterDropDownIndex(itemName.toLowerCase()));
        }}
      >
        <div className={`flex w-[90%] justify-start`}>{itemName}</div>
        <div className={`flex w-[10%] justify-center`}>
          <HandySvg
            src={svg}
            width="20"
            height="20px"
            className={`${
              indexActive === index ? "rotate-90" : "rotate-0"
            } transition-all duration-300 `}
          />
        </div>
      </li>
      <CSSTransition nodeRef={UlRef} in={trigger} timeout={300} classNames="list-transition" unmountOnExit>
      <ul
        className={`w-[100%] bg-[#2D2D2D] min-h-[50px]`}
        ref={UlRef}
      >
        {dropDown.length ? (
          dropDown.map((item, i) => (
            <DropDownItems index={index} item={item} itemName={itemName} />
          ))
        ) : (
          <div className={`w-[100%] h-[50px] flex justify-center items-center`}>
            <LoadingSpiner />
          </div>
        )}
      </ul>
      </CSSTransition>
    </div>
  );
}
