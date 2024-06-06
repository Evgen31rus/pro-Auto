import { useForm } from "react-hook-form"
import MainButton from "./MainButton"
import { useDispatch } from "react-redux"
import { HandleFormDiagnostic } from "../store/SliceForm"

export default function FormModal(){
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm({
        mode:'onBlur'
      }
      )
    return(
        <>

        <form 
      onSubmit={handleSubmit((data)=>{dispatch( HandleFormDiagnostic(data))})}
      className="flex flex-col w-[90%] h-[100%] sm:justify-around">
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
        
        <div
          className={`flex  flex-row-reverse w-[100%] h-[80px] items-center justify-between`}
        >
          <div
            className={`w-[50%] h-[40px] border-[2px] border-[#C53720] mt-3`}
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