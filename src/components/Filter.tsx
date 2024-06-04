import FilterItems from "./FilterItems";
import FilterParametrs from "./FilterParametrs";
import MainButton from "./MainButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";



export default function Filter() {
  const state = useSelector((state:RootState)=>state.storeProducts.categories)
const items = [
  {
title: 'АККУМУЛЯТОРЫ',
DropDown: state.batterry
  },
 {
  title: 'АВТОМАСЛА',
  DropDown: state.automaticOils
 },
 {
  title: 'АКСЕССУАРЫ',
  DropDown: [ ]
 },
 { 
  title: 'АВТОХИМИЯ',
  DropDown: state.autoChemicalGoods
 }
]
const itemsFilter = [
  {
    price: {
      title: "Цена",
      role: "",
    },
  },
  {
    status: {
      title: "Статус",
      role: "Check",
    },
  },
];
  return (
    <div className={`flex flex-col w-[25%] min-h-[500px] font-medium sm:w-[100%] sm:h-[300px] sm:justify-center `}>
      <div className={`w-[100%] min-h-[300px] bg-[#000000] pt-5 `}>
        {items.map((item, index) => (
          <FilterItems itemName={item.title} dropDown={item.DropDown} index={index}/>
        ))}
      </div>

  
    </div>
  );
}
