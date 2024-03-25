'use client'
import DateReserve from "@/components/DateReserve"
import TimeReserve from "@/components/TimeReserve";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from 'react'
import { useDispatch  } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "../../../interface";
import postReservation from "@/libs/postReservation";
import { useSession } from "next-auth/react";

export default function Reservetions(){

    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    const name = urlParams.get('name')
    const {data:session} = useSession()
    const user = session?.user._id

    const dispatch = useDispatch<AppDispatch>()
    const [hasBooked, setHasBooked] = useState(false)

    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)
    const [startTime, setStartTime] = useState<Dayjs|null>(null)
    const [endTime, setEndTime] = useState<Dayjs|null>(null)

    const makeReservation = async()=>{
        if(!session) return

        if(cid && name && pickupDate && startTime && endTime && user){
            const item: ReservationItem = {
                reserveDate: dayjs(pickupDate).format("YYYY/MM/DD"),
                reserveDateStart: dayjs(startTime).format("hh:mm:aa"),
                reserveDateEnd: dayjs(endTime).format("hh:mm:aa"),
                user: user,
                coworking: cid,
            }
            // dispatch(addReservation(item))
            console.log(item)
            try {
                const reserve = await postReservation(session.user.token, item);
                console.log("Reservation result", reserve)
            } catch(err){
                console.error("Error occured while booking: ", err);
            }
        }
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Reservation</div>
            <div className="text-xl font-medium">CoworkingSpace: {name}</div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600 m-3">Pick-Up Date</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}/>

                <div className="text-md text-left text-gray-600 m-3">Start Time</div>
                <TimeReserve onDateChange={(value:Dayjs)=>{setStartTime(value)}}/>

                <div className="text-md text-left text-gray-600 m-3">End Time</div>
                <TimeReserve onDateChange={(value:Dayjs)=>{setEndTime(value)}}/>
            </div>

            <button className="block rounded-md bg-rose-400 hover:bg-pink-700 px-3 py-2 text-white shadow-sm"
            onClick={makeReservation}>
                Reserve
            </button>
        </main>
    )

}
