import { useState } from "react";
import MainButton from "./MainButton";
import { Link } from "react-router-dom";

type propsTypes = {
  img: string;
  title: string;
  url: string;
};
export default function MainCatalog({ img, title, url }: propsTypes) {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  return (
    <div
      className={`flex w-[25%] h-[350px] overflow-hidden relative bg-center bg-cover m-2 z-20 opacity-[100%] cursor-pointer
      sm:w-[100%] sm:h-[400px] sm:mb-5
      md:w-[40%]
      `}
      style={{
        backgroundImage: `url('${img}')`,
      }}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      <div
        className={`
${isMouseOver ? "opacity-[80%]" : "opacity-[0%]"}
absolute flex flex-col  w-[100%] h-[100%] bg-black  justify-center items-center transition-opacity duration-700`}
      >
        <h1
          className={`text-[1.8rem] text-white mb-10 transition-translate duration-500
${isMouseOver ? "translate-x-[0%]" : "translate-x-[200%]"}`}
        >
          {title}
        </h1>
        <Link
        to={'/Каталог'}
          className={`w-[80%] h-[40px] transition-translate duration-500
${isMouseOver ? "translate-x-[0%]" : "translate-x-[-200%]"}`}
        >
          <MainButton textContent={`Сделать заказ`} textColor={`white`} />
        </Link>
      </div>
    </div>
  );
}
