import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interface";

type CartState = {
    cardItems: ReservationItem[]
}

const initialState: CartState = { cardItems:[] }

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>)=>{
            state.cardItems.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<ReservationItem>)=>{
            const remainItems = state.cardItems.filter(obj=>{
                return((obj.reserveDate !== action.payload.reserveDate) 
                        || (obj.reserveDateStart !== action.payload.reserveDateStart)
                        || (obj.reserveDateEnd !== action.payload.reserveDateEnd)
                        || (obj.user !== action.payload.user)
                        || (obj.coworking !== action.payload.coworking));
            })
            state.cardItems = remainItems
        },
        // updateReservation: (state, action:PayloadAction<ReservationItem>)=>{
        //     const 
        // }
    }
})

export const { addReservation, removeReservation } = cartSlice.actions
export default cartSlice.reducer