
type propsTypes = {
    list: string
    index: number
}

export default function DropDown({list, index }:propsTypes){
    return(
        <li
        key={index}
            className={`
            ${list? 'flex': 'hidden'}
        w-[100%] h-[50px] p-2  items-end justify-start hover:bg-[#C53720]`}
          >
            {list}
          </li>
    )
}