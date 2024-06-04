import { HandySvg } from "handy-svg";
import logo from "../../../svg/header/logo.svg";
import MenuList from "./MenuList";
import buscket from "../../../svg/header/buscket.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Link } from "react-router-dom";
import { HandleIsOpenModal } from "../../../store/SliceModal";

export default function Nav() {
  const ModalName = useSelector(
    (state: RootState) => state.SliceModal.modal.name
  );
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.StoreBuscket);
  const menu = ["ГЛАВНАЯ", "КАТАЛОГ", "УСЛУГИ", "ИНФОРМАЦИЯ"];
  return (
    <div
      className={` flex flex-col  font-medium min-h-[100px] w-[90%] max-w-[1200px]  fixed z-50
        sm:flex sm:items-start sm:h-[200px] `}
    >
      <div className="flex items-center justify-around bg-black bg-opacity-98 sm:w-[120%]">
        <HandySvg
          src={logo}
          width="150"
          height="100px"
          className={`flex sm:w-[200px]`}
        />

        <ul className={`w-[60%] flex text-white sm:hidden `}>
          {menu.map((menuList, index) => (
            <MenuList list={menuList} index={index} />
          ))}
          <li
            className={`text-[0.8rem] text-white flex w-[300px] justify-center cursor-pointer relative`}
            onClick={() => dispatch(HandleIsOpenModal({ data: ModalName }))}
          >
            ЗАКАЗАТЬ ЗВОНОК
          </li>
        </ul>

        <div
          className={`w-[10%] flex justify-around items-center sm:flex-col-reverse sm:w-[50%]`}
        >
          <Link to={"/Корзина"} className={`flex items-center justify-between`}>
            <HandySvg
              src={buscket}
              width="20"
              height="20px"
              className={`flex cursor-pointer sm:w-[30px] sm:h-[50px]`}
            />

            <div
              className={`flex justify-center w-[30px] h-[30px] bg-[red] rounded-full ml-3 items-center text-white`}
            >
              {state.array.length
                ? state.array
                    .map((elem) => elem.count)
                    .reduce((sum, item) => sum + item)
                : 0}
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-opacity-10"></div>
    </div>
  );
}
