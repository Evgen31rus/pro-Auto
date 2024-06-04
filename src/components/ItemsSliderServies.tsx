
type propsTypes = {
    img: string
}

export default function ItemsSliderServies({img}:propsTypes){
    return(
        <div className={`  w-[400px] h-[500px]  bg-cover relative md:w-[300px] md:h-[400px]`}
        style={{
            backgroundImage: `url('${img}')`
        }}
        >
    </div>
    )
}