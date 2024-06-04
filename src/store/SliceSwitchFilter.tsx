import { createSlice } from "@reduxjs/toolkit";

export interface initialState {
  ItemsIndexActive: number;
  DropDownParam:{
    index: number
    item: string
    inStock: boolean
    inNotStock: boolean
    all:boolean
  }
}

const initialState: initialState = {
  ItemsIndexActive: 0,
  DropDownParam:{
    index: 0,
    item: 'аккумуляторы',
    inStock: true,
    inNotStock: true,
    all: true
  },
};

export const SliceSwitchFilter = createSlice({
  name: "SliceSwitchFilter",
  initialState,
  reducers: {
    HandleSwitchFilterIndex: (state, action) => {
      const numberActive = action.payload;
      state.DropDownParam.item = ''
      state.ItemsIndexActive = numberActive;
    },

    HandleSwitchFilterDropDownIndex : (state, action) =>{
      const item= action.payload
      state.DropDownParam.item = item

    },
  },
});

export const { HandleSwitchFilterIndex, HandleSwitchFilterDropDownIndex} = SliceSwitchFilter.actions;

export default SliceSwitchFilter.reducer;
