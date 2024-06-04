import { createSlice } from '@reduxjs/toolkit'



export interface initialState {

      ItemsIndexActive: number
    

}


const initialState: initialState = {
   
     ItemsIndexActive: 0
   
 }
 
 export const sliderServiesSlider = createSlice({
   name: 'sliderServies',
   initialState,
   reducers: {
     HandleSwitchSlider: (state, action) => {
       const numberActive = action.payload;
       state.ItemsIndexActive = numberActive;
     }
   }
 })
 


export const {  HandleSwitchSlider } = sliderServiesSlider.actions

export default sliderServiesSlider.reducer