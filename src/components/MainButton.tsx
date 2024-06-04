type propsTypes = {
  textContent: string;
  textColor: string;
  fontWeight?:string
  bg?: string
};

export default function MainButton({ textColor, textContent, fontWeight, bg }: propsTypes) {
  return (
    <button
      className={`flex w-[100%] h-[100%] justify-center font-medium items-center text-${textColor} font-${fontWeight} border-[3px] border-[#C53720] duration-300 transition-[background] bg-[${bg}] uppercase hover:bg-black hover:bg-opacity-50`}
    >
      {textContent}
    </button>
  );
}
