import { useSelector } from "react-redux";
import Buscket from "../pages/Buscket";
import CatalogPage from "../pages/CatalogPage";
import Checkout from "../pages/Checkout";
import MainPage from "../pages/MainPage";
import {  Routes, Route, useLocation} from 'react-router-dom';
import { RootState } from "../../store/store";
import ServiesPage from "../pages/ServiesPage";
import DiagnosticsPage from "../pages/DiagnosticsPage";
import Info from "../pages/Info";
import ProductFullCard from "../ProductFullCard";
import ProductFullPage from "../pages/ProductFullPage";



export default function Main(){
    const location = useLocation()
    const state = useSelector((state: RootState)=>state)
    const productFullCard = state.storeProducts.ProductCardFullInfo
    const ArrayBuscket = state.StoreBuscket.array.length

    const routes = [
        {path:'/', Component: <MainPage/>},
        {path:'Каталог', Component: <CatalogPage/>},
        {path:'Корзина', Component: <Buscket/>},
        // {path:'Оформить_заказ', Component: ArrayBuscket? <Checkout/> : null},
        {path:'Оформить_заказ', Component: <Checkout/>},
        {path:'Услуги', Component: <ServiesPage/>},
        {path:'Услуги/Диагностика_Аккумуляторов', Component: <DiagnosticsPage/>},
        {path:'Услуги/Прием_Аккумуляторов', Component: <DiagnosticsPage/>},
        {path:`Каталог/${productFullCard?.manufacturer}`, Component: <ProductFullPage/>},
        {path:'ИНФОРМАЦИЯ', Component: <Info/>},
        {path:'*', Component: null},
    ]
    return(
        <div className={`flex w-[100%] max-w-[1200px] justify-center sm:mt-5`}>


<Routes >
 
 {
routes.map(({path, Component}) =>
    <Route key={path} path={path}  element={Component}/> 
)
}
</Routes>

        </div>
    )
}
