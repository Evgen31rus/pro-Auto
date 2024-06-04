import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'



export interface initialState {
serch: {
    name: string
    status: boolean
},
call: {
    name: string
    status: boolean
}
modal: {
    name: string
    status: boolean
}
mobileMenu: {
    name: string
    status: boolean
}

}


const initialState: initialState = {
    serch: {
        name: 'search',
        status: false
    },
    call: {
        name: 'call',
        status: false
    },
    modal: {
        name: 'Modal',
        status: false
    },
    mobileMenu: {
        name: 'mobileMenu',
        status: false
    }

 }
 
 export const SliceModal = createSlice({
   name: 'SliceModal',
   initialState,
   reducers: {
     HandleIsOpenModal: (state, actions) => {
const {data, status} = actions.payload
const stateNameCall = state.call.name
let satateStatusCall = state.call.status
stateNameCall === data&&!satateStatusCall?satateStatusCall = true : satateStatusCall =false
state.serch.name === data&&!state.serch.status? state.serch.status = true  : state.serch.status =false
state.modal.name === data&&!state.modal.status? state.modal.status= true : state.modal.status=false
state.mobileMenu.name === data&&!state.mobileMenu.status? state.mobileMenu.status= true : state.mobileMenu.status=false
     }
   }
 })
 


export const {  HandleIsOpenModal } = SliceModal.actions

export default SliceModal.reducer