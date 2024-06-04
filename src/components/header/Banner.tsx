import { Link } from "react-router-dom";
import MainButton from "../MainButton";

type propsTypes = {
  bannerContent: string;
  bannerButtonContent: string;
  link: string;
  buttonActions?: string;
  png?: string,
  info?:string,
  error?: boolean
};

export default function Banner({
  bannerContent,
  bannerButtonContent,
  buttonActions,
  info,
  link,
  png,
  error,
}: propsTypes) {
  return (
    <div
      className={`flex absolute justify-around  flex-col 
      ${error? 'w-[40%] h-[60%] top-[25%]' :  'top-[25%] left-[7%] max-w-[400px] h-[45%]'}
      `}
    >
      <div className={`w-[255px] h-[100px] bg-cover ${!error? 'hidden' : ''}`} style={{
        backgroundImage: `url('${png}')`
      }}>

      </div>
      <h1 className={`flex text-start text-[2.5rem] text-white w-[100%]`}>
        {bannerContent}
      </h1>
      <p className={`text-white mt-5 mb-5 font-medium`}>{info}</p>
         <Link
        to={link} className={`w-[50%] h-[50px]`}>
        <MainButton textColor={`white`} textContent={bannerButtonContent} />
      </Link>
    </div>
  );
}
