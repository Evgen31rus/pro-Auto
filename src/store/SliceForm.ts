import { createSlice } from '@reduxjs/toolkit'



export interface initialState {

  form: {
    name: string|null
    phone: number|null
    eMail: string|null
  }
  numberOrder: number|null
  formServies:{
    name: string|null
    phone: number|null
    eMail: string|null,
    servies: string|null
    mesage: string|null
  }
  formCall:{
    name: string|null
    phone: number|null
    eMail: string|null
    servies: string|null
    mesage: string|null
  }

}


const initialState: initialState = {
   
    form: {
        name: null,
        phone: null,
        eMail: null,
  
      },
      numberOrder:null,
      formServies:{
        name: null,
        phone: null,
        eMail: null,
        servies: null,
        mesage: null
      },
      formCall:{
        name: null,
        phone: null,
        eMail: null,
        servies: null,
        mesage: null,
      }
 }
 
 export const sliseForm = createSlice({
   name: 'sliseForm',
   initialState,
   reducers: {
     HandleSabmitForm: (state, action) => {
const data ={
formName: action.payload,
name: action.payload,
phone: action.payload,
eMai: action.payload
} 
state.numberOrder = Math.floor(Math.random() * (999 - 1 + 1)) + 1
     },
     HandleFormDiagnostic: (state, action) =>{
const data = {
  name: action.payload,
  phone: action.payload,
  eMail: action.payload,
  servies: action.payload,
  mesage: action.payload,
}
state.formServies = data
     }
   }
 })
 


export const {  HandleSabmitForm, HandleFormDiagnostic } = sliseForm.actions

export default sliseForm.reducer