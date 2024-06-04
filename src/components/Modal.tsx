import { useDispatch, useSelector } from "react-redux";
import FormDiagnostics from "./FormDiagnostics";
import { RootState } from "../store/store";
import logo from '../svg/header/logo.svg'
import { HandySvg } from "handy-svg";
import FormModal from "./FormModal";
import closeSvg from '../svg/modal/closeModal.svg'
import { HandleIsOpenModal } from "../store/SliceModal";

export default function Modal(){
    const ModalName = useSelector(
        (state: RootState) => state.SliceModal.modal.name
      );
      const dispatch = useDispatch();
    const isOpenModal = useSelector((state: RootState)=> state.SliceModal.modal.status)
    
    return(
        <div className={`${!isOpenModal? 'translate-x-[-250%] translate-y-[250%]': 'translate-x-[0%] translate-y-[-50%]'} tansition-all duration-300 flex-col h-[80vh] max-h-[500px] w-[40%] max-w-[400px] z-[60] bg-white fixed m-auto top-[50%] sm:w-[90%]  `}>
<div className={`flex w-[100%] h-[20%] bg-[#1D1D1D] text-white justify-around items-center p-2`}>
    <div className={`absolute w-[20px] h-[20px] top-[0%] right-[0%] cursor-pointer`} onClick={() => dispatch(HandleIsOpenModal({ data: ModalName }))}><HandySvg src={closeSvg}  className={` w-[100%] h-[100%]`} /></div>
        
        <HandySvg src={logo}  className={`w-[30%] h-[80%]`}/>

   <div className={` w-[50%] flex flex-col`}><h2 className={`text-[1rem] uppercase  mb-2`}>обратный звонок</h2>  <p className={`text-[0.7rem]`}>Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.</p></div> 
  
</div>
<div className={`w-[100%] h-[70%] flex justify-center`}>
    <FormModal/>
    </div>
        </div>
    )
}