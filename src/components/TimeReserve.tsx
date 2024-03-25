"use client"
import { useState } from "react"
import { DatePicker, TimePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs"

export default function TimeReserve({onDateChange}: {onDateChange:Function}){
    const [reserveTime, setReserveTime] = useState<Dayjs | null>(null)

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker className="bg-white" 
                value={reserveTime}
                onChange={(value)=>{setReserveTime(value); onDateChange(value)}}
                />
                {/* <DatePicker value={reserveTime} onChange={(value)=>{setReserveTime(value); onDateChange(value)}} /> */}
                    
                    
        
            </LocalizationProvider>
        </div>
    )
}