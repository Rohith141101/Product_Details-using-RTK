import { createSlice } from '@reduxjs/toolkit'
const initialState={
    // isLoading:false,
    cartItems:[],
    // error:null
}

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        productSuccess:(state,action)=>{
            state.isLoading=false
            state.cartItems=action.payload
        }
    }
})
export const {productSuccess}=CartSlice.actions

export default CartSlice.reducer;