import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { HandleFormDiagnostic} from "../store/SliceForm";
import MainButton from "./MainButton";


export default function FormDiagnostics(){
    const [isClick, setIsClick] = useState<boolean>(false);
    const [isSentForm, setIsSentForm]=useState<boolean>(false);
    const dispatch=useDispatch()
    const HandleIsClickCheckBox = () => {
      setIsClick(!isClick);
    };
    const {
      register,
      handleSubmit,
      formState: { errors},
    } = useForm({
      mode:'onBlur'
    }
    );
    return(
        <>

          <form 
        onSubmit={handleSubmit((data)=>{dispatch( HandleFormDiagnostic(data))})}
        className="flex flex-col w-[40%] h-[100%] sm:w-[100%]">
          <label
            htmlFor={`name`}
            className={`flex flex-col h-[80px] justify-around font-medium`}
          >
            <div className={`w-[100%] flex justify-between`}>
            <p className="flex">
              Имя: <span className="text-[red]">*</span>
              </p>
              <p className={`text-[#C53720] text-[0.8rem]`}>{errors.name?.message? errors.name?.message.toString() :''}</p>
              </div>
            <input
            placeholder={`Ваше имя...`}
{...register('name', { required: 'Поле обязательно для ввода' ,
pattern: {value: /^[\u0410-\u044F]+$/,message: 'Поле содержит недопустимые символы',},
minLength:{value:2, message: 'Поле не может содержать менее 2-х символов'},
maxLength: {value:15, message: 'Поле не может превышать более 15-ти символов'},
}, 

)}
              className={`border-[3px] border-[#1D1D1D] h-[35px] p-2`}
            />
          </label>
          <label
            htmlFor={`phone`}
            className={`flex flex-col h-[80px] justify-around font-medium`}
          >
<div className={`w-[100%] flex justify-between`}>
            <p className="flex">
              Телефон: <span className="text-[red]">*</span>
              </p>
              <p className={`text-[#C53720] text-[0.8rem]`}>{errors.phone?.message? errors.phone?.message.toString() : '' }</p>
              </div>
            <input
            placeholder={`Ваш номер телефона...`}
    {...register('phone', 
    { required: 'Поле обязательно для ввода', 
    maxLength:{value:11, message: 'Поле не должно привышать 11 символов'}, 
    minLength:{value:11,message: 'Поле не должно быть менее 11 символов'},
    pattern: {value: /^\d+$/, message: 'Поле должно содержать только цифры'},
    })}

              className={`border-[3px] border-[#1D1D1D] h-[35px] outline-none p-2`}
            />
          </label>
          <label
            htmlFor={`eMail`}
            className={`flex flex-col h-[80px] justify-around font-medium`}
          >
            <div className={`w-[100%] flex justify-between`}>
            <p className="flex">
              E-mail: <span className="text-[red]">*</span>
              </p>
              <p className={`text-[#C53720] text-[0.8rem]`}>{errors.eMail?.message? errors.eMail?.message.toString() : '' }</p>
            
            </div>
            <input
            placeholder={`Ваш E-mail...`}
{...register('eMail', { required: 'Поле обязательно для ввода',
  pattern:{
    value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    message: 'Недопустимый формат E-mail'
  }
})}
              className={`border-[3px] border-[#1D1D1D] h-[35px] outline-none p-2`}
            />
          </label>
          <label
            htmlFor={`servies`}
            className={`flex flex-col h-[80px] justify-around font-medium`}
          >
            <div className={`w-[100%] flex justify-between`}>
            <p className="flex">
              Услуга: 
              </p>
              <p className={`text-[#C53720] text-[0.8rem]`}></p>
            
            </div>
            <input
            placeholder={`Введите тип услуги...`}
{...register('servies', { required: false,})}
              className={`border-[3px] border-[#1D1D1D] h-[35px] outline-none p-2`}
            />
          </label>
          <label
            htmlFor={`mesage`}
            className={`flex flex-col h-[150px] justify-around font-medium`}
          >
            <div className={`w-[100%] flex justify-between`}>
            <p className="flex">
            Сообщение: 
              </p>
              <p className={`text-[#C53720] text-[0.8rem]`}></p>
            
            </div>
            <textarea
            placeholder={`Введите ваше сообщение...`}
{...register('mesage', { required: false,})}
              className={`border-[3px] border-[#1D1D1D] min-h-[100px] max-h-[100px] outline-none p-2`}
            />
          </label>
          <p className={`text-[0.8rem] text-[#C53720]`}>{errors.checkBox?.message? errors.checkBox?.message.toString() : '' }</p>
          {/* <label htmlFor={`CheckBox`} className={`flex mt-3 items-center`}>
            <input
              type="checkBox"
              {...register("checkBox", {required: 'Вы должны согласиться на обработку ваших персональных данных'})}
              className={`w-[1px] h-[1px] opacity-0`}
              checked={isClick}
            />
            <div
              className={`w-[30px] h-[30px] border-[3px] border-[#1D1D1D] flex justify-center items-center z-10 cursor-pointer mr-3`}
              onClick={() => HandleIsClickCheckBox()}
            >
              <div
                className={` w-[10px] h-[10px] transition-[background] ${
                  isClick ? "bg-[#C53720]" : ""
                }`}
              ></div>
            </div>
            <p>
              Я согласен на{" "}
              <span className={`text-[#C53720]`}>
                обработку персональных данных
              </span>
            </p>
          </label> */}
          <div
            className={`flex  flex-row-reverse w-[100%] h-[80px] items-center justify-between`}
          >
            <div
              className={`w-[40%] h-[40px] border-[2px] border-[#C53720] mt-3`}
            >
              <MainButton
                textColor={"[#C53720]"}
                textContent={`ЗАКАЗАТЬ ЗВОНОК`}
              />
            </div>
            <p className={`text-[#C53720]`}>* Обязательное поле</p>
          </div>
        </form>
        
           
        </>
    )
}