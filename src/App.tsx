import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Modal from './components/Modal';
import SliderWrapper from './components/header/Slider/SliderWrapper';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import MobileMenu from './components/MobileMenu';
import BurgerMenu from './components/BurgerMenu';





function App() {
  const isOpenModal = useSelector((state:RootState)=>state.SliceModal.modal.status)
  return (

    <div className="relative w-[100%] overflow-y-hidden flex-col flex items-center bg-black font-medium ">
      <BurgerMenu/>
      
<div className='w-[100%] flex justify-center flex-col items-center sm:hidden'>
<Header  />
<SliderWrapper/>
</div>
<Main/>
<Footer/>
<Modal/>
<MobileMenu/>
<div className={`absolute bg-black  z-50 transition-all duration-300 ${isOpenModal? 'w-[100%] h-[100%] opacity-60': 'w-[0%] h-[0%] opacity-0' }`}></div>
    </div>

  );
}

export default App;
