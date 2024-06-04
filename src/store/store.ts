import { configureStore } from '@reduxjs/toolkit'
import SliderServiesReducer from '../store/SliceSliderServies' 
import SwitchFilterReducer from '../store/SliceSwitchFilter' 
import StoreProductsReducer from '../store/SliceStoreProducts'
import StoreBuscketReducer from './SliceStoreBuscket'
import sliseFormReducer from './SliceForm'
import SliceModalReducer from './SliceModal'

export const store = configureStore({
  reducer: {
    sliderServies: SliderServiesReducer,
    switchFilter: SwitchFilterReducer,
    storeProducts: StoreProductsReducer,
    StoreBuscket: StoreBuscketReducer,
    sliseForm: sliseFormReducer,
    SliceModal: SliceModalReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch