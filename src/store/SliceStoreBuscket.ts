import { createSlice } from '@reduxjs/toolkit';
import { IProducts } from '../IProducts';

interface initialState {
    productsInBasket: IProducts[];
    array: 
        {
            id:number
            price: number
            count: number
        }[]

}

const initialState: initialState = {
    productsInBasket: [],
    array: []
}

export const SliceStoreBasket = createSlice({
    name: 'SliceStoreBasket',
    initialState,
    reducers: {
        HandleAddProducts: (state, action) => {
            const productsAdd: IProducts = action.payload;
            const existingProduct = state.productsInBasket.find(product => product.id === productsAdd.id);
            
            if (!existingProduct) {
                state.productsInBasket.push(productsAdd);
                state.array.push({id:productsAdd.id, count:1, price:productsAdd.price})
            }
        },
        HandleRemoveProducts: (state, action) => {
            const product: IProducts = action.payload;
            const array = state.productsInBasket
            array.splice(array.indexOf(array.filter(item => item.id === product.id)[0]), 1);
            state.array.splice(array.indexOf(array.filter(item => item.id === product.id)[0]), 1);

        },
        HandleRemoveAllProducts:(state) => {
            state.productsInBasket = []
            state.array = []
        },

        HandleCountProducts:(state, action)=>{
            const {id,count}  = action.payload
            state.array.filter(product => product.id === id)[0].count = count

        }


        
    }
})

export const { HandleAddProducts, HandleRemoveProducts, HandleRemoveAllProducts ,  HandleCountProducts} = SliceStoreBasket.actions;

export default SliceStoreBasket.reducer;