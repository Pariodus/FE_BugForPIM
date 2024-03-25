'use client'
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeReservation } from "@/redux/features/cartSlice"

export default function ReservationCart(){
    const cardItems = useAppSelector((state) => state.cartSlice.cardItems)
    const dispatch = useDispatch<AppDispatch>()
    
    return (
        <>
        {
            cardItems.map((reservationItem)=>(
                <div className="bg-slate-200 rounded-lg mx-5 py-2 my-2" key={reservationItem.coworking}>
                        <div className="text-xl mx-2">UserId: {reservationItem.user}</div>
                        <div className="text-sm mx-2">ReserveDate: {reservationItem.reserveDate}</div>
                        <div className="text-sm mx-2">StartTime: {reservationItem.reserveDateStart}</div>
                        <div className="text-sm mx-2">EndTime: {reservationItem.reserveDateEnd}</div>

                        <button className="block rounded-md bg-sky-600 mx-2 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                        onClick={()=>dispatch(removeReservation(reservationItem))}>
                            Remove from Cart
                        </button>
                </div>
            ))
        }
        </>
    )
}