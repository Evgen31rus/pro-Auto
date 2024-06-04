import { createSlice } from '@reduxjs/toolkit'
import { IProducts } from '../IProducts';




interface initialState {
    products: IProducts[]
    categories: {
      batterry: string[]
      automaticOils: string[]
      autoChemicalGoods: string[]
      acsessuares:string[]
    },
    ProductCardFullInfo: IProducts|undefined

    
}


const initialState:initialState = {
   
     products: [],
    categories:{
      batterry:[],
      automaticOils:[],
      autoChemicalGoods:[],
      acsessuares:[]
    },
    ProductCardFullInfo: undefined

     
 }
 
 export const SliceStoreProducts = createSlice({
   name: 'SliceStoreProducts',
   initialState,
   reducers: {
    
     HandleAxiosResult: (state, action) => {
       const resultAxios:{products:IProducts[]} = action.payload;
       state.products = resultAxios.products;

       
       resultAxios.products.forEach(element => {
        if(element.startingСurrent){
          if (!state.categories.batterry.includes(element.manufacturer)) {
            state.categories.batterry.push(element.manufacturer);
        }
        }
        if(element.pHValue){
          if (!state.categories.autoChemicalGoods.includes(element.manufacturer)) {
            state.categories.autoChemicalGoods.push(element.manufacturer);
        }
        }
        if(element.engineType){
          if (!state.categories.automaticOils.includes(element.manufacturer)) {
            state.categories.automaticOils.push(element.manufacturer);
        }
        
        }
        if (!state.categories.acsessuares.includes(element.manufacturer)) {
          state.categories.acsessuares.push(element.manufacturer);
      }
        else{
          return null
        }

    });
     
    },
    HandleProductCardFullInfo: (state, action) =>{
    const data = action.payload
    state.ProductCardFullInfo = data
    }
   }

   
   
 })
 


export const {  HandleAxiosResult, HandleProductCardFullInfo} = SliceStoreProducts.actions

export default SliceStoreProducts.reducer